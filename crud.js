// server.js (For Atlas / CRUD)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serves your index.html

// Mongoose Schema & Model
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    course: { type: String, required: true }
});
const Student = mongoose.model('Student', studentSchema);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err));

// CREATE Route
app.post('/students', async (req, res) => {
    await Student.create(req.body);
    res.status(201).json({ message: "Student added successfully!" });
});

// READ Route
app.get('/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// DELETE Route
app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully!" });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));