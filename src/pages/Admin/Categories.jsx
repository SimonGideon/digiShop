import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/adminSlice";
import { InventoryTable, Loader } from "../../components";
import { PlusCircle } from "feather-icons-react";

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
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-nowrap flex gap-2">
          <PlusCircle className="text-white" /> New
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="p-6">
          <InventoryTable
            data={formattedCategories}
            columns={columns}
            title="Categories List"
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
