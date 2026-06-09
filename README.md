# TaskFlow

A modern full-stack task management web application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). TaskFlow helps users organize, track, and manage tasks efficiently through a clean and responsive interface.

Live Demo: https://task-management-web-application-beryl.vercel.app/


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
<img width="1346" height="630" alt="image" src="https://github.com/user-attachments/assets/46f4bfa4-4d6d-44b5-a5c7-37dfad2254fd" />

### Dashboard
<img width="1341" height="628" alt="image" src="https://github.com/user-attachments/assets/46b4d38e-8068-47ec-8c00-6eaf1bf21de1" />

### Tasks Page
<img width="1346" height="635" alt="image" src="https://github.com/user-attachments/assets/65519f4c-7083-4829-9146-620077f55ff9" />

### Analytics Page
<img width="1353" height="626" alt="image" src="https://github.com/user-attachments/assets/bf574f4d-730e-4c07-bbb2-1beaa2f03b18" />

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


## Author

**Shravan Das**

