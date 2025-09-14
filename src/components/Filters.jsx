import React from "react";

export default function Filters({ veg, nonVeg, onVegChange, onNonVegChange }) {
  return (
    <div className="filters">
      <label>
        <input
          type="checkbox"
          checked={veg}
          onChange={(e) => onVegChange(e.target.checked)}
        />
        Veg
      </label>
      <label>
        <input
          type="checkbox"
          checked={nonVeg}
          onChange={(e) => onNonVegChange(e.target.checked)}
        />
        Non-Veg
      </label>
    </div>
  );
}

