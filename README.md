# Task Management Web Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing tasks with user authentication and real-time task operations.

## Features

- ✅ **User Authentication**: Secure registration and login with JWT tokens
- ✅ **Task Management**: Create, read, update, and delete tasks
- ✅ **Task Status**: Mark tasks as completed or pending
- ✅ **Responsive UI**: Mobile-friendly design with intuitive interface
- ✅ **Protected Routes**: Dashboard accessible only to authenticated users
- ✅ **Form Validation**: Client-side validation for all forms
- ✅ **Error Handling**: Comprehensive error messages and feedback

## Project Structure

```
Task Management Web Application/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── taskController.js  # Task CRUD operations
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Task.js            # Task schema
│   ├── routes/
│   │   ├── auth.js            # Auth endpoints
│   │   └── tasks.js           # Task endpoints
│   ├── server.js              # Main server file
│   ├── .env                   # Environment variables
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ProtectedRoute.jsx
    │   │   ├── TaskForm.jsx
    │   │   ├── TaskForm.css
    │   │   ├── TaskList.jsx
    │   │   └── TaskList.css
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── hooks/
    │   │   └── useAuth.js
    │   ├── utils/
    │   │   └── api.js
    │   ├── Pages/
    │   │   ├── login/
    │   │   │   ├── login.jsx
    │   │   │   └── Login.css
    │   │   ├── register/
    │   │   │   ├── Register.jsx
    │   │   │   └── Register.css
    │   │   └── dashboard/
    │   │       ├── Dashboard.jsx
    │   │       └── Dashboard.css
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```env
MONGO_URI=mongodb://localhost:27017/task-management
JWT_SECRET=your_jwt_secret_key_change_in_production
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

The backend server will start at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5174` (or another port if 5174 is in use)

## API Endpoints

### Authentication Endpoints

- **POST** `/api/auth/register` - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **POST** `/api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Task Endpoints (Protected - Require JWT Token)

- **GET** `/api/tasks` - Get all user tasks
- **POST** `/api/tasks` - Create a new task
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```

- **PUT** `/api/tasks/:id` - Update a task
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "status": "completed"
  }
  ```

- **DELETE** `/api/tasks/:id` - Delete a task

- **PATCH** `/api/tasks/:id/toggle` - Toggle task status

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs (Password hashing)

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3
- Vite (Build tool)

## Usage

1. **Register**: Create a new account on the registration page
2. **Login**: Sign in with your credentials
3. **Dashboard**: 
   - Add new tasks using the form
   - View all your tasks
   - Mark tasks as completed or pending
   - Edit task details
   - Delete tasks

## Key Features Explanation

### Authentication Flow
1. User registers with name, email, and password
2. Password is hashed using bcryptjs before storing in MongoDB
3. On login, credentials are verified and JWT token is issued
4. Token is stored in localStorage and sent with subsequent API requests
5. Protected routes check for valid token before granting access

### Task Management
- Tasks are associated with users via userId
- Only task owner can view, edit, or delete their tasks
- Task status can be toggled between pending and completed
- Tasks are displayed with metadata (creation date, last updated)

## Error Handling

The application includes comprehensive error handling:
- Form validation on both client and server side
- API error responses with descriptive messages
- Protected routes redirect unauthorized access to login page
- Loading states for better UX

## Future Enhancements

1. Search and filter functionality
2. Task pagination
3. Due dates and reminders
4. Task categories/tags
5. Collaboration features
6. Deployment (Vercel/Heroku)
7. Dark mode
8. Export tasks to PDF/CSV

## Deployment

### Frontend Deployment (Vercel)
```bash
npm run build
vercel deploy
```

### Backend Deployment (Heroku)
```bash
heroku create task-management-app
git push heroku main
```

## Troubleshooting

### Backend Connection Issues
- Ensure MongoDB is running locally or Atlas connection string is correct
- Check MONGO_URI in .env file
- Verify JWT_SECRET is set

### Frontend API Errors
- Ensure backend server is running on port 5000
- Check browser console for detailed error messages
- Clear localStorage if authentication issues persist

### CORS Issues
- Verify corsMiddleware is enabled in server.js
- Check API base URL in frontend/src/utils/api.js

## License

This project is licensed under the MIT License.

## Author

Task Management Web Application - MERN Stack Project

---

**Happy Task Managing! 🚀**
