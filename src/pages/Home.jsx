import { NavBar, CategoriesGrid, MobileDisplay } from "../componets";

const Home = () => {
  return (
    <>
      <div className="bg-gray-800">
        <NavBar />
      </div>
      <div className="p-4">
        {/* For mobile screens, show MobileDisplay */}
        <div className="block md:hidden">
          <MobileDisplay />
        </div>
        {/* For medium and larger screens, show CategoriesGrid */}
        <div className="hidden md:block">
          <CategoriesGrid />
        </div>
      </div>
    </>
  );
};

export default Home;
