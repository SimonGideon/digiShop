import { useState } from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
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
    differentAddress: false,
    orderNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  return (
    <div className="p-8 bg-gray-100 md:px-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg lg:text-xl font-bold mb-4">Billing details</h2>
          <form className="space-y-4">
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
                  className="w-full border rounded p-2 text-sm lg:text-base"
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
                  className="w-full border rounded p-2 text-sm lg:text-base"
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
                className="w-full border rounded p-2 text-sm lg:text-base"
                required
              >
                <option>Select a country / region</option>
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
                className="w-full border rounded p-2 text-sm lg:text-base"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-full border rounded p-2 mt-2 text-sm lg:text-base"
                placeholder="Apartment, suite, unit, etc. (optional)"
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
                className="w-full border rounded p-2 text-sm lg:text-base"
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
                  value={formData.County}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2 text-sm lg:text-base"
                  required
                >
                  <option>Select an option</option>
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
                  className="w-full border rounded p-2 text-sm lg:text-base"
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
                  className="w-full border rounded p-2 text-sm lg:text-base"
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
                  className="w-full border rounded p-2 text-sm lg:text-base"
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
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
          <h2 className="text-lg lg:text-xl font-bold mb-4">Your Order</h2>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between text-sm lg:text-base">
              <span>PRODUCT</span>
              <span>SUBTOTAL</span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mt-2 text-sm lg:text-base"
              >
                <span>{`${item.name} × ${item.quantity}`}</span>
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
            <span>Shipping costs are calculated during checkout.</span>
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

          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 text-sm lg:text-base">
            Place Order
          </button>

          <p className="mt-4 text-xs lg:text-sm text-gray-600">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <a href="#" className="text-blue-500 underline">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
