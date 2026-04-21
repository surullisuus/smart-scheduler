import { createPortal } from "react-dom";
import "./EventModal.css";
import { useState, useEffect } from "react";

function EventModal({ event, onClose, onDelete, onUpdate }) {
    const [form, setForm] = useState({
        title: "",
        start: "",
        end: ""
    });

    useEffect(() => {
        if (event) {
            setForm({
                title: event.title,
                start: event.start,
                end: event.end
            });
        }
    }, [event]);

    if (!event) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

                <h2>Editar evento</h2>

                <input
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <input
                    type="time"
                    value={form.start}
                    onChange={(e) => setForm({ ...form, start: e.target.value })}
                />

                <input
                    type="time"
                    value={form.end}
                    onChange={(e) => setForm({ ...form, end: e.target.value })}
                />

                <div className="modal-buttons">
                    <button
                        className="btn-save"
                        onClick={() => {
                            const updated = { ...event, ...form };
                            onUpdate(updated);
                            onClose();
                        }}
                    >
                        Guardar
                    </button>

                    <button
                        className="btn-delete"
                        onClick={() => onDelete(event.id)}
                    >
                        Eliminar
                    </button>

                    <button
                        className="btn-close"
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default EventModal;