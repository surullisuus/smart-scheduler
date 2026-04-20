let events = [];

const getAllEvents = () => events;

const createEvent = (event) => {
  const newEvent = { ...event, id: Date.now() };
  events.push(newEvent);
  return newEvent;
};

const updateEvent = (id, updatedData) => {
  events = events.map(e =>
    e.id === id ? { ...e, ...updatedData } : e
  );
};

const deleteEvent = (id) => {
  events = events.filter(e => e.id !== id);
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent
};