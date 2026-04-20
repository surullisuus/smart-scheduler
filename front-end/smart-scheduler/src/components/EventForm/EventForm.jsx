import { useState } from "react";
import "./EventForm.css";

/**
 * Formulario para crear eventos
 */
function EventForm({ addEvent }) {
  const [form, setForm] = useState({
    title: "",
    day: "",
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
      addEvent(form);
      setForm({ title: "", day: "", start: "", end: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Nuevo evento</h2>

      <input name="title" placeholder="Título" value={form.title} onChange={handleChange} />
      <select name="day" value={form.day} onChange={handleChange}>
        <option value="">Seleccionar día</option>
        <option>Lunes</option>
        <option>Martes</option>
        <option>Miércoles</option>
        <option>Jueves</option>
        <option>Viernes</option>
      </select>
      <input type="time" name="start" value={form.start} onChange={handleChange} />
      <input type="time" name="end" value={form.end} onChange={handleChange} />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default EventForm;