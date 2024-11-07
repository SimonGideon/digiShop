import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/adminSlice";
import {
  InventoryTable,
  Loader,
  Modal,
  NewCategory,
  NewSubCategory,
} from "../../components";
import { PlusCircle } from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    maxWidth: "5px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Subcategories",
    selector: (row) => row.subcategoryNames,
    sortable: false,
  },
];

const Categories = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Modal Logic
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const switchModal = (status) => {
    setModalOpen(status);
  };

  const openModalFor = (component, title, e) => {
    e.preventDefault();
    setModalContent(component);
    setModalTitle(title);
    toggleModal();
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { categories, loading, error } = useSelector((state) => ({
    categories: state.adminData.categories.data || [],
    loading: state.adminData.categories.status === "loading",
    error: state.adminData.categories.error,
  }));

  const formattedCategories = categories.map((category) => ({
    ...category,
    subcategoryNames: category.subcategories.map((sub) => sub.name).join(", "),
  }));

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const showToast = (message, type) => {
    console.log("Toast Triggered:", message, type);
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <div className="relative flex justify-end">
        <button
          onClick={toggleDropdown}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-nowrap flex gap-2 hover:bg-green-600"
        >
          <PlusCircle className="text-white" /> New
        </button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
          >
            <button
              className="block w-full px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white"
              onClick={(e) =>
                openModalFor(
                  <NewCategory
                    showToast={showToast}
                    closeModal={(status) => switchModal(status)}
                  />,
                  "Add New Category",
                  e
                )
              }
            >
              New Category
            </button>
            <button
              className="block w-full px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white"
              onClick={(e) =>
                openModalFor(
                  <NewSubCategory
                    showToast={showToast}
                    closeModal={(status) => switchModal(status)}
                  />,
                  "Add New Sub Category",
                  e
                )
              }
            >
              New Sub Category
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="p-6">
          <InventoryTable
            data={formattedCategories}
            columns={columns}
            title="Categories List"
          />
        </div>
      )}
      {modalOpen && (
        <Modal
          closeModal={toggleModal}
          isOpen={modalOpen}
          title={modalTitle}
          content={modalContent}
        />
      )}
    </div>
  );
};

export default Categories;
