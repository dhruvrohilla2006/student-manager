
import jwt from 'jsonwebtoken'
import config from '../config/config'


interface JwtUserPayload {
  id: number;
}

export const jwtTokenGen = async (userId:number) => {

        return jwt.sign({id:userId
        },config.secretkey,{
              expiresIn:'7d'
        })
}

export const exposeJwtData = (token:string):JwtUserPayload => {
 const decoded = jwt.verify(token, config.secretkey);

  if (typeof decoded === "string") {
    throw new Error("Invalid JWT payload");
  }

  if (!decoded.id) {
    throw new Error("JWT missing user id");
  }

  return {
    id: decoded.id as number,
  };
}