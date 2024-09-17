const ProductReview = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">User Reviews</h2>
      <div className="flex items-center mt-4">
        <div className="text-4xl font-bold text-orange-500">0.0</div>
        <p className="ml-2 text-gray-700">out of 5</p>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <div className="flex text-yellow-500">
            <span>★★★★★</span>
          </div>
          <div className="ml-2 w-3/4 bg-gray-200 rounded h-4">
            <div className="bg-orange-500 h-4 rounded w-0"></div>
          </div>
          <div className="ml-4">0</div>
        </div>

        {/* Repeat for other stars */}
        {[4, 3, 2, 1].map((star) => (
          <div className="flex items-center mt-2" key={star}>
            <div className="flex text-yellow-500">
              {"★".repeat(star)}
              {"★".repeat(5 - star)}
            </div>
            <div className="ml-2 w-3/4 bg-gray-200 rounded h-4">
              <div className="bg-orange-500 h-4 rounded w-0"></div>
            </div>
            <div className="ml-4">0</div>
          </div>
        ))}

        {/* Write Review Button */}
        <div className="mt-4">
          <button className="bg-green-500 text-white font-bold px-4 py-2 rounded">
            Write a Review
          </button>
        </div>
      </div>

      {/* No reviews yet */}
      <p className="mt-4 text-gray-600">There are no reviews yet.</p>
      <p className="text-sm text-gray-400">
        Only logged-in customers who have purchased this product may leave a
        review.
      </p>
    </div>
  );
};

export default ProductReview;
