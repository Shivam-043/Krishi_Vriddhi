import React from 'react';
import "./summaryCard.css"
import PropTypes from 'prop-types';

const SummaryCard = ({ title, value }) => {
  return (
    <div className="summary-card">
      <h3 className="summary-title">{title}</h3>
      <p className="summary-value">{value}</p>
    </div>
  );
};

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SummaryCard;