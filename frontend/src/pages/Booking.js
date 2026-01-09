import { useState } from "react";
import "../styles/Booking.css";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits for phone
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!form.service.trim()) {
      newErrors.service = "Service is required";
    }

    if (!form.date) {
      newErrors.date = "Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service.trim()
        })
      });

      if (!res.ok) throw new Error("Failed");

      alert("✅ Booking submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: ""
      });

      setErrors({});
    } catch (err) {
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking-page">
      <h1>Book a Session</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="phone"
          placeholder="Phone Number"
          maxLength="10"
          value={form.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          name="service"
          placeholder="Service (Wedding, Portrait, etc.)"
          value={form.service}
          onChange={handleChange}
          required
        />
        {errors.service && <p className="error">{errors.service}</p>}

        <input
          type="date"
          name="date"
          min={new Date().toISOString().split("T")[0]}
          value={form.date}
          onChange={handleChange}
          required
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default Booking;
