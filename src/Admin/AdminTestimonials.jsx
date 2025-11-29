import { useEffect, useState } from "react";
import api from "../api/api";
import "./adminTestimonials.css";

const AdminTestimonials = () => {
  const [list, setList] = useState([]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    location: "",
    review: "",
    rating: 5,
  });

  const [imageFile, setImageFile] = useState(null);

  /* LOAD DATA */
  const loadData = () => {
    api.get("testimonials/get.php")
      .then(res => setList(Array.isArray(res.data) ? res.data : []))
      .catch(console.error);
  };

  useEffect(() => {
    loadData();
  }, []);

  /* ADD / UPDATE */
  const submitForm = () => {
    if (!form.name || !form.review) {
      alert("Name & Review required");
      return;
    }

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));

    if (imageFile) data.append("image", imageFile);

    const url = form.id
      ? "testimonials/update.php"
      : "testimonials/add.php";

    api.post(url, data).then(() => {
      setForm({ id: "", name: "", location: "", review: "", rating: 5 });
      setImageFile(null);
      loadData();
    });
  };

  /* EDIT */
  const editItem = (t) => {
    setForm({
      id: t.id,
      name: t.name,
      location: t.location,
      review: t.review,
      rating: t.rating,
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* DELETE */
  const deleteItem = (id) => {
    if (!window.confirm("Delete testimonial?")) return;
    api.post("testimonials/delete.php", { id }).then(loadData);
  };

  /* TOGGLE */
  const toggleStatus = (id, status) => {
    api.post("testimonials/toggle.php", {
      id,
      status: status === 1 ? 0 : 1,
    }).then(loadData);
  };

  return (
    <div className="admin-container">
      <h2>Testimonials</h2>

      {/* FORM */}
      <div className="form-box">
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Location"
          value={form.location}
          onChange={e => setForm({ ...form, location: e.target.value })}
        />

        <textarea
          placeholder="Review"
          value={form.review}
          onChange={e => setForm({ ...form, review: e.target.value })}
        />

        <input type="file" onChange={e => setImageFile(e.target.files[0])} />

        <select
          value={form.rating}
          onChange={e => setForm({ ...form, rating: e.target.value })}
        >
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n} Stars</option>
          ))}
        </select>

        <button onClick={submitForm}>
          {form.id ? "Update" : "Add"} Testimonial
        </button>
      </div>

      {/* LIST */}
      <div className="list-box">
        {list.map(t => (
          <div className="list-card" key={t.id}>
            <div className="list-left">
              {t.image && (
                <img src={t.image} alt={t.name} className="admin-thumb" />
              )}

              <div>
                <strong>{t.name}</strong>
                <div className="location">{t.location}</div>
                <p>{t.review}</p>
              </div>
            </div>

            <div className="actions">
              <button onClick={() => editItem(t)}>Edit</button>
              <button onClick={() => toggleStatus(t.id, t.status)}>
                {t.status == 1 ? "Hide" : "Show"}
              </button>
              <button onClick={() => deleteItem(t.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTestimonials;
