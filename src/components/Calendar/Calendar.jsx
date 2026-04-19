import EventBlock from "../EventBlock/EventBlock";
import { groupOverlappingEvents } from "../../utils/eventUtils";
import "./Calendar.css";

function Calendar({ events, updateEvent, onSelectEvent }) {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    return (
        <div className="calendar-container">
            <div className="calendar-body">

                {/* Columna de horas */}
                <div className="time-column">
                    {Array.from({ length: 11 }, (_, i) => (
                        <div key={i} className="time-cell">
                            {8 + i}:00
                        </div>
                    ))}
                </div>

                {/* Columnas por día */}
                {days.map(day => {
                    const dayEvents = events.filter(e => e.day === day);
                    const groups = groupOverlappingEvents(dayEvents);

                    return (
                        <div key={day} className="day-column">
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