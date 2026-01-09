import "../styles/Services.css";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <div className="services-list">
        <div
          className="service-card"
          style={{ backgroundImage: "url(/images/wedding.jpg)" }}
        >
          <h3>Wedding Photography</h3>
          <p>Capture your big day</p>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url(/images/portrait.jpg)" }}
        >
          <h3>Portrait Photography</h3>
          <p>Professional portraits</p>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url(/images/event.jpg)" }}
        >
          <h3>Event Photography</h3>
          <p>Corporate & private events</p>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url(/images/product.jpg)" }}
        >
          <h3>Product Photography</h3>
          <p>Commercial shoots</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
