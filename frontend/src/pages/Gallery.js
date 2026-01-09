import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Gallery.css";

function Gallery() {
  const isAdmin = localStorage.getItem("adminLoggedIn") === "true";
  const navigate = useNavigate();

  const [photos, setPhotos] = useState([
    { id: 1, title: "Wedding Shoot" },
    { id: 2, title: "Portrait Shoot" },
    { id: 3, title: "Event Coverage" },
    { id: 4, title: "Product Shoot" }
  ]);

  const [newPhotoTitle, setNewPhotoTitle] = useState("");

  /* MODAL STATES */
  const [editPhoto, setEditPhoto] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [deletePhoto, setDeletePhoto] = useState(null);
  const [toast, setToast] = useState("");

  /* ADD PHOTO */
  const handleAddPhoto = () => {
    if (!newPhotoTitle.trim()) return;
    setPhotos([...photos, { id: Date.now(), title: newPhotoTitle }]);
    setNewPhotoTitle("");
  };

  /* EDIT */
  const openEditModal = (photo) => {
    setEditPhoto(photo);
    setEditedTitle(photo.title);
  };

  const saveEdit = () => {
    setPhotos(
      photos.map((p) =>
        p.id === editPhoto.id ? { ...p, title: editedTitle } : p
      )
    );
    setEditPhoto(null);
  };

  /* DELETE */
  const confirmDelete = () => {
    setPhotos(photos.filter((p) => p.id !== deletePhoto.id));
    setDeletePhoto(null);
    setToast("Photo deleted successfully");
    setTimeout(() => setToast(""), 2500);
  };

  /* LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/");
  };

  return (
    <section className="gallery-page">
      <h1>Gallery</h1>

      {/* ADMIN CONTROLS */}
      {isAdmin && (
        <div className="admin-controls">
          <input
            type="text"
            placeholder="New photo title"
            value={newPhotoTitle}
            onChange={(e) => setNewPhotoTitle(e.target.value)}
          />
          <button onClick={handleAddPhoto}>Add Photo</button>
        </div>
      )}

      {/* GALLERY GRID */}
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <div className="photo-placeholder">📷</div>
            <h3>{photo.title}</h3>

            {isAdmin && (
              <div className="photo-actions">
                <button onClick={() => openEditModal(photo)}>Edit</button>
                <button onClick={() => setDeletePhoto(photo)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* LOGOUT */}
      {isAdmin && (
        <div className="logout-wrapper">
          <button className="logout-btn" onClick={handleLogout}>
            Logout Admin
          </button>
        </div>
      )}

      {/* EDIT MODAL */}
      {editPhoto && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Photo</h2>
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditPhoto(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION */}
      {deletePhoto && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Delete Photo?</h2>
            <p>Are you sure you want to delete this photo?</p>
            <div className="modal-actions">
              <button onClick={confirmDelete}>Delete</button>
              <button onClick={() => setDeletePhoto(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}
    </section>
  );
}

export default Gallery;
