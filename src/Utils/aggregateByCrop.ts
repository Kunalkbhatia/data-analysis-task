import { aggregatedByCropDataType, aggregateByCropType } from "../Types/types";


export const aggregateByCrop: aggregateByCropType = (dataPoints) => {
  
  // Initialize a Map to store aggregated data grouped by crop
  const groupedByCrop: aggregatedByCropDataType = new Map();

  // Iterate through each data point
  dataPoints.forEach((data) => {
    const Crop = data['Crop Name']; // Extract the Crop Name from data
    const Yield = data['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']; // Extract the Yield from data
    const Area = data['Area Under Cultivation (UOM:Ha(Hectares))']; // Extract the Area from data
    
    // Check if the crop already exists in groupedByCrop map
    if (groupedByCrop.has(Crop) === false) {
      // If not, initialize new entry with current Yield and Area values and ignoring the null values by replacing them by 0
      const totalYield = (typeof Yield === "number") ? Yield : 0;
      const totalArea = (typeof Area === "number") ? Area : 0;
      groupedByCrop.set(Crop, { totalYield, totalArea });
    } else {
      // If crop exists, update existing entry with accumulated Yield and Area values, and ignoring the null values by replacing them by 0
      const cropData = groupedByCrop.get(Crop)!;
      cropData.totalYield += (typeof Yield === "number") ? Yield : 0;
      cropData.totalArea += (typeof Area === "number") ? Area : 0;
    }

  });

  return groupedByCrop;
};
