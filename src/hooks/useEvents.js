import { useState, useEffect, useRef } from "react";
import { eventColors } from "../utils/colors";

export function useEvents() {
  const [events, setEvents] = useState([]);
  const colorIndexRef = useRef(0); 

  const getNextColor = () => {
    const color = eventColors[colorIndexRef.current];
    colorIndexRef.current =
      (colorIndexRef.current + 1) % eventColors.length;
    return color;
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(saved);

    colorIndexRef.current = saved.length % eventColors.length;
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    const color = getNextColor();

    setEvents(prev => [
      ...prev,
      {
        ...newEvent,
        id: Date.now(),
        color
      }
    ]);
  };

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const updateEvent = (updatedEvent) => {
  setEvents(prev =>
    prev.map(e =>
      e.id === updatedEvent.id ? updatedEvent : e
    )
  );
};

  return { events, addEvent, deleteEvent,updateEvent };
}