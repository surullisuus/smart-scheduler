# 🗓 Smart Scheduler

Aplicación web full-stack para la gestión inteligente de horarios y eventos, con detección automática de conflictos (event overlap).

---

## 🧠 Descripción

Smart Scheduler permite a los usuarios crear, editar y visualizar eventos en un calendario, identificando automáticamente conflictos de horarios mediante lógica de solapamiento.

El sistema está diseñado con una arquitectura desacoplada cliente-servidor, permitiendo escalabilidad y mantenibilidad.

---

## ⚙️ Tecnologías

* **Frontend:** React, TypeScript, CSS
* **Backend:** Node.js (Express)
* **Base de datos:** PostgreSQL
* **Arquitectura:** REST API, Cliente-Servidor

---

## ✨ Funcionalidades

* Creación, edición y eliminación de eventos
* Visualización de eventos en calendario
* Detección de solapamiento de eventos (conflictos de horario)
* Persistencia de datos en base de datos relacional

---

## 🏗 Arquitectura

El sistema sigue una arquitectura desacoplada:

* Frontend desarrollado en React con componentes reutilizables
* Backend en Node.js encargado de la lógica de negocio
* API REST para comunicación entre cliente y servidor
* Base de datos PostgreSQL para almacenamiento persistente

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/smart-scheduler.git
cd smart-scheduler
```

---

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

---

### 3. Frontend

```bash
cd frontend/smart-scheduler
npm install
npm run dev
```

---

## 📡 Endpoints principales

```http
GET /events        # Obtener eventos
POST /events       # Crear evento
PUT /events/:id    # Actualizar evento
DELETE /events/:id # Eliminar evento
```

---

## 🧪 Posibles mejoras

* Autenticación de usuarios
* Notificaciones de conflictos
* Integración con calendarios externos
* Optimización de rendimiento en renderizado de eventos

---

## 📌 Estado del proyecto

MVP (Minimum Viable Product) – en desarrollo

---

## 👩‍💻 Autor

**Julia Sofía García Gaviria**
Software Engineer | Full-Stack Developer

GitHub: https://github.com/surullisuus
