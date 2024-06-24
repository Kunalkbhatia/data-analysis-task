import React from 'react';
import { Table } from '@mantine/core'; 
import { CropDataType } from '../Types/types'; 
import { aggregateByYear } from '../Utils/aggregateByYear'; 
import '../App.css'; 

const Table1 = ({ data }: { data: Array<CropDataType> }) => {
  // Aggregate data by year using aggregateByYear function and convert it into array to iterate over it
  const aggregatedData = aggregateByYear(data);
  const values = Array.from(aggregatedData);

  // Map aggregated data to table rows
  const rows = values.map((value) => {
    // Extract year from aggregated data key
    const year = value[0].split(', ')[1];
    return (
      <tr key={year}>
        <td>{year}</td>
        <td>{value[1].maxProduction.cropName}</td>
        <td>{value[1].minProduction.cropName}</td>
      </tr>
    );
  });
  
  
  return (
    <div className="table-container">
      <Table> 
        <Table.Thead> 
          <Table.Tr> 
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production in that Year</Table.Th> 
            <Table.Th>Crop with Minimum Production in that Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default Table1;
