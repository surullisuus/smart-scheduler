import { useState } from "react";
import EventForm from "./components/EventForm/EventForm";
import Calendar from "./components/Calendar/Calendar";
import EventModal from "./components/EventModal/EventModal";
import { useEvents } from "./hooks/useEvents";
import "./styles/global.css";

function App() {
const { events, addEvent, deleteEvent, updateEvent } = useEvents();

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="app-container">
      <h1>Smart Scheduler</h1>

      <EventForm addEvent={addEvent} />

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
      />
    </div>
  );
}

export default App;