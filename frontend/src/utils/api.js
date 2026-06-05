import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API calls
export const authAPI = {
  register: (name, email, password) =>
    api.post('/auth/register', { name, email, password }),
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
};

// Task API calls
export const taskAPI = {
  getTasks: () => api.get('/tasks'),
  createTask: (title, description) =>
    api.post('/tasks', { title, description }),
  updateTask: (id, title, description, status) =>
    api.put(`/tasks/${id}`, { title, description, status }),
  deleteTask: (id) => api.delete(`/tasks/${id}`),
  toggleTaskStatus: (id) => api.patch(`/tasks/${id}/toggle`),
};

export default api;
