import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../../redux/adminSlice";
import { InventoryTable, Loader } from "../../components";
import { Link } from "react-router-dom";

const Customers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  // State to manage dropdown visibility for each row
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (orderId) => {
    setDropdownVisible(dropdownVisible === orderId ? null : orderId);
  };

  const handleDelete = (orderId) => {
    console.log("Delete order with ID:", orderId);
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

  const { orders, loading, error } = useSelector((state) => ({
    orders: state.adminData.orders.data || [],
    loading: state.adminData.orders.status === "loading",
    error: state.adminData.orders.error,
  }));

  // Extract customer details from orders
  const customerDetails = orders.map((order) => ({
    id: order.order_id,
    name: `${order.customer.fname} ${order.customer.lname}`,
    email: order.customer.email,
    phone: order.customer.phone,
    address: `${order.address.street}, ${order.address.town}, ${order.address.country}, ${order.address.postal_code}`,
    notes: order.notes,
  }));

  const customersColumns = [
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
                to={`/admin/customers/${row.id}`}
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
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Notes",
      selector: (row) => row.notes,
      sortable: true,
    },
  ];

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length > 0 ? (
        <InventoryTable
          title="Customers List"
          columns={customersColumns}
          data={customerDetails}
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
      ) : (
        <p>No customers found</p>
      )}
    </div>
  );
};

export default Customers;
