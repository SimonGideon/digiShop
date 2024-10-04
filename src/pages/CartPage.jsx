import { useState } from "react";
import { Product } from "../components";
import { products } from "../assets/constants/assetData";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const subtotal = 38499 * quantity;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
    <div className="p-8">
      <div className="bg-white p-5 rounded-lg flex flex-col md:flex-row">
        <div className="flex-grow">
          <div className="overflow-x-auto">
            <table className="min-w-full border table-auto border-collapse">
              <thead className="border-b hidden md:table-header-group">
                {" "}
                {/* Hide headers on small screens */}
                <tr>
                  <th className="border-b p-4 text-left border-r">Product</th>
                  <th className="border-b p-4 text-left border-r">Price</th>
                  <th className="border-b p-4 text-left border-r">Quantity</th>
                  <th className="border-b p-4 text-left">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex flex-col md:table-row">
                  {" "}
                  {/* Make rows flexible on mobile */}
                  <td className="p-4 border-r">
                    <div className="flex items-center">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Product"
                        className="w-12 h-12 mr-4"
                      />
                      <span className="text-sm md:text-base">
                        OnePlus Nord CE 4 8gb 256gb
                      </span>
                    </div>
                  </td>
                  <td className="p-4 border-r text-sm md:text-base">
                    KSh38,499.00
                  </td>
                  <td className="p-4 flex items-center space-x-2 border-r">
                    <button
                      onClick={decrementQuantity}
                      className="border rounded px-2 py-1 bg-gray-200 hover:bg-gray-300"
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="border rounded px-2 py-1 bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-4 text-sm md:text-base">
                    KSh{subtotal.toLocaleString()}.00
                  </td>
                  <td className="p-4">
                    <button className="bg-red-600 text-white px-2 py-1 rounded md:hidden hover:bg-red-700">
                      Removed
                    </button>
                    <button className="text-red-600 hover:text-red-800 hidden md:block">
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                Update Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-8 bg-gray-100 p-6 rounded-lg w-full md:w-1/3 border">
          <h2 className="text-lg font-bold">CART TOTALS</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <tbody>
                <tr className="border">
                  <td className="p-4 border-r">Subtotal</td>
                  <td className="p-4 text-left">
                    KSh{subtotal.toLocaleString()}.00
                  </td>
                </tr>
                <tr className="border">
                  <td className="p-4 border-r">Shipping</td>
                  <td className="p-4 text-left">
                    Shipping costs are calculated during checkout.
                  </td>
                </tr>
                <tr className="border font-bold">
                  <td className="p-4 border-r">Total</td>
                  <td className="p-4 text-left">
                    KSh{subtotal.toLocaleString()}.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"
            onClick={() => (window.location.href = "/products/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">You may be interested in...</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {" "}
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
