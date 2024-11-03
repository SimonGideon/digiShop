import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/adminSlice";
import { InventoryTable, Loader } from "../../components";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => ({
    orders: state.adminData.orders.data || [],
    loading: state.adminData.orders.status === "loading",
    error: state.adminData.orders.error,
  }));

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orderColumns = [
    {
      name: "ID",
      selector: (row) => row.order_id,
      sortable: true,
      maxWidth: "5px",
    },
    {
      name: "Customer Name",
      selector: (row) => `${row.customer.fname} ${row.customer.lname}`,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.customer.email,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) =>
        `${row.address.street}, ${row.address.town}, ${row.address.postal_code}, ${row.address.country}`,
      sortable: true,
    },
    {
      name: "Total Items",
      selector: (row) =>
        row.items.reduce((total, item) => total + item.quantity, 0),
      sortable: true,
      maxWidth: "10px",
    },
    {
      name: "Notes",
      selector: (row) => row.notes,
      sortable: false,
    },
  ];

  return (
    <div className="p-6">
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length > 0 ? (
        <InventoryTable
          columns={orderColumns}
          title="Order List"
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
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
