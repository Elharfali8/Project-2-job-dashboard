import React from 'react';
import { useDispatch } from 'react-redux';
import { handleChange } from '@/features/job/jobSlice';

const FilterContainer = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: 'search', value: e.target.value }));
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search jobs..."
        onChange={handleSearch}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default FilterContainer;
