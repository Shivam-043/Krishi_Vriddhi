import React from 'react';
import PropTypes from 'prop-types';
import "./AditionalData.css"

const AdditionalData = () => {
  // Sample additional data (replace with your actual data)
  const additionalData = [
    { label: 'Weather Forecast', value: 'Sunny' },
    { label: 'Soil Quality', value: 'Excellent' },
    { label: 'Market Prices', value: '$1.50/kg for Wheat' },
  ];

  return (
    <div className="additional-data">
      <h2>Additional Data</h2>
      <ul className="data-list">
        {additionalData.map((item, index) => (
          <li key={index}>
            <span className="data-label">{item.label}:</span>
            <span className="data-value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalData;
