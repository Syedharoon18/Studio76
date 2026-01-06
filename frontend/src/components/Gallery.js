import "./Gallery.css";

function Gallery() {
  const images = [
    "https://via.placeholder.com/300x200?text=Wedding",
    "https://via.placeholder.com/300x200?text=Portrait",
    "https://via.placeholder.com/300x200?text=Event",
    "https://via.placeholder.com/300x200?text=Product",
  ];

  return (
    <div className="page">
      <h1>Gallery 📸</h1>
      <div className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Studio76" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
