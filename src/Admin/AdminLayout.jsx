import { Routes, Route, useNavigate } from "react-router-dom";
import AdminTestimonials from "./AdminTestimonials";
import "./admin.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  if (localStorage.getItem("adminAuth") !== "true") {
    navigate("/admin");
    return null;
  }

  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  return (
    <div className="admin-wrapper">
      <aside className="sidebar">
        <h3>Admin Panel</h3>

        <button onClick={() => navigate("testimonials")}>
          Testimonials
        </button>

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <Routes>
          <Route path="/" element={<h2>Welcome Admin 👋</h2>} />
          <Route path="testimonials" element={<AdminTestimonials />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;
