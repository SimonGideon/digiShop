import {
  CategoriesGrid,
  MobileDisplay,
  ContactDetails,
  Footer,
} from "../componets";

const Home = () => {
  return (
    <div>
      <div className="p-4 md:p-6">
        <div className="block md:hidden">
          <MobileDisplay />
        </div>
        <div className="hidden md:block">
          <CategoriesGrid />
        </div>
      </div>
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Home;
