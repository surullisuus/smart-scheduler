import { useState } from "react";
import "./EventForm.css";
import { getRandomColor } from  "../../utils/colors"

/**
 * Formulario para crear eventos
 */
function EventForm({ addEvent, days }) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    start: "",
    end: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      addEvent({
        title: form.title,
        date: form.date.split("T")[0],
        start: form.start,
        end: form.end,
        color: getRandomColor()
      });

      setForm({ title: "", date: "", start: "", end: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Nuevo evento</h2>

      <input name="title" placeholder="Título" value={form.title} onChange={handleChange} />
      <select name="date" value={form.date} onChange={handleChange}>
        <option value="">Seleccionar día</option>
        {days.map(day => (
          <option
            key={day.date.toISOString()}
            value={day.date.toISOString()}
          >
            {day.dayName} {day.dayNumber}
          </option>
        ))}
      </select>
      <input type="time" name="start" value={form.start} onChange={handleChange} />
      <input type="time" name="end" value={form.end} onChange={handleChange} />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default EventForm;