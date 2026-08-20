import { Link, useLocation } from "react-router-dom";
import { HeartPulse, CalendarDays } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      
      {/* Logo */}
      <Link to="/" className="brand">
        <div className="brand-icon">
          <HeartPulse size={22} />
        </div>

        <div>
          <h2>MedCare Plus</h2>
          <span>Healthcare, simplified.</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/doctors"
          className={location.pathname === "/doctors" ? "active" : ""}
        >
          Doctors
        </Link>

        <Link
          to="/booking"
          className={`book-link ${
            location.pathname === "/booking" ? "active-book" : ""
          }`}
        >
          <CalendarDays size={17} />
          Book Appointment
        </Link>
      </nav>

    </header>
  );
}

export default Navbar;