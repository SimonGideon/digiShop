import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/adminSlice";
import { InventoryTable } from "../../components";
import { PlusCircle } from "feather-icons-react";
import { Link } from "react-router-dom";

// Columns configuration to match the data from the API
const stockColumns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    maxWidth: "150px",
  },
  {
    name: "PRODUCT",
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
    name: "BRAND",
    selector: (row) => row.brand,
    sortable: true,
  },
  {
    name: "CATEGORY",
    selector: (row) => row.category,
    sortable: true,
  },
  {
    name: "SUBCATEGORY",
    selector: (row) => row.subcategory_name,
    sortable: true,
  },
  {
    name: "PRICE",
    selector: (row) => `$${row.price.toFixed(2)}`,
    sortable: true,
  },
  {
    name: "DISCOUNT",
    selector: (row) => row.discount,
    sortable: true,
  },
  {
    name: "RATING",
    selector: (row) => row.rating,
    sortable: true,
  },
  {
    name: "STOCK",
    selector: (row) => row.stock,
    sortable: true,
  },
  {
    name: "HOT DEAL",
    cell: (row) =>
      row.is_hot_deal ? (
        <span className="text-green-500 font-semibold">Yes</span>
      ) : (
        <span className="text-gray-500">No</span>
      ),
    sortable: true,
  },
  {
    name: "STATUS",
    cell: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-sm whitespace-nowrap ${
          row.stock > 1
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {row.stock > 1 ? "in stock" : "out of stock"}
      </span>
    ),
    sortable: true,
  },
];

const StockList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.adminData.products.data);
  const productStatus = useSelector((state) => state.adminData.products.status);

  // Fetch products when component mounts
  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

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
        data={products}
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
