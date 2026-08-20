import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  Stethoscope,
  Clock3
} from "lucide-react";

function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <div className="small-badge">
            <span></span>
            Trusted healthcare platform
          </div>

          <h1>
            Your health,
            <br />
            <span>beautifully managed.</span>
          </h1>

          <p>
            Find the right doctor, book an appointment,
            and manage your healthcare journey — all in one place.
          </p>

          <div className="hero-actions">

            <Link to="/doctors" className="primary-btn">
              Find a Doctor
              <ArrowRight size={18} />
            </Link>

            <Link to="/booking" className="secondary-btn">
              Book Appointment
            </Link>

          </div>

          <div className="trust-row">
            <div>
              <strong>50+</strong>
              <span>Specialists</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>Happy Patients</span>
            </div>
          </div>

        </div>

        {/* HERO CARD */}

        <div className="hero-visual">

          <div className="floating-card top-card">
            <div className="mini-icon purple">
              <CalendarCheck size={18} />
            </div>

            <div>
              <strong>Appointment confirmed</strong>
              <span>Today · 10:30 AM</span>
            </div>
          </div>

          <div className="doctor-preview">

            <div className="doctor-circle">
              <Stethoscope size={65} />
            </div>

            <div className="online-dot"></div>

            <h3>Personalized Care</h3>

            <p>
              Healthcare designed around you.
            </p>

            <div className="care-info">
              <div>
                <ShieldCheck size={18} />
                Verified Doctors
              </div>

              <div>
                <Clock3 size={18} />
                Easy Scheduling
              </div>
            </div>

          </div>

          <div className="floating-card bottom-card">

            <div className="avatars">
              <div>A</div>
              <div>B</div>
              <div>C</div>
            </div>

            <span>
              <strong>1,200+</strong>
              patients cared for
            </span>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features-section">

        <div className="section-heading">
          <span>WHY MedCare Plus</span>
          <h2>Healthcare without the hassle.</h2>
          <p>
            Everything you need to make better healthcare decisions.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon purple">
              <Stethoscope />
            </div>

            <h3>Trusted Specialists</h3>

            <p>
              Connect with experienced doctors
              across multiple specialisations.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon blue">
              <CalendarCheck />
            </div>

            <h3>Simple Booking</h3>

            <p>
              Choose a doctor and appointment
              slot without unnecessary steps.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon purple">
              <ShieldCheck />
            </div>

            <h3>Patient First</h3>

            <p>
              A clean and secure experience
              designed around your needs.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default HomePage;