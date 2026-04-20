import { useState, useRef, useEffect } from "react";
import { toMinutes, toTime } from "../../utils/eventUtils";
import "./EventBlock.css";

function EventBlock({ event, index, total, updateEvent, onSelect }) {
    const [dragging, setDragging] = useState(false);

    const startYRef = useRef(0);
    const movedRef = useRef(false);

    const start = toMinutes(event.start);
    const end = toMinutes(event.end);

    const dayStart = 0;

    const pixelsPerMinute = 1; 

    const top = (start - dayStart) * pixelsPerMinute;
    const height = (end - start) * pixelsPerMinute;

    const width = 100 / total;
    const left = index * width;

    const handleMouseDown = (e) => {
        startYRef.current = e.clientY;
        movedRef.current = false;
        setDragging(true);
    };

    useEffect(() => {
        const handleMove = (e) => {
            if (!dragging) return;

            const delta = e.clientY - startYRef.current;


            if (Math.abs(delta) > 5) {
                movedRef.current = true;
            }

            const newStart = start + delta;
            const newEnd = end + delta;

            updateEvent({
                ...event,
                start: toTime(newStart),
                end: toTime(newEnd)
            });
        };

        const handleUp = () => {
            if (!dragging) return;

            setDragging(false);

            if (!movedRef.current) {
                onSelect(event);
            }
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleUp);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleUp);
        };
    }, [dragging, event, updateEvent, onSelect]);

    return (
        <div
            className="event-block"
            onMouseDown={handleMouseDown}
            style={{
                top: `${top}px`,
                height: `${height}px`,
                width: `${width}%`,
                left: `${left}%`,
                background: event.color,
                cursor: dragging ? "grabbing" : "grab"
            }}
        >
            <strong>{event.title}</strong>
            <div>{event.start} - {event.end}</div>
        </div>
    );
}

export default EventBlock;