import { InventoryTable } from "../../components";
import { PlusCircle } from "feather-icons-react";
import { Link } from "react-router-dom";

const stockData = [
  {
    id: "#SKUN111",
    product: "Oculus VR",
    category: "Game accessories",
    dateAdded: "June 13, 2021",
    stock: 1455,
    inStock: 451,
    color: "Yellow",
    status: "offer process",
    image: "https://via.placeholder.com/50",
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
  // Add more data if necessary
];

const stockColumns = [
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
          className="w-8 h-8 rounded-md object-cover"
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

const StockList = () => {
  return (
    <div className="py-4">
      <div className="flex justify-end mb-4">
        <Link to="/admin/products/new" className="flex items-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-nowrap flex gap-2">
            <PlusCircle className="text-white" /> New
          </button>
        </Link>
      </div>
      <InventoryTable
        title="Product Inventory"
        columns={stockColumns}
        data={stockData}
        customStyles={{
          rows: {
            style: {
              minHeight: "72px",
            },
          },
          headCells: {
            style: {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
          },
          cells: {
            style: {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
          },
        }}
      />
    </div>
  );
};

export default StockList;
