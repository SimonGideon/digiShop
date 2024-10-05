import DataTable from "react-data-table-component";

const data = [
  {
    id: "#SKUN111",
    product: "Oculus VR",
    category: "Game accessories",
    dateAdded: "June 13, 2021",
    stock: 1455,
    inStock: 451,
    color: "Yellow",
    status: "offer process",
    image: "https://via.placeholder.com/50", // Example image
  },
  {
    id: "#SKUN112",
    product: "Wall Clock",
    category: "Clock",
    dateAdded: "June 22, 2021",
    stock: 5555,
    inStock: 1451,
    color: "Gold",
    status: "sell",
    image: "https://via.placeholder.com/50",
  },
  // Add more data as needed
];

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    maxWidth: "150px",
  },
  {
    name: "PRODUCTS",
    cell: (row) => (
      <div className="flex items-center">
        <img
          className="w-8 h-8 rounded-full"
          src={row.image}
          alt={row.product}
        />
        <span className="ml-2">{row.product}</span>
      </div>
    ),
    sortable: true,
    grow: 2,
  },
  {
    name: "CATEGORY",
    selector: (row) => row.category,
    sortable: true,
  },
  {
    name: "DATE ADDED",
    selector: (row) => row.dateAdded,
    sortable: true,
  },
  {
    name: "STOCK",
    selector: (row) => row.stock,
    sortable: true,
  },
  {
    name: "IN STOCK",
    selector: (row) => row.inStock,
    sortable: true,
  },
  {
    name: "COLOR",
    selector: (row) => row.color,
  },
  {
    name: "STATUS",
    cell: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-sm ${
          row.status === "sell"
            ? "bg-green-100 text-green-800"
            : row.status === "offer process"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {row.status}
      </span>
    ),
    sortable: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const InventoryTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Stock Inventory List</h1>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        responsive
        highlightOnHover
      />
    </div>
  );
};

export default InventoryTable;
