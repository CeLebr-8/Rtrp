const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // 'public' folder contains your HTML, CSS, JS

// Dummy storage (replace with DB later)
let users = [];

// Register Endpoint
app.post('/api/register', (req, res) => {
  const { name, email, phone, password } = req.body;
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ name, email, phone, password });
  res.status(200).json({ message: 'Registration successful' });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { name, password } = req.body;
  const user = users.find(u => u.name === name && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
