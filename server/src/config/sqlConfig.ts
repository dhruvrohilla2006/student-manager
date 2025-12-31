import mysql from 'mysql2/promise'
import config from './config';
import {drizzle} from 'drizzle-orm/mysql2'
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

import {
  mysqlTable,
  int,
  varchar,
  mysqlEnum,
  timestamp,
} from "drizzle-orm/mysql-core";


 const pool = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASS,
    database: config.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}); 

const db = drizzle({client : pool});

export default db;


export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),

  name: varchar("name", { length: 50 }).notNull(),

  email: varchar("email", { length: 100 })
    .notNull()
    .unique(),

  passwordHash: varchar("password_hash", { length: 255 })
    .notNull(),

  role: mysqlEnum("role", ["student", "teacher", "admin"])
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

export const student_profile = mysqlTable("student_profiles",{
  user_id:int("user_id").primaryKey().references(()=>users.id).notNull(),
  course:mysqlEnum("course",["BCA"])
})


export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
