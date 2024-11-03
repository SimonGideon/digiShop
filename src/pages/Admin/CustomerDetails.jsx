import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerOrders } from "../../redux/adminSlice"; // Adjust the path as necessary
import { InventoryTable } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Define columns for the orders table outside the component
const orderColumns = [
  { name: "Order ID", selector: (row) => row.order_id, sortable: true },
  {
    name: "Address",
    selector: (row) => `${row.address.street}, ${row.address.town}`,
    sortable: true,
  },
  { name: "Notes", selector: (row) => row.notes, sortable: false },
  {
    name: "Number of Items",
    selector: (row) =>
      row.items.reduce((total, item) => total + item.quantity, 0),
    sortable: true,
  },
  {
    name: "Total Amount",
    selector: (row) => {
      const totalAmount = row.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return `$${totalAmount.toFixed(2)}`;
    },
    sortable: true,
  },
];

const CustomerDetails = () => {
  const { customerId } = useParams();
  const dispatch = useDispatch();

  //   get the results
  const { customer, orders, loading, error } = useSelector((state) => ({
    customer: state.adminData.customerOrders.data?.customer,
    orders: state.adminData.customerOrders.data?.orders || [],
    loading: state.adminData.customerOrders.status === "loading",
    error: state.adminData.customerOrders.error,
  }));

  useEffect(() => {
    dispatch(fetchCustomerOrders(customerId));
  }, [dispatch, customerId]);

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
          />
        ) : (
          <p className="p-4 text-gray-500">
            No orders found for this customer.
          </p>
        )}
      </div>

      {/* Right Side: Customer Details */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-6 border">
        {customer ? (
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-500" />
            <div>
              <h1 className="text-2xl font-semibold">{`${customer.fname} ${customer.lname}`}</h1>
              <p className="text-gray-700">Email: {customer.email}</p>
              <p className="text-gray-700">Phone: {customer.phone}</p>
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
