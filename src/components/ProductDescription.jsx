import PropTypes from "prop-types";

const ProductDescription = ({ product }) => {
  return (
    <div className="container mx-auto md:p-4 lg:flex lg:space-x-6">
      <div className="w-full">
        <div className="bg-white p-4 shadow rounded-lg mb-6">
          {product.tags &&
            product.tags.map((tag, index) => (
              <div key={index}>
                <h1 className="text-2xl font-bold">{tag.name}</h1>
                <p className="mt-2 text-gray-700">{tag.description}</p>
              </div>
            ))}

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
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ), // Optional tags
    specifications: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProductDescription;
