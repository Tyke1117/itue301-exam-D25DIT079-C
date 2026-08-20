import { Link } from "react-router-dom";
import { CalendarDays, Mail, Stethoscope } from "lucide-react";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="doctor-avatar">
        <Stethoscope size={34} />
      </div>

      <div className="doctor-info">
        <div className="doctor-top">
          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialisation}</p>
          </div>

          <span
            className={
              doctor.available
                ? "availability available"
                : "availability unavailable"
            }
          >
            ● {doctor.available ? "Available" : "Busy"}
          </span>
        </div>

        <div className="doctor-email">
          <Mail size={14} />
          {doctor.email}
        </div>

        <Link
          to="/booking"
          className="doctor-book"
        >
          <CalendarDays size={16} />
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;