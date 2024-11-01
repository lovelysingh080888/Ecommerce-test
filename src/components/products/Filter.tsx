import React from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../../recoil/atom";

type FilterProps = {
  categories: string[];
};
const Filter: React.FC<FilterProps> = ({ categories }) => {
  const [filters, setFilters] = useRecoilState(filterState);

  const handleCategoryChange = (e: any) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceChange = (e: any, index: number) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = Number(e.target.value);
    setFilters({ ...filters, priceRange: newPriceRange });
  };

  const handleRatingChange = (e: any) => {
    setFilters({ ...filters, rating: Number(e.target.value) });
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-6">
      <label className="block mb-2">Category:</label>
      <select
        value={filters.category}
        onChange={handleCategoryChange}
        className="w-full p-2 mb-4 border"
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>

      <label className="block mb-2">Price Range:</label>
      <div className="flex space-x-2 mb-4">
        <input
          type="number"
          defaultValue={filters.priceRange[0]}
          onChange={(e) => handlePriceChange(e, 0)}
          className="w-1/2 p-2 border"
          placeholder="Min"
        />
        <input
          type="number"
          defaultValue={filters.priceRange[1]}
          onChange={(e) => handlePriceChange(e, 1)}
          className="w-1/2 p-2 border"
          placeholder="Max"
        />
      </div>

      <label className="block mb-2">Minimum Rating:</label>
      <input
        type="number"
        defaultValue={filters.rating}
        onChange={handleRatingChange}
        className="w-full p-2 border"
        min="0"
        max="5"
        step="0.1"
        placeholder="Rating"
      />
    </div>
  );
};

export default Filter;
