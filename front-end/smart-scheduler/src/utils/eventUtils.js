
export const toMinutes = (time) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

export const toTime = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};

export const hasConflict = (newEvent, events) => {
  return events.some(e => {
    if (e.day !== newEvent.day) return false;

    const startA = toMinutes(newEvent.start);
    const endA = toMinutes(newEvent.end);
    const startB = toMinutes(e.start);
    const endB = toMinutes(e.end);

    return startA < endB && endA > startB;
  });
};


const isOverlapping = (a, b) => {
  const startA = toMinutes(a.start);
  const endA = toMinutes(a.end);
  const startB = toMinutes(b.start);
  const endB = toMinutes(b.end);

  return startA < endB && endA > startB;
};


export const groupOverlappingEvents = (events) => {
  const groups = [];

  events.forEach(event => {
    let placed = false;

    for (let group of groups) {
      if (group.some(e => isOverlapping(e, event))) {
        group.push(event);
        placed = true;
        break;
      }
    }

    if (!placed) {
      groups.push([event]);
    }
  });

  return groups;
};

// obtener Semana

export const getWeek = (startDate = new Date()) => {
  const date = new Date(startDate);

  const day = date.getDay(); // 0 = domingo
  const diff = day === 0 ? -6 : 1 - day;

  const monday = new Date(date);
  monday.setDate(date.getDate() + diff);

  const days = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);

    days.push({
      date: d,
      dayName: d.toLocaleDateString("es-ES", { weekday: "short" }),
      dayNumber: d.getDate()
    });
  }

  return days;
};

