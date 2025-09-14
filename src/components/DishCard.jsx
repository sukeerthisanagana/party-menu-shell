import React from "react";
import { Link } from "react-router-dom";

export default function DishCard({ dish, isSelected, onToggle }) {
  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      {/* Dish Image */}
      {dish.image && (
        <img
          src={dish.image}
          alt={dish.name}
          className="dish-img"
        />
      )}

      {/* Dish Info */}
      <div className="dish-body">
        <div className="title-row">
          <h4>{dish.name}</h4>
          <span className="tag">{dish.type}</span>
        </div>
        <p className="muted">{dish.description}</p>
        <div className="card-actions">
          <button onClick={onToggle}>
            {isSelected ? "Remove" : "Add"}
          </button>
          <Link to={`/ingredient/${dish.id}`} className="link-btn">
            Ingredient
          </Link>
        </div>
      </div>
    </div>
  );
}
