import React ,{ useState } from 'react'
import "./fdashboard.css"
import SummaryCard from './Component/SummaryCard';
import YearSelector from './Component/YearSelector/YearSelector';
import Charts from './Component/Charts/charts';
import AdditionalData from './Component/AdditionalData/AdditionalData';


const FDashboard = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  
    return (
      <div className="dashboard-container">
        <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
        <div className="summary-section">
          <SummaryCard title="Income in Current Year" value="$50,000" />
          <SummaryCard title="Total Yield of Past Crop" value="10,000 tons" />
          <SummaryCard title="Expected Yield of Next Crop" value="12,000 tons" />
          <SummaryCard title="Current Growing Crop Name" value="Wheat" />
        </div>
        {/* <Charts selectedYear={selectedYear} /> */}
        <AdditionalData />
      </div>
    );
  };
  
  export default FDashboard;