import { fetchFulfilledOrders } from "../../redux/adminSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InventoryTable, Loader } from "../../components";

const FulfilledOrders = () => {
  const { fulfilledOrders, loading, error } = useSelector((state) => ({
    fulfilledOrders: state.adminData.fulfilledOrders?.data || [],
    loading: state.adminData.orders.status === "loading",
    error: state.adminData.orders.error,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFulfilledOrders());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
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
    {
      name: "Total",
      selector: (row) => `Ksh. ${row.total_price}`,
      sortable: true,
    },
  ];
  return (
    <div className="my-20">
      <InventoryTable
        columns={orderColumns}
        title="Fulfilled Orders"
        data={fulfilledOrders}
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
    </div>
  );
};

export default FulfilledOrders;
