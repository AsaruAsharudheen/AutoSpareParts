import React, { useEffect, useState } from "react";
import api from "../api/api";

const PartsList = ({ make, model }) => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    api.get("/api/parts").then((res) => setParts(res.data));
  }, []);

  const filteredParts = parts.filter(
    (p) =>
      (!make || p.make_id == make) &&
      (!model || p.model_id == model)
  );

  return (
    <div>
      <h3>Parts List</h3>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredParts.map((p) => (
          <div
            key={p.part_id}
            style={{
              width: "220px",
              padding: "10px",
              margin: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <img
              src={p.image}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>{p.part_name}</h4>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartsList;
