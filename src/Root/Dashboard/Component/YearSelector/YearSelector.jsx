import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./YearSelector.css"

const YearSelector = ({ selectedYear, setSelectedYear }) => {
  const [selectedValue, setSelectedValue] = useState(selectedYear);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleApply = () => {
    setSelectedYear(selectedValue);
  };

  return (
    <div className="year-selector">
      <label htmlFor="yearDropdown">Select Year:</label>
      <select
        id="yearDropdown"
        value={selectedValue}
        onChange={handleChange}
        className="year-dropdown"
      >
        {/* Add your year options here */}
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        {/* Add more years as needed */}
      </select>
      <button onClick={handleApply} className="apply-button">
        Apply
      </button>
    </div>
  );
};

YearSelector.propTypes = {
  selectedYear: PropTypes.number.isRequired,
  setSelectedYear: PropTypes.func.isRequired,
};

export default YearSelector;
