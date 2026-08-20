import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import Patient from "./models/Patient.js";
import Doctor from "./models/Doctor.js";
import Appointment from "./models/Appointment.js";


const app = express();

app.use(cors());
app.use(express.json());


// Request Logger Middleware
const requestLogger = (req, res, next) => {
  console.log(
    `[${req.method}] ${req.path} [${new Date().toISOString()}]`
  );

  next();
};

app.use(requestLogger);


// Temporary doctor data for Task 3
const doctors = [
  {
    id: 1,
    name: "Dr. Aarav Shah",
    email: "aarav@medcareplus.com",
    specialisation: "Cardiology",
    available: true
  },
  {
    id: 2,
    name: "Dr. Meera Patel",
    email: "meera@medcareplus.com",
    specialisation: "Neurology",
    available: true
  },
  {
    id: 3,
    name: "Dr. Riya Desai",
    email: "riya@medcareplus.com",
    specialisation: "Pediatrics",
    available: false
  },
  {
    id: 4,
    name: "Dr. Kabir Mehta",
    email: "kabir@medcareplus.com",
    specialisation: "Dermatology",
    available: true
  }
];

let appointments = [];


// GET appointments
app.get("/api/v1/appointments", (req, res) => {
  res.status(200).json({
    success: true,
    data: appointments
  });
});


// POST appointment
app.post("/api/v1/appointments", (req, res) => {

  const appointment = {
    id: Date.now(),
    ...req.body
  };

  appointments.push(appointment);

  res.status(201).json({
    success: true,
    message: "Appointment created successfully",
    data: appointment
  });
});


// GET doctors
app.get("/api/v1/doctors", (req, res) => {
  res.status(200).json({
    success: true,
    data: doctors
  });
});
//test
app.post("/api/v1/test-patient", async (req, res, next) => {
  try {
    const patient = await Patient.create(req.body);

    res.status(201).json({
      success: true,
      data: patient
    });

  } catch (error) {
    next(error);
  }
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });


// Global error middleware
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    success: false,
    message: "Something went wrong on the server."
  });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`medcareplus backend running on port ${PORT}`);
});