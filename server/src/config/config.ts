import { configDotenv } from "dotenv";

configDotenv();

interface Config {
  PORT: number;
  NODE_ENV: string;
  HOST: string;
  DBPORT: number;
  USER: string;
  PASS: string;
  DATABASE: string;
}

const config:Config = {
  PORT: Number(process.env.PORT ?? 3100),
  NODE_ENV: process.env.NODE_ENV ?? "development",
  HOST: process.env.HOST ?? "127.0.0.1",
  DBPORT: Number(process.env.DBPORT ?? 3366),
  USER: process.env.USER ?? "root",
  PASS: process.env.PASS ?? "",
  DATABASE: process.env.DATABASE ?? "smart_student"
};

export default config;
