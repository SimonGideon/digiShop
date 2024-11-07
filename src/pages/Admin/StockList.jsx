import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "../../redux/adminSlice";
import {
  InventoryTable,
  IndividualItem,
  Loader,
  Modal,
  ConfirmationModal,
} from "../../components";
import { PlusCircle } from "feather-icons-react";
import { Link } from "react-router-dom";

const StockList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => ({
    products: state.adminData.products.data || [],
    loading: state.adminData.products.status === "loading",
    error: state.adminData.products.error,
  }));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ===============> Modal Logic
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModalFor = (component, title, e) => {
    setDropdownVisible(null);
    e.preventDefault();
    setModalContent(component);
    setModalTitle(title);
    toggleModal();
  };
  // ===============> Modal Logic Ends

  // State to manage dropdown visibility for each row
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (productId) => {
    setDropdownVisible(dropdownVisible === productId ? null : productId);
  };

  const handleDelete = (productId) => {
    setIsModalOpen(true);
    dispatch(deleteProduct(productId));
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
                to="#"
                onClick={(e) =>
                  openModalFor(
                    <IndividualItem productId={row.id} />,
                    `${row.name} Details`,
                    e
                  )
                }
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                View
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
      selector: (row) => `Ksh. ${row.price.toFixed(2)}`,
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
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : products.length > 0 ? (
        <>
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
        </>
      ) : (
        <p className="text-gray-500">No products available</p>
      )}
      {modalOpen && (
        <Modal
          closeModal={toggleModal}
          isOpen={modalOpen}
          title={modalTitle}
          content={modalContent}
        />
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => setIsModalOpen(false)}
        title="Delete Product"
        message="Are you sure you want to delete this product?"
        submessage="This action cannot be undone."
      />
    </div>
  );
};

export default StockList;
