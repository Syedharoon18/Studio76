import { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {

  const fullText = `He is the founder and lead photographer of Studio76, a young creative professional with hands-on experience in wedding, wildlife, portrait, event, and product photography. His work reflects a strong focus on storytelling, natural emotions, and refined visual composition. Each project is approached with attention to detail and a commitment to Studio76’s creative standards.

Through weddings and events, he captures authentic moments and lasting memories, while his wildlife photography highlights patience and precision. His portraits emphasize personality and expression, and his product photography focuses on clarity, texture, and brand identity. Together, his versatility and creative vision define the visual identity of Studio76.`;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 25); // typing speed

      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section className="home">

      {/* HERO TEXT */}
      <div className="home-hero">
        <h1>Welcome to Studio76 📸</h1>
        <p>
          Professional photography studio for weddings, portraits, events, and
          product photography.
        </p>
      </div>

      {/* PHOTOGRAPHER INTRO */}
      <div className="photographer-section">
        <div className="photographer-image">
          <img
            src="/images/photographer.jpg"
            alt="Photographer"
          />
        </div>

        <div className="photographer-content">
          <h2>Meet the Mr Vishal</h2>

          {/* TYPING PARAGRAPH */}
          <p className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </p>
        </div>
      </div>

    </section>
  );
}

export default Home;
