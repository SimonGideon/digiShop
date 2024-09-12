import { Category } from "./";
import { categoriesItems as categories } from "../assets/constants";
const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {categories.map((category, index) => (
        <Category
          key={index}
          icon={category.icon}
          title={category.name}
          items={category.items}
        />
      ))}
    </div>
  );
};
export default CategoriesGrid;
