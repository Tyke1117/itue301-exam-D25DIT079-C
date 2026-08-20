# MedCare Plus - Hospital Appointment System

MedCare Plus is a modern Hospital Appointment System developed using React, Express.js, MongoDB and Mongoose.

The application provides a clean healthcare interface for discovering doctors and booking hospital appointments.

## Features

* Modern healthcare-focused user interface
* Home page with healthcare overview
* Doctor discovery page
* Doctor availability display
* Appointment booking form
* Appointment preview
* React Router navigation
* React state management using useState
* Express REST APIs
* Custom request logging middleware
* Global error-handling middleware
* MongoDB database integration using Mongoose
* Schema validation for patients, doctors and appointments

## Technology Stack

### Frontend

* React
* Vite
* React Router
* Lucide React

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### Database

* MongoDB
* Mongoose

## Project Structure

```text
MedCare Plus/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── models/
│   │   ├── Patient.js
│   │   ├── Doctor.js
│   │   └── Appointment.js
│   ├── server.js
│   └── package.json
│
├── .env.example
├── .gitignore
└── README.md
```

## Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run using the Vite development server.

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory.

Add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```bash
node server.js
```

## MongoDB Setup

Create a MongoDB database and obtain the MongoDB connection string.

Store the connection string inside the `.env` file using the `MONGO_URI` environment variable.

The application uses Mongoose for database connection and schema management.

## REST API Endpoints

### Get all appointments

```text
GET /api/v1/appointments
```

Returns all appointments.

### Create an appointment

```text
POST /api/v1/appointments
```

Creates a new appointment.

### Get all doctors

```text
GET /api/v1/doctors
```

Returns the available doctor information.

## Mongoose Models

The backend contains three Mongoose schemas:

* Patient
* Doctor
* Appointment

The Appointment schema uses references to connect patients and doctors.

## Environment Variables

The project requires:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

The `.env` file must not be committed to GitHub.

## Running the Complete Application

Start the backend:

```bash
cd backend
node server.js
```

In another terminal, start the frontend:

```bash
cd frontend
npm run dev
```

The frontend communicates with the Express backend through the REST API.

## Author

Developed as part of the ITUE301 - Advanced Web Development Frameworks practical examination.
