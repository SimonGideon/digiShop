import {
  Smartphone,
  Headphones,
  Tv,
  Speaker,
  Home,
  Camera,
} from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faFireBurner,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

const Category = ({ icon, title, items }) => (
  <div className="border border-gray-300">
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
    <ul className="bg-black text-white">
      {items.map((item, index) => (
        <li key={index} className="p-2 border-t border-gray-700">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

Category.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Category
        icon={<FontAwesomeIcon icon={faFire} className="text-red-600" />}
        title="HOT Phones"
        items={[
          "Oneplus Smartphones",
          "Xiaomi Smartphones",
          "Samsung Smartphones",
          "Tecno Smartphones",
          "Infinix Smartphones",
          "Nokia Smartphones",
          "RealMe Smartphones",
          "Oppo Smartphones",
          "Pixel Smartphones",
          "Nothing Smartphones",
        ]}
      />
      <Category
        icon={<Smartphone />}
        title="Smartphones"
        items={[
          "Under ksh.2,000",
          "Ksh.2,000-Ksh.5,000",
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10,000-Ksh 20,000",
          "Ksh 20,000-Ksh 30,000",
          "Ksh 30,000-Ksh 40,000",
          "Ksh 40,000-Ksh 70,000",
          "Ksh 70,000-Ksh 100,000",
          "Ksh100,000-Ksh 200,000",
          "Above Ksh 200,000",
        ]}
      />
      <Category
        icon={<Headphones />}
        title="Phone Accessories"
        items={[
          "Earphones",
          "Headphones",
          "Smart watches",
          "Memory cards",
          "Back covers",
          "Flip Covers",
          "Glass protectors",
          "Chargers and cables",
          "Phone Batteries",
          "Power banks",
        ]}
      />
      <Category
        icon={<Tv />}
        title="TVS"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          '32" Inches-43" Inches',
          '44" Inches-50" Inches',
          '51" Inches-60" Inches',
          '61" Inches-100" Inches',
        ]}
      />
      <Category
        icon={<Speaker />}
        title="Audio"
        items={[
          "Ksh 2, 000-Ksh 5,000",
          "Ksh 5, 000-Ksh 10,000",
          "Ksh 10, 000-Ksh 20,000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 100,000",
          "Above Ksh 100,000",
          "Anker",
          "Sony",
          "JBL",
          "LG",
        ]}
      />

      <Category
        icon={<FontAwesomeIcon icon={faFireBurner} />}
        title="Cookers"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "4 Burners",
          "3 Burners",
          "2 Burners",
          "1 Burner",
        ]}
      />

      <Category
        icon={<span className="material-symbols-outlined">kitchen</span>}
        title="Fridges"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "Ramtons",
          "Mika",
          "Sony",
          "LG",
        ]}
      />

      <Category
        icon={<span className="material-symbols-outlined">microwave</span>}
        title="Kitchen Appliances"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "Blenders",
          "Juicers",
          "Toasters",
          "Kettles",
        ]}
      />

      <Category
        icon={<Home />}
        title="Home Appliances"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "Irons",
          "Vacuum Cleaners",
          "Fans",
          "Heaters",
        ]}
      />

      <Category
        icon={<span className="material-symbols-outlined">laptop_mac</span>}
        title="Laptops"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "HP",
          "Dell",
          "Lenovo",
          "Asus",
        ]}
      />

      <Category
        icon={<FontAwesomeIcon icon={faComputer} />}
        title="Computers"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "HP",
          "Dell",
          "Lenovo",
          "Asus",
        ]}
      />
      <Category
        icon={<span className="material-symbols-outlined">devices</span>}
        title="Laptop and Tablet"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "Laptop Bags",
          "Laptop Chargers",
          "Laptop Batteries",
          "Phone Chargers",
          "Phone Batteries",
          "Phone Covers",
          "Phone Screen Protectors",
        ]}
      />

      <Category
        icon={
          <span className="material-symbols-outlined">developer_mode_tv</span>
        }
        title="TV Accessories"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "TV Wall Mounts",
          "TV Stands",
          "TV Remote Controls",
          "TV Screen Protectors",
          "TV Cables",
          "TV Speakers",
          "TV Brackets",
        ]}
      />

      <Category
        icon={<Camera />}
        title="Cameras & Accessories"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "Canon",
          "Nikon",
          "Sony",
          "GoPro",
          "DJI",
          "Camera Bags",
          "Camera Lenses",
          "Camera Batteries",
          "Camera Chargers",
          "Camera Tripods",
          "Camera Memory Cards",
        ]}
      />

      <Category
        icon={<span className="material-symbols-outlined">meeting_room</span>}
        title="Office"
        items={[
          "Ksh 5,000-Ksh 10,000",
          "Ksh 10, 000- Ksh 20, 000",
          "Ksh 20, 000- Ksh 30,000",
          "Ksh 30, 000- Ksh 40, 000",
          "Ksh 40,000- Ksh 100,000",
          "Above Ksh 100,000",
          "Office Chairs",
          "Office Desks",
          "Office Cabinets",
          "Office Shelves",
          "Office Tables",
          "Office Stationery",
          "Office Printers",
          "Office Scanners",
          "Office Projectors",
        ]}
      />
    </div>
  );
};

export default CategoriesGrid;
