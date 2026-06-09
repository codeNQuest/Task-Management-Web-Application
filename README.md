# TaskFlow

A modern full-stack task management web application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). TaskFlow helps users organize, track, and manage tasks efficiently through a clean and responsive interface.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Encryption

### Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* Search Tasks
* Mark Tasks as Completed
* Set Task Priorities
* Due Date Management

### Analytics

* Total Tasks
* Completed Tasks
* Pending Tasks
* Overdue Tasks
* Interactive Charts

### User Experience

* Responsive Design
* Dark Mode
* Light Mode
* Toast Notifications
* Modern Dashboard

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* React Context API
* React Toastify
* Recharts

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* CORS
* dotenv

## Project Structure

```text
TaskFlow/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## Screenshots

### Login Page

![Login](screenshots/login.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Tasks Page

![Tasks](screenshots/tasks.png)

### Analytics Page

![Analytics](screenshots/analytics.png)

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/TaskFlow.git
cd TaskFlow
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint                  |
| ------ | ------------------------- |
| POST   | /api/auth/register        |
| POST   | /api/auth/login           |
| GET    | /api/auth/me              |
| PUT    | /api/auth/me              |
| POST   | /api/auth/change-password |

### Tasks

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | /api/tasks       |
| POST   | /api/tasks       |
| PUT    | /api/tasks/:id   |
| DELETE | /api/tasks/:id   |
| GET    | /api/tasks/stats |

## Environment Variables

### Backend

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Server Port               |
| MONGO_URI  | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key            |

### Frontend

| Variable     | Description     |
| ------------ | --------------- |
| VITE_API_URL | Backend API URL |

## Available Scripts

### Backend

| Command     | Description            |
| ----------- | ---------------------- |
| npm run dev | Run development server |
| npm start   | Run production server  |

### Frontend

| Command         | Description                 |
| --------------- | --------------------------- |
| npm run dev     | Run Vite development server |
| npm run build   | Create production build     |
| npm run preview | Preview production build    |

## Learning Outcomes

This project helped improve knowledge in:

* Full Stack Development
* REST APIs
* MongoDB Database Design
* JWT Authentication
* React State Management
* Context API
* Backend Integration
* Deployment Workflows

## Future Improvements

* Task Categories
* Team Collaboration
* Calendar View
* Email Notifications
* Drag and Drop Tasks
* Mobile Application
* Real-Time Updates

## License

MIT License

## Author

**Shravan Das**

Built with React, Node.js, Express.js, and MongoDB.
