# TaskFlow Backend

Express + MongoDB backend for TaskFlow.

Setup:

1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Install deps: `npm ci` or `npm install` inside `backend`.
3. Start: `npm run dev` (requires `nodemon`) or `npm start`.

APIs:

- `POST /api/auth/register` { name, email, password }
- `POST /api/auth/login` { email, password }
- `GET  /api/auth/me` - returns logged-in user

- `GET /api/tasks` - get tasks (protected)
- `POST /api/tasks` - create task (protected)
- `PUT /api/tasks/:id` - update (protected)
- `DELETE /api/tasks/:id` - delete (protected)
- `GET /api/tasks/stats` - returns stats (protected)
