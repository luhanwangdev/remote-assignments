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

async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM user");
  return rows;
}

async function getUser(id) {
  const [rows] = await pool.query(
    `
    SELECT * FROM user WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

async function createUser(email, password) {
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

const result = await getUsers();
console.log(result);
