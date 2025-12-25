import bcrypt from "bcryptjs";

const hashpass = async (passwordString: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(passwordString, salt);


  return hash;
};

export default hashpass