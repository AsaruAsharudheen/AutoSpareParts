import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./selectcar.css";

const SelectCar = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [parts, setParts] = useState([]);

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPart, setSelectedPart] = useState("");

  // Also keep readable names for WhatsApp message
  const [makeName, setMakeName] = useState("");
  const [modelName, setModelName] = useState("");
  const [partName, setPartName] = useState("");

  const navigate = useNavigate();

  // Load Makes
  useEffect(() => {
    api.get("getMakes.php")
      .then((res) => setMakes(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Makes API Error:", err));
  }, []);

  // Load Models
  const loadModels = (makeId) => {
    const makeText =
      (eventTargetTextFromValue(makeId, makes) || "").toString() || "";
    setSelectedMake(makeId);
    setMakeName(makeText);
    setSelectedModel("");
    setSelectedYear("");
    setSelectedPart("");
    setModels([]);
    setYears([]);
    setParts([]);

    if (!makeId) return;
    api
      .get(`getModels.php?make_id=${makeId}`)
      .then((res) => setModels(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Models API Error:", err));
  };

  // Load Years
  const loadYears = (modelId) => {
    const modelText =
      (eventTargetTextFromValue(modelId, models, "model_name") || "").toString() ||
      "";
    setSelectedModel(modelId);
    setModelName(modelText);
    setSelectedYear("");
    setSelectedPart("");
    setYears([]);
    setParts([]);

    if (!modelId) return;
    api
      .get(`getYears.php?model_id=${modelId}`)
      .then((res) => setYears(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Years API Error:", err));
  };

  // Load Parts (your DB returns all parts; we load all)
  const loadParts = (yearValue) => {
    setSelectedYear(yearValue);
    setSelectedPart("");
    setParts([]);

    // if your getParts.php supports filtering later, change to include query params.
    api
      .get("getParts.php")
      .then((res) => setParts(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Parts API Error:", err));
  };

  // helper: find option text by id inside array of items
  function eventTargetTextFromValue(value, list = [], labelKey = "name") {
    if (!value) return "";
    const found = list.find((it) => String(it.id) === String(value));
    if (found) return found[labelKey] ?? found.name ?? "";
    return "";
  }

  // When user clicks the button — open WhatsApp message
  const handleFindPart = () => {
    if (!selectedMake) return alert("Please select a Make.");
    if (!selectedModel) return alert("Please select a Model.");
    if (!selectedYear) return alert("Please select a Year.");
    if (!selectedPart) return alert("Please select a Part.");

    // Ensure we have human readable names (fall back to lookups)
    const finalMakeName = makeName || eventTargetTextFromValue(selectedMake, makes, "name");
    const finalModelName = modelName || eventTargetTextFromValue(selectedModel, models, "model_name");
    const finalPartName = partName || eventTargetTextFromValue(selectedPart, parts, "name");

    // Company WhatsApp number (international format without + or spaces)
    const phone = "919778169580"; // +91 9778169580

    const message =
      `Hello,%0AI need this car part:%0A%0A` +
      `Car: ${finalMakeName}%0A` +
      `Model: ${finalModelName}%0A` +
      `Year: ${selectedYear}%0A` +
      `Part: ${finalPartName}%0A%0A` +
      `Please let me know price & availability.`;

    const url = `https://wa.me/${phone}?text=${message}`;

    // open in new tab
    window.open(url, "_blank");
  };

  return (
    <div className="selectcar-container">
      <h1>Search your parts here</h1>
<div className="input-boxes-5">
      {/* Make Dropdown */}
      <div className="dropdown-box">
        <select
          value={selectedMake}
          onChange={(e) => loadModels(e.target.value)}
        >
          <option value="">Select Car</option>
          {makes.map((make) => (
            <option key={make.id} value={make.id}>
              {make.name}
            </option>
          ))}
        </select>
      </div>

      {/* Model Dropdown */}
      <div className="dropdown-box">
        <select
          value={selectedModel}
          onChange={(e) => loadYears(e.target.value)}
          disabled={!selectedMake}
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.model_name}
            </option>
          ))}
        </select>
      </div>

      {/* Year Dropdown */}
      <div className="dropdown-box">
        <select
          value={selectedYear}
          onChange={(e) => loadParts(e.target.value)}
          disabled={!selectedModel}
        >
          <option value="">Select Year</option>
          {years.map((y, idx) => (
            <option key={idx} value={y.year}>
              {y.year}
            </option>
          ))}
        </select>
      </div>

      {/* Parts Dropdown */}
      <div className="dropdown-box">
        <select
          value={selectedPart}
          onChange={(e) => {
            const id = e.target.value;
            const text = e.target.options[e.target.selectedIndex].text;
            setSelectedPart(id);
            setPartName(text);
          }}
          disabled={!selectedYear}
        >
          <option value="">Select Part</option>
          {parts.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      </div>

      {/* Button */}
      {selectedPart && (
        <div className="final-section">
          <button onClick={handleFindPart}>🔍 Send on WhatsApp</button>
        </div>
      )}
    </div>
  );
};

export default SelectCar;
