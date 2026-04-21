import { useState } from "react";
import EventForm from "./components/EventForm/EventForm";
import Calendar from "./components/Calendar/Calendar";
import EventModal from "./components/EventModal/EventModal";
import { useEvents } from "./hooks/useEvents";
import { getWeek } from "./utils/eventUtils";
import "./styles/global.css";

function App() {
  const { events, addEvent, deleteEvent, updateEvent } = useEvents();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const days = getWeek();

  return (
    <div className="app-container">
      <h1>Smart Scheduler</h1>

      <EventForm addEvent={addEvent} days={days} />

      <Calendar
        events={events}
        updateEvent={updateEvent}
        onSelectEvent={setSelectedEvent}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onDelete={(id) => {
          deleteEvent(id);
          setSelectedEvent(null);
        }}
        onUpdate={(id, updatedEvent) => {
          updateEvent(id, updatedEvent);
          setSelectedEvent(null);
        }}
      />
    </div>
  );
}

export default App;