import { Table } from "@mantine/core";
import { CropDataType } from "../Types/types";
import { aggregateByCrop } from "../Utils/aggregateByCrop";
import '../App.css'; 

const Table2 = ({ data }: { data: Array<CropDataType> }) => {
  // Aggregate data by year using aggregateByYear function and convert it into array to iterate over it
  const aggregatedData = aggregateByCrop(data);
  const values = Array.from(aggregatedData);

  // Map aggregated data to table rows
  const rows = values.map((value) => {
    const crop = value[0];
    const averageYield = (value[1].totalYield / 71).toFixed(3);
    const averageArea = (value[1].totalArea / 71).toFixed(3);
    // 56889.871
    return (
      <Table.Tr key={crop}>
        <Table.Td>{crop}</Table.Td>
        <Table.Td>{averageYield}</Table.Td>
        <Table.Td>{averageArea}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div className="table-container">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
            <Table.Th>Average Cultivation Area of the Crop between 1950-2020</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default Table2;
