# TaskFlow Backend

Express + MongoDB backend for TaskFlow.

APIs:

- `POST /api/auth/register` { name, email, password }
- `POST /api/auth/login` { email, password }
- `GET  /api/auth/me` - returns logged-in user

- `GET /api/tasks` - get tasks (protected)
- `POST /api/tasks` - create task (protected)
- `PUT /api/tasks/:id` - update (protected)
- `DELETE /api/tasks/:id` - delete (protected)
- `GET /api/tasks/stats` - returns stats (protected)
