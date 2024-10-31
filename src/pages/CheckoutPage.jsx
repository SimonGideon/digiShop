import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { submitOrder } from "./../redux/checkoutSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });
  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "streetAddress",
      "city",
      "state",
      "postcode",
      "phone",
      "email",
    ];

    const isValid = requiredFields.every((field) => formData[field]);
    if (!isValid) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const orderDetails = {
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
      },
      shipping_address: {
        street: formData.streetAddress,
        town: formData.city,
        postal_code: formData.postcode,
        country: formData.country,
      },
      items: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      orderNotes: formData.orderNotes,
    };

    dispatch(submitOrder(orderDetails));
    toast.success("Order submitted successfully!");
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  return (
    <div className="p-8 bg-gray-100 md:px-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg lg:text-xl font-bold mb-4">Billing details</h2>
          <form className="space-y-4" onSubmit={handleSubmitOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-sm lg:text-base">
                  First name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded p-2 text-sm lg:text-base ${
                    touched.firstName && !formData.firstName
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm lg:text-base">
                  Last name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded p-2 text-sm lg:text-base ${
                    touched.lastName && !formData.lastName
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm lg:text-base">
                Company name (optional)
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full border rounded p-2 text-sm lg:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm lg:text-base">
                Country / Region *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border rounded p-2 text-sm lg:text-base ${
                  touched.country && !formData.country ? "border-red-500" : ""
                }`}
                required
              >
                <option value="">Select a country / region</option>
                <option>Kenya</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm lg:text-base">
                Street address *
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border rounded p-2 text-sm lg:text-base ${
                  touched.streetAddress && !formData.streetAddress
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="House number and street name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm lg:text-base">
                Town / City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border rounded p-2 text-sm lg:text-base ${
                  touched.city && !formData.city ? "border-red-500" : ""
                }`}
                required
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-sm lg:text-base">
                  County *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded p-2 text-sm lg:text-base ${
                    touched.state && !formData.state ? "border-red-500" : ""
                  }`}
                  required
                >
                  <option value="">Select an option</option>
                  <option>Nairobi</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm lg:text-base">
                  Postcode / ZIP *
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded p-2 text-sm lg:text-base ${
                    touched.postcode && !formData.postcode
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium text-sm lg:text-base">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded p-2 text-sm lg:text-base ${
                    touched.phone && !formData.phone ? "border-red-500" : ""
                  }`}
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block mb-1 font-medium text-sm lg:text-base">
                  Email address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full border rounded p-2 text-sm lg:text-base ${
                    touched.email && !formData.email ? "border-red-500" : ""
                  }`}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm lg:text-base">
                Order notes (optional)
              </label>
              <textarea
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleInputChange}
                className="w-full border rounded p-2 text-sm lg:text-base"
                placeholder="Notes about your order, e.g., special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
          <h2 className="text-lg lg:text-xl font-bold mb-4">Your Order</h2>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between text-sm lg:text-base border-b border-gray-200 pb-4 mb-4">
              <span>PRODUCT</span>
              <span>SUBTOTAL</span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mt-2 text-sm lg:text-base"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  KSh
                  {calculateSubtotal(
                    item.price,
                    item.quantity
                  ).toLocaleString()}
                  .00
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mb-4 text-sm lg:text-base font-bold">
            <span>Subtotal</span>
            <span>
              KSh
              {cartItems
                .reduce(
                  (acc, item) =>
                    acc + calculateSubtotal(item.price, item.quantity),
                  0
                )
                .toLocaleString()}
              .00
            </span>
          </div>
          <div className="flex justify-between mb-4 text-sm lg:text-base">
            <span>Shipping</span>
            <span>KSh 0.00</span>
          </div>
          <div className="flex justify-between mb-4 text-sm lg:text-base font-bold">
            <span>Total</span>
            <span>
              KSh
              {cartItems
                .reduce(
                  (acc, item) =>
                    acc + calculateSubtotal(item.price, item.quantity),
                  0
                )
                .toLocaleString()}
              .00
            </span>
          </div>
          <div className="bg-yellow-100 p-4 mb-4 rounded-md">
            <p className="text-yellow-700 text-sm lg:text-base">
              Please fill in your details above to see available payment
              methods.
            </p>
          </div>

          <button
            onClick={handleSubmitOrder}
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 text-sm lg:text-base"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
