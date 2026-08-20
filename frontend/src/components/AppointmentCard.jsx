import {
  CalendarDays,
  Clock3,
  UserRound,
  Stethoscope
} from "lucide-react";

function AppointmentCard({
  patientName,
  doctorName,
  date,
  timeSlot,
  status
}) {
  return (
    <div className="appointment-card">

      <div className="appointment-main">

        <div className="appointment-icon">
          <CalendarDays size={22} />
        </div>

        <div>
          <h3>{doctorName}</h3>

          <div className="appointment-detail">
            <UserRound size={14} />
            {patientName}
          </div>
        </div>

      </div>

      <div className="appointment-date">
        <CalendarDays size={15} />
        {date}
      </div>

      <div className="appointment-date">
        <Clock3 size={15} />
        {timeSlot}
      </div>

      <span className={`status ${status}`}>
        {status}
      </span>

    </div>
  );
}

export default AppointmentCard;