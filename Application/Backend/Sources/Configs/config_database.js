import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  port: process.env.PORT_DB,
  database: process.env.NAME_DB_SV,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
