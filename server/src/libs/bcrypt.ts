import bcrypt from "bcryptjs";

export const hashpass = async (passwordString: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(passwordString, salt);


  return hash;
};

export const removehash = async (password:string,hashString:string) => {
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.compare(password,hashString)

  return pass;
}

