const pool = require("../config/db");

// función helper para transformar datos
const mapEvent = (e) => ({
  ...e,
  start: e.start_time?.slice(0, 5),
  end: e.end_time?.slice(0, 5)
});

const getAllEvents = async () => {
  const res = await pool.query("SELECT * FROM events ORDER BY id DESC");
  return res.rows.map(mapEvent);
};

const createEvent = async (event) => {
  const { title, date, start, end, color } = event;

  const res = await pool.query(
    `INSERT INTO events (title, date, start_time, end_time, color)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [title, date, start, end, color]
  );

  return mapEvent(res.rows[0]);
};

const updateEvent = async (id, event) => {
  const { title, date, start, end, color } = event;

  const res = await pool.query(
    `UPDATE events
     SET title=$1, date=$2, start_time=$3, end_time=$4, color=$5
     WHERE id=$6
     RETURNING *`,
    [title, date, start, end, color, id]
  );

  return mapEvent(res.rows[0]);
};

const deleteEvent = async (id) => {
  await pool.query("DELETE FROM events WHERE id=$1", [id]);
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
};