import React from "react";

export default function Tabs({ tabs, active, onChange, countsByCategory = {} }) {
  return (
    <div className="tabs">
      {tabs.map((t) => {
        const count = countsByCategory[t] || 0;
        return (
          <button
            key={t}
            className={`tab ${t === active ? "active" : ""}`}
            onClick={() => onChange(t)}
          >
            <div>{t}</div>
            <div className="count">{count}</div>
          </button>
        );
      })}
    </div>
  );
}


