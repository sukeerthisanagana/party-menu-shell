import React from "react";

export default function Summary({ totalSelected }) {
  return (
    <div className="summary">
      <div>
        Total Selected: <strong>{totalSelected}</strong>
      </div>
      <button
        className="continue"
        onClick={() =>
          alert(`Continuing with ${totalSelected} dishes`)
        }
      >
        Continue
      </button>
    </div>
  );
}

