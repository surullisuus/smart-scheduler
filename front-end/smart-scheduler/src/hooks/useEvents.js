import { useState, useEffect, useRef } from "react";
import { getRandomColor } from "../utils/colors";

export function useEvents() {

  const fetchEvents = async () => {
  const res = await fetch("http://localhost:3000/api/events");
  const data = await res.json();
  setEvents(data);
};
  const [events, setEvents] = useState([]);
  const colorIndexRef = useRef(0); 

 const getNextColor = () => {
    const color = getRandomColor()
    return color;
  };

useEffect(() => {
  fetchEvents();
}, []);


const addEvent = async (event) => {
  const res = await fetch("http://localhost:3000/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(event)
  });

  const newEvent = await res.json();
  setEvents(prev => [...prev, newEvent]);
};

const deleteEvent = async (id) => {
  await fetch(`http://localhost:3000/api/events/${id}`, {
    method: "DELETE"
  });

  setEvents(prev => prev.filter(e => e.id !== id));
};

const updateEvent = async (updatedEvent) => {
  await fetch(`http://localhost:3000/api/events/${updatedEvent.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedEvent)
  });

  setEvents(prev =>
    prev.map(e => e.id === updatedEvent.id ? updatedEvent : e)
  );
};
  return { events, addEvent, deleteEvent,updateEvent };
}