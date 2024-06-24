import { aggregatedByYearDataType, aggregateByYearType } from "../Types/types";

export const aggregateByYear: aggregateByYearType = (dataPoints) => {
  
  // Initialize a Map to store aggregated data grouped by year
  const groupedByYear: aggregatedByYearDataType = new Map();

  // Iterate through each data point
  dataPoints.forEach((data) => {
    const year = data['Year']; // Extract the Year from data
    const crop = data['Crop Name']; // Extract the Crop Name from data
    const production = data['Crop Production (UOM:t(Tonnes))']; // Extract the Production from data

    // Check if Production is a number, because null values can't be compared with real numbers
    if (typeof production === "number") {
      // If year is not yet in groupedByYear, initialize with current crop and production
      if (!groupedByYear.has(year)) {
        groupedByYear.set(year, {
          maxProduction: { cropName: crop, production: production },
          minProduction: { cropName: crop, production: production },
        });
      } 
      
      
      else {
        // If year exists, update max and min production if current production exceeds or is less than existing values
        const yearData = groupedByYear.get(year)!;
        if (yearData.maxProduction.production < production) {
          yearData.maxProduction = { cropName: crop, production: production };
        }
        if (yearData.minProduction.production > production) {
          yearData.minProduction = { cropName: crop, production: production };
        }
      }
    }
  });

  return groupedByYear;
};
