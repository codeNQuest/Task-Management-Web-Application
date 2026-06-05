# Quick Start Guide

## Prerequisites
- Node.js v14+ installed
- MongoDB running locally or MongoDB Atlas account
- npm or yarn

## Step 1: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start MongoDB (if running locally)
# Make sure MongoDB service is running

# Start development server
npm run dev
```

Backend will run on: `http://localhost:5000`

## Step 2: Frontend Setup (New Terminal)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Frontend will run on: `http://localhost:5174` (or next available port)

## Step 3: Test the Application

1. Open browser and navigate to frontend URL (e.g., http://localhost:5174)
2. Click "Register" to create a new account
3. Fill in the registration form with:
   - Full Name
   - Email
   - Password (min 6 characters)
   - Confirm Password

4. After registration, you'll be redirected to Dashboard
5. Try adding a task
6. Test task operations (edit, delete, mark as complete)

## Database Configuration

### Option 1: Local MongoDB
```bash
# Make sure MongoDB is running locally
# Default connection: mongodb://localhost:27017/task-management
```

### Option 2: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `.env` file in backend:
```env
MONGO_URI=your_atlas_connection_string
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod` command in terminal
- For Atlas, verify connection string in .env file

### Port Already in Use
- Backend: Change PORT in .env file
- Frontend: Vite will automatically use next available port

### CORS Errors
- Backend server must be running
- Check frontend API URL in `src/utils/api.js`

### npm command not found
- Ensure Node.js is installed: `node --version`
- Restart terminal after installing Node.js

## Default Test Credentials

You can use these to test after registering:
- Email: test@example.com
- Password: password123

## Production Build

### Frontend Build
```bash
cd frontend
npm run build
# Output in dist/ folder
```

### Running Backend in Production
```bash
cd backend
npm start
```

## Next Steps

- Implement search functionality
- Add task categories/tags
- Deploy to cloud (Heroku/Vercel)
- Add due dates and notifications
- Implement team collaboration features

---

**Need help?** Check the main README.md for more details!
