import EventBlock from "../EventBlock/EventBlock";
import { useState, useMemo } from "react";
import { getWeek, groupOverlappingEvents } from "../../utils/eventUtils";
import "./Calendar.css";

function Calendar({ events, updateEvent, onSelectEvent }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = useMemo(() => getWeek(currentDate), [currentDate]);
  const monthLabel = currentDate.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric"
  });

  const goToNextWeek = () => {
    const next = new Date(currentDate);
    next.setDate(currentDate.getDate() + 7);
    setCurrentDate(next);
  };

  const goToPrevWeek = () => {
    const prev = new Date(currentDate);
    prev.setDate(currentDate.getDate() - 7);
    setCurrentDate(prev);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = (date) => {
    const today = new Date();

    return date.toDateString() === today.toDateString();
  };

  const goToNextMonth = () => {
    const next = new Date(currentDate);
    next.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(next);
  };

  const goToPrevMonth = () => {
    const prev = new Date(currentDate);
    prev.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prev);
  };

  return (
    <div className="calendar-container">

      <div className="calendar-nav">
        <button onClick={goToPrevMonth}>⟨⟨</button>
        <button onClick={goToPrevWeek}>←</button>
        <button onClick={goToToday}>Hoy</button>
        <button onClick={goToNextWeek}>→</button>
        <button onClick={goToNextMonth}>⟩⟩</button>
      </div>


      {/* MES ACTUAL */}
      <h2 className="month-label">{monthLabel}</h2>

      {/* HEADER (días) */}
      <div className="calendar-header">
        <div></div> {/* espacio para la columna de horas */}
        {days.map(day => (
          <div
            key={day.date.toISOString()}
            className="day-header"
          >
            <span>{day.dayName}</span>

            <span style={{ marginLeft: 6 }} className={isToday(day.date) ? "today-badge" : ""}>
              {day.dayNumber}
            </span>
          </div>
        ))}
      </div>

      {/* BODY */}
      <div className="calendar-body">

        {/* Columna de horas */}
        <div className="time-column">
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className="time-cell">
              {String(i).padStart(2, "0")}:00
            </div>
          ))}
        </div>

        {/* Columnas por día */}
        {days.map(day => {
          const dayEvents = events.filter(e =>
            e.date?.slice(0, 10) === day.date.toISOString().slice(0, 10)
          );
          const groups = groupOverlappingEvents(dayEvents);

          return (
            <div
              key={day.date.toISOString()}
              className={`day-column ${isToday(day.date) ? "today-column" : ""}`}
            >
              {groups.map(group =>
                group.map((event, index) => (
                  <EventBlock
                    key={event.id}
                    event={event}
                    index={index}
                    total={group.length}
                    updateEvent={updateEvent}
                    onSelect={onSelectEvent}
                  />
                ))
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Calendar;