import { useEffect, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import DoctorCard from "../components/DoctorCard";

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/doctors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        return response.json();
      })
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredDoctors = data.filter((doctor) =>
    `${doctor.name} ${doctor.specialisation}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="page-container">

      <div className="page-heading">
        <div>
          <span>OUR SPECIALISTS</span>
          <h1>Find the right doctor.</h1>
          <p>
            Connect with trusted specialists who are ready to care for you.
          </p>
        </div>
      </div>

      <div className="doctor-search">
        <Search size={19} />

        <input
          type="text"
          placeholder="Search by doctor or specialisation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {loading && (
        <div className="state-box">
          <div className="loader"></div>
          Loading doctors...
        </div>
      )}

      {error && (
        <div className="state-box error-box">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="doctors-list">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor._id || doctor.id}
              doctor={doctor}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default DoctorsPage;