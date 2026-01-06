import { useEffect, useState } from "react";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <h1>Our Services</h1>

      {services.map((s, index) => (
        <div className="card" key={index}>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
