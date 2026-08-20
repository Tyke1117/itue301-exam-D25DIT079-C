import { useState } from "react";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import AppointmentCard from "../components/AppointmentCard";

function BookingPage() {

  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    timeSlot: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            patientName: form.patientName,
            doctorName: form.doctorName,
            date: form.date,
            timeSlot: form.timeSlot,
            status: "pending",
            reason: "General consultation"
          })
        }
      );

      if (!response.ok) {
        throw new Error("Booking failed");
      }

      setSubmitted(true);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="booking-page">

      <div className="booking-intro">
        <span>APPOINTMENT</span>

        <h1>
          Your time matters.
          <br />
          <strong>Let's book your visit.</strong>
        </h1>

        <p>
          Select a doctor and a convenient time.
          We'll take care of the rest.
        </p>
      </div>

      <div className="booking-layout">

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >

          <div className="form-header">
            <div className="form-icon">
              <CalendarDays />
            </div>

            <div>
              <h2>Book an appointment</h2>
              <p>Fill in your appointment details.</p>
            </div>
          </div>

          <label>
            Patient name

            <input
              name="patientName"
              value={form.patientName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Doctor name

            <input
              name="doctorName"
              value={form.doctorName}
              onChange={handleChange}
              placeholder="Choose your doctor"
              required
            />
          </label>

          <div className="form-row">

            <label>
              Date

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Time slot

              <select
                name="timeSlot"
                value={form.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="">Select time</option>
                <option>09:00 AM</option>
                <option>10:30 AM</option>
                <option>12:00 PM</option>
                <option>02:30 PM</option>
                <option>04:00 PM</option>
              </select>
            </label>

          </div>

          <button className="submit-btn">
            Confirm Appointment
          </button>

          {submitted && (
            <div className="success-message">
              <CheckCircle2 size={18} />
              Appointment created successfully!
            </div>
          )}

        </form>

        <div className="booking-preview">

          <span>PREVIEW</span>

          <h2>Your appointment</h2>

          {form.patientName || form.doctorName ? (
            <AppointmentCard
              patientName={form.patientName || "Your name"}
              doctorName={form.doctorName || "Selected doctor"}
              date={form.date || "Select a date"}
              timeSlot={form.timeSlot || "Select a time"}
              status="pending"
            />
          ) : (
            <div className="empty-preview">
              Start filling the form
              <br />
              to preview your appointment.
            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default BookingPage;