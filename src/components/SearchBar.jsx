import React from "react";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      className="search"
      placeholder={placeholder || "Search..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

