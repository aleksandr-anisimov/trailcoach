const express = require("express");
const cors = require("cors");

const app = express();

// Разрешаем запросы с фронта Vite (порт 5173 по умолчанию)
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Простейшая "база" пользователей для проверки
const users = [
  { id: "1", name: "Иван", email: "jenki@elitdomen.ru", password: "password" },
  { id: "2", name: "Test", email: "user@example.com", password: "password" },
];

// Хелсчек
app.get("/api/ping", (req, res) => res.send("ok"));

// Логин
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body || {};
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Не отдаём пароль в ответе
  const { password: _, ...safeUser } = user;
  return res.json(safeUser);
});

// Запуск
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});