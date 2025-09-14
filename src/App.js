import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import IngredientPage from "./pages/IngredientPage";
import dishesData from "./data/dishes.json";

export default function App() {
  // Mock dishes data from JSON
  const [dishes] = useState(dishesData);

  // Track selected dishes using a Set
  const [selected, setSelected] = useState(new Set());

  // Add/Remove dish selection
  const toggleSelect = (dishId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(dishId)) {
        next.delete(dishId);
      } else {
        next.add(dishId);
      }
      return next;
    });
  };

  // Count selected dishes per category (Starter, Main Course, Dessert, Sides)
  const countsByCategory = useMemo(() => {
    const map = {};
    for (const d of dishes) {
      const cat = d.mealType;
      if (!map[cat]) map[cat] = 0;
      if (selected.has(d.id)) map[cat] += 1;
    }
    return map;
  }, [dishes, selected]);

  // Total selected dishes
  const totalSelected = selected.size;

  return (
    <Routes>
      {/* Home → Party Menu Page */}
      <Route
        path="/"
        element={
          <MenuPage
            dishes={dishes}
            selected={selected}
            toggleSelect={toggleSelect}
            countsByCategory={countsByCategory}
            totalSelected={totalSelected}
          />
        }
      />

      {/* Ingredient Detail Page */}
      <Route path="/ingredient/:id" element={<IngredientPage dishes={dishes} />} />
    </Routes>
  );
}
