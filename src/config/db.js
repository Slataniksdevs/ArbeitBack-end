const mysql = require("mysql");

const dbSettings = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
};

const connection = mysql.createConnection(dbSettings);

connection.connect((err) => {
  if (err) return console.error(`Error al conectar la base de datos: ${err}`);
  console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;
