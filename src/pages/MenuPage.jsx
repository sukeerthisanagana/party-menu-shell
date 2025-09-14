import React, { useState, useMemo } from "react";
import Tabs from "../components/Tabs";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import DishCard from "../components/DishCard";
import Summary from "../components/Summary";

const ALL_TABS = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

export default function MenuPage({ dishes, selected, toggleSelect, countsByCategory, totalSelected }) {
  const [activeTab, setActiveTab] = useState("STARTER");
  const [search, setSearch] = useState("");
  const [filterVeg, setFilterVeg] = useState(true);
  const [filterNonVeg, setFilterNonVeg] = useState(true);

  // Apply filters + search
  const filtered = useMemo(() => {
    return dishes.filter(d => {
      if (d.mealType !== activeTab) return false;
      const q = search.trim().toLowerCase();
      if (q && !d.name.toLowerCase().includes(q)) return false;
      if (!filterVeg && d.type === "VEG") return false;
      if (!filterNonVeg && d.type === "NON-VEG") return false;
      return true;
    });
  }, [dishes, activeTab, search, filterVeg, filterNonVeg]);

  return (
    <div className="container">
      <h1>Party Menu Selection</h1>

      {/* Category Tabs */}
      <Tabs
        tabs={ALL_TABS}
        active={activeTab}
        onChange={setActiveTab}
        countsByCategory={countsByCategory}
      />

      {/* Search + Veg/NonVeg Filter */}
      <div className="controls-row">
        <SearchBar value={search} onChange={setSearch} placeholder={`Search ${activeTab}...`} />
        <Filters
          veg={filterVeg}
          nonVeg={filterNonVeg}
          onVegChange={setFilterVeg}
          onNonVegChange={setFilterNonVeg}
        />
      </div>

      {/* Dish Cards */}
      <div className="dish-list">
        {filtered.length === 0 ? (
          <div className="empty">No dishes match your filters.</div>
        ) : filtered.map(d => (
          <DishCard
            key={d.id}
            dish={d}
            isSelected={selected.has(d.id)}
            onToggle={() => toggleSelect(d.id)}
          />
        ))}
      </div>

      {/* Summary */}
      <Summary totalSelected={totalSelected} />
    </div>
  );
}
