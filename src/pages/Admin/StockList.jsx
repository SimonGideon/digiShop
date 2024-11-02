import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/adminSlice";
import { InventoryTable } from "../../components";
import { PlusCircle } from "feather-icons-react";
import { Link } from "react-router-dom";

const StockList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.adminData.products.data);
  const productStatus = useSelector((state) => state.adminData.products.status);

  // State to manage dropdown visibility for each row
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (productId) => {
    setDropdownVisible(dropdownVisible === productId ? null : productId);
  };

  const handleDelete = (productId) => {
    console.log("Delete product with ID:", productId);
    setDropdownVisible(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const stockColumns = [
    {
      name: "ACTIONS",
      cell: (row) => (
        <div
          className="relative"
          ref={dropdownVisible === row.id ? dropdownRef : null}
        >
          <button
            onClick={() => toggleDropdown(row.id)}
            className="text-blue-500 hover:text-blue-700"
          >
            Actions ▼
          </button>
          {dropdownVisible === row.id && (
            <div className="absolute z-10 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
              <Link
                to={`/products/view/${row.id}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                View
              </Link>
              <Link
                to={`/products/edit/${row.id}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(row.id)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ),
      maxWidth: "120px",
    },
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
            alt={row.name}
          />
          <span className="ml-2">{row.name}</span>
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
      selector: (row) => row.category_name,
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
