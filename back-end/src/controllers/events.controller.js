const eventsModel = require("../models/events.models");

const getEvents = async (req, res) => {
  const events = await eventsModel.getAllEvents();
  res.json(events);
};

const createEvent = async (req, res) => {
  const newEvent = await eventsModel.createEvent(req.body);
  res.json(newEvent);
};

const updateEvent = async (req, res) => {
  const id = Number(req.params.id);
  await eventsModel.updateEvent(id, req.body);
  res.sendStatus(200);
};

const deleteEvent = async (req, res) => {
  const id = Number(req.params.id);
  await eventsModel.deleteEvent(id);
  res.sendStatus(204);
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};