import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerOrders } from "../../redux/adminSlice";
import { InventoryTable } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const CustomerDetails = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (orderId) => {
    setDropdownVisible(dropdownVisible === orderId ? null : orderId);
  };

  const { customerId } = useParams();
  const dispatch = useDispatch();

  // Get the results from the Redux store
  const { customer, orders, loading, error } = useSelector((state) => ({
    customer: state.adminData.customerOrders.data?.customer,
    orders: state.adminData.customerOrders.data?.orders || [],
    loading: state.adminData.customerOrders.status === "loading",
    error: state.adminData.customerOrders.error,
  }));

  useEffect(() => {
    dispatch(fetchCustomerOrders(customerId));
  }, [dispatch, customerId]);

  const orderColumns = [
    {
      name: "ACTIONS",
      cell: (row) => (
        <div
          className="relative"
          ref={dropdownVisible === row.order_id ? dropdownRef : null}
        >
          <button
            onClick={() => toggleDropdown(row.order_id)}
            className="text-blue-500 hover:text-blue-700"
          >
            Actions ▼
          </button>
          {dropdownVisible === row.order_id && (
            <div className="absolute z-10 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                View
              </Link>
            </div>
          )}
        </div>
      ),
      maxWidth: "120px",
    },
    {
      name: "ID",
      selector: (row) => row.order_id,
      sortable: true,
      maxWidth: "10px",
    },
    {
      name: "Address",
      selector: (row) =>
        `${row.address.street}, ${row.address.town}, ${row.address.postal_code}, ${row.address.country}`,
      sortable: true,
    },
    { name: "Notes", selector: (row) => row.notes, sortable: false },
    {
      name: "No. Items",
      selector: (row) =>
        row.items.reduce((total, item) => total + item.quantity, 0),
      sortable: true,
      maxWidth: "10px",
    },
    {
      name: "Total Amount",
      selector: (row) => {
        const totalAmount = row.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        return `Ksh ${totalAmount.toFixed(2)}`;
      },
      sortable: true,
    },
  ];

  return (
    <div className="flex p-6 space-x-6">
      <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
        {loading ? (
          <p className="p-4 text-gray-500">Loading orders...</p>
        ) : error ? (
          <p className="p-4 text-red-500">{error}</p>
        ) : orders.length > 0 ? (
          <InventoryTable
            columns={orderColumns}
            title={`Customer #${customerId} Orders`}
            data={orders}
            customStyles={{
              rows: {
                style: {
                  minHeight: "72px",
                },
              },
              headCells: {
                style: {
                  paddingLeft: "8px !important",
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
          <p className="p-4 text-gray-500">
            No orders found for this customer.
          </p>
        )}
      </div>
      <div className="w-1/3 bg-white shadow-md rounded-lg p-6 border">
        {customer ? (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-6xl text-slate-500 my-3"
              />
              <h1 className="text-2xl font-semibold">{`${customer.fname} ${customer.lname}`}</h1>
              <p className="text-gray-700">Email: {customer.email}</p>
              <p className="text-gray-700">Phone: {customer.phone}</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-lg font-semibold">Delivery Address</h2>
              {orders.length > 0 && (
                <div className="text-gray-700 flex flex-col gap-3">
                  {" "}
                  <p className="mb-1">
                    {" "}
                    <strong>Street:</strong> {orders[0].address.street}
                  </p>
                  <p className="mb-1">
                    {" "}
                    <strong>Town:</strong> {orders[0].address.town}
                  </p>
                  <p className="mb-1">
                    {" "}
                    <strong>Postal Code:</strong>{" "}
                    {orders[0].address.postal_code}
                  </p>
                  <p className="mb-1">
                    {" "}
                    <strong>Country:</strong> {orders[0].address.country}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading customer details...</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
