const express = require("express");
const cors = require("cors");

const eventsRoutes = require("./routes/events.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRoutes);

module.exports = app;