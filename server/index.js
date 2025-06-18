const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const { storage } = require('./utils/cloudinary'); // 🌩️ Cloudinary storage
const upload = multer({ storage });

const app = express();
app.use(cors({
  origin: "https://innovate-jet.vercel.app",
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err.message));

// Import model
const Application = require('./models/Application');

// POST: Submit application
app.post('/api/apply', upload.single('resume'), async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone,
      position, cover,
      city, state, zipCode, presentJob,
      country, gender, dateOfBirth, poBox,
      verifiedEmail
    } = req.body;

    // Cloudinary resume URL
    const resumeUrl = req.file ? req.file.path : '';

    const newApp = new Application({
      firstName,
      lastName,
      email,
      phone,
      position,
      cover,
      city,
      state,
      zipCode,
      presentJob,
      country,
      gender,
      dateOfBirth,
      poBox,
      verifiedEmail,
      resume: resumeUrl
    });

    await newApp.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('Error saving application:', err);
    res.status(500).json({ error: 'Failed to save application', details: err.message });
  }
});

// GET: Admin dashboard (get all applicants)
app.get('/api/applications', async (req, res) => {
  try {
    const apps = await Application.find().sort({ submittedAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications', details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
