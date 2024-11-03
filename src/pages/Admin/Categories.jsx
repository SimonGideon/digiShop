import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/adminSlice";
import { InventoryTable, Loader } from "../../components";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    maxWidth: "5px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Subcategories",
    selector: (row) => row.subcategoryNames,
    sortable: false,
  },
];

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { categories, loading, error } = useSelector((state) => ({
    categories: state.adminData.categories.data || [],
    loading: state.adminData.categories.status === "loading",
    error: state.adminData.categories.error,
  }));

  const formattedCategories = categories.map((category) => ({
    ...category,
    subcategoryNames: category.subcategories.map((sub) => sub.name).join(", "),
  }));

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="p-6">
          <InventoryTable data={formattedCategories} columns={columns} />
        </div>
      )}
    </div>
  );
};

export default Categories;
