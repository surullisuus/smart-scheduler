const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const pool = require("./config/db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error conexión:", err);
  } else {
    console.log("Conectado a PostgreSQL:", res.rows);
  }
});