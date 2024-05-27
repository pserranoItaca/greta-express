import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const {
  DB_HOST: host,
  DB_PORT: port,
  DB_USER: user,
  DB_PASSWORD: password,
  DB_NAME: database,
} = process.env;

const pool = mysql.createPool({
  host,
  user,
  password,
  database,
  port: Number(port),
});

const query = (sql: string | mysql.QueryOptions, values: any = {}) =>
  new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;

      connection.query(sql as string, values, (err, rows) => {
        connection.release();

        if (err) return reject(err);

        resolve(rows);
      });
    });
  });

const client = {
  ...pool,
  query,
};

export default client;
