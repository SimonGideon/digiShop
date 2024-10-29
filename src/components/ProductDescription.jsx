import PropTypes from "prop-types";

const ProductDescription = ({ product }) => {
  return (
    <div className="container mx-auto md:p-4 lg:flex lg:space-x-6">
      <div className="w-full">
        <div className="bg-white p-4 shadow rounded-lg mb-6">
          <h1 className="text-2xl font-bold">
            OnePlus Ace 3 12GB 256GB Price in Kenya
          </h1>
          <p className="mt-2 text-gray-700">
            The OnePlus Ace 3 12GB 256GB is priced at KSh 78,499. Available in
            multiple colors including Black, Blue, and Rose Gold. Comes with a
            1-year warranty.
          </p>

          <h2 className="text-xl font-bold mt-4">Body and Display</h2>
          <p className="text-gray-700 mt-2">
            The OnePlus Ace 3 features a 6.7&quot; AMOLED display and 120Hz
            refresh rate. Sleek aluminum frame with Gorilla Glass protection on
            both sides.
          </p>

          <h2 className="text-xl font-bold mt-4">Processing and Memory</h2>
          <p className="text-gray-700 mt-2">
            Powered by Qualcomm Snapdragon 8+ Gen 1, the phone has 12GB RAM and
            256GB internal storage.
          </p>

          <h2 className="text-xl font-bold mt-4">Camera</h2>
          <p className="text-gray-700 mt-2">
            Equipped with a triple camera system (50MP + 8MP + 2MP) and a 16MP
            front camera for selfies.
          </p>

          <h2 className="text-xl font-bold mt-4">Battery</h2>
          <p className="text-gray-700 mt-2">
            The phone has a 5000mAh battery that supports fast charging.
          </p>

          {/* Specifications */}
          <h2 className="text-xl font-bold mt-4">Specifications</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto text-left">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2">Specification</th>
                  <th className="px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications &&
                  product.specifications.map((spec, index) => (
                    <tr className="border-b" key={index}>
                      <td className="px-4 py-2">{spec.name}</td>
                      <td className="px-4 py-2">{spec.value}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    specifications: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProductDescription;
