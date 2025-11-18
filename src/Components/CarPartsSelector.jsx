import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import "./CarPartsSelector.css"; // <-- CSS file

const CarPartsSelector = () => {
  const navigate = useNavigate();

  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [parts, setParts] = useState([]);

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    api.get("getMakes.php").then((res) => setMakes(res.data));
  }, []);

  const loadModels = (makeId) => {
    setSelectedMake(makeId);
    setSelectedModel("");
    setSelectedYear("");

    api.get(`getModels.php?make_id=${makeId}`).then((res) => setModels(res.data));
  };

  const loadYears = (modelId) => {
    setSelectedModel(modelId);
    api.get(`getYears.php?model_id=${modelId}`).then((res) => setYears(res.data));
  };

  const loadParts = () => {
    api
      .get(
        `getParts.php?make_id=${selectedMake}&model_id=${selectedModel}&year=${selectedYear}`
      )
      .then((res) => setParts(res.data));
  };

  return (
    <div className="selector-container">
      <div className="selector-card">
        <h1 className="title">Find the Right Spare Parts</h1>

        <div className="dropdown-row">

          {/* MAKE */}
          <select
            className="dropdown"
            onChange={(e) => loadModels(e.target.value)}
          >
            <option value="">Select Make</option>
            {makes.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>

          {/* MODEL */}
          <select
            className="dropdown"
            disabled={!selectedMake}
            onChange={(e) => loadYears(e.target.value)}
          >
            <option value="">Select Model</option>
            {models.map((m) => (
              <option key={m.id} value={m.id}>
                {m.model_name}
              </option>
            ))}
          </select>

          {/* YEAR */}
          <select
            className="dropdown"
            disabled={!selectedModel}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Year</option>
            {years.map((y, i) => (
              <option key={i} value={y.year}>
                {y.year}
              </option>
            ))}
          </select>

          {/* SEARCH BUTTON */}
          <button className="search-btn" onClick={loadParts}>
            Search Parts
          </button>
        </div>
      </div>

      {/* PARTS RESULTS */}
      <div className="parts-grid">
        {parts.map((p, i) => (
          <div
            key={i}
            className="part-card"
            onClick={() => navigate(`/part/${p.id}`, { state: { part: p } })}
          >
            <img src={p.image} alt={p.name} className="part-image" />
            <h3 className="part-name">{p.name}</h3>
            <p className="part-price">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarPartsSelector;
