import { createPortal } from "react-dom";
import "./EventModal.css";
function EventModal({ event, onClose, onDelete }) {
    if (!event) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{event.title}</h2>
                <p>{event.day}</p>
                <p>{event.start} - {event.end}</p>

                <div className="modal-buttons">
                    <button onClick={() => onDelete(event.id)}>
                        Eliminar
                    </button>

                    <button onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default EventModal;