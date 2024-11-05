import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";

const InventoryTable = ({ columns, data, customStyles, title }) => {
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    setFilterText(searchText);

    const filteredItems = data.filter((item) => {
      return (
        (item.name?.toLowerCase() ?? "").includes(searchText) ||
        (item.id?.toString().toLowerCase() ?? "").includes(searchText) ||
        (item.category?.toLowerCase() ?? "").includes(searchText) ||
        (item.status?.toLowerCase() ?? "").includes(searchText)
      );
    });

    setFilteredData(filteredItems);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 rounded-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <div className="mb-4 text-right">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md w-full md:w-64"
            value={filterText}
            onChange={handleSearch}
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        pagination
        responsive
        highlightOnHover
      />
    </div>
  );
};

InventoryTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  customStyles: PropTypes.object,
  title: PropTypes.string,
};

export default InventoryTable;
