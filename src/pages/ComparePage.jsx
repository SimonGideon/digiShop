// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCompare } from "../redux/compareSlice";
// import ProductCard from "../components/ProductCard";

// const ComparePage = () => {
//   const compareList = useSelector((state) => state.compare.compareList);
//   const dispatch = useDispatch();

//   const handleRemove = (product) => {
//     dispatch(removeFromCompare(product));
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Compare Products</h1>
//       {compareList.length === 0 ? (
//         <p>No products to compare.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {compareList.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onRemove={handleRemove}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComparePage;
