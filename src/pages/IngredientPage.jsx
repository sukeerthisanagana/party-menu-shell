import React from "react";
import { useParams, Link } from "react-router-dom";

export default function IngredientPage({ dishes }) {
  const { id } = useParams();
  const dishId = Number(id);
  const dish = dishes.find(d => d.id === dishId);

  if (!dish) {
    return (
      <div className="container">
        <p>Dish not found.</p>
        <Link to="/">← Back</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/">← Back</Link>
      <h2>{dish.name}</h2>
      <p className="muted">{dish.description}</p>

      <h3>Ingredients</h3>
      <ul className="ingredients">
        {dish.ingredients.map((ing, idx) => (
          <li key={idx}>
            <strong>{ing.name}</strong> — {ing.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
