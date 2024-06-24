export interface CropDataType {
    Country: string;
    Year: string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": number | string;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number | string;
    "Area Under Cultivation (UOM:Ha(Hectares))": number | string;
  }


export interface maxProductionType {
  cropName: string;
  production: number;
}

export interface minProductionType {
  cropName: string;
  production: number;
}



export type aggregatedByYearDataType = Map<string, {
    maxProduction: maxProductionType;
    minProduction: minProductionType;
}>

export type aggregateByYearType = (dataPoints: Array<CropDataType>) => aggregatedByYearDataType





export type aggregatedByCropDataType = Map<string, {
    totalYield: number;
    totalArea: number;
}>

export type aggregateByCropType = (dataPoints: Array<CropDataType>) => aggregatedByCropDataType