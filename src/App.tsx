import Table1 from "./Components/Table1";
import Table2 from "./Components/Table2";
import data from "./Dummy Data/Data.json";
const App = () => {
  return (
    <div>
      <div className="wrapper">
        <p>Note: For Table-1 Null Values are not consider in the comparison for Maxiumum Production and Minimum Production</p>
        <Table1 data={data} />
        <p>Note: For Table-2 Null values are consider 0 for the evalutaion</p>
        <Table2 data={data} />
      </div>
    </div>
  );
};

export default App;
