import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  // access the id from /admin/customers/1
  const { customerId } = useParams();
  console.log(customerId);

  return (
    <div>
      <h1>Customer Details</h1>
      <p>This is my id {customerId}</p>
    </div>
  );
};

export default CustomerDetails;
