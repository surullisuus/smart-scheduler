export const getRandomColor = () => {
  const colors = [
    "#3b82f6", // azul
    "#22c55e", // verde
    "#f59e0b", // naranja
    "#ef4444", // rojo
    "#a855f7", // morado
    "#06b6d4", // cyan
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};