import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function checkUser(email) {
  const [rows] = await pool.query(
    `
    SELECT * FROM user WHERE email = ?
    `,
    [email]
  );
  return rows[0];
}

export async function authenticateUser(email, password) {
  const [rows] = await pool.query(
    `
    SELECT * FROM user WHERE email = ? AND password = ?
    `,
    [email, password]
  );
  return rows[0];
}

export async function createUser(email, password) {
  const [result] = await pool.query(
    `
        INSERT INTO user(email, password)
        VALUE(?, ?);
    `,
    [email, password]
  );
  const id = result.insertId;
  return getUser(id);
}

// const result = await getUser("123@gmail.com", "123");
// console.log(result);
