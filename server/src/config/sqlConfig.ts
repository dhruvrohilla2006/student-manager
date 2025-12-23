import mysql from 'mysql2/promise'
import config from './config';

export const pool = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASS,
    database: config.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}); 