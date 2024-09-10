import { MobileCategoryCard, Category } from "./";
import { useState } from "react";

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
const categories = [
  {
    name: "Hot Deals",
    icon: <FontAwesomeIcon icon={faFire} className="h-5 w-5" />,
    items: [
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
    ],
  },
  {
    name: "Smartphones",
    icon: <Smartphone className="h-5 w-5" />,
    items: [
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
    ],
  },
  {
    name: "Phone Accessories",
    icon: <Headphones className="h-5 w-5" />,
    items: [
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
    ],
  },
  {
    name: "TVs",
    icon: <Tv className="h-5 w-5" />,
    items: [
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
    ],
  },
  {
    name: "Speakers",
    icon: <Speaker className="h-5 w-5" />,
    items: [
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
    ],
  },
  {
    name: "Home Appliances",
    icon: <Home className="h-5 w-5" />,
    items: [
      "Ksh 5,000-Ksh 10,000",
      "Ksh 10, 000- Ksh 20, 000",
      "Ksh 20, 000- Ksh 30,000",
      "Ksh 30, 000- Ksh 40, 000",
      "Ksh 40,000- Ksh 100,000",
      "Above Ksh 100,000",
      "Microwaves",
      "Blenders",
      "Juicers",
      "Kettles",
      "Cookers",
      "Fridges",
    ],
  },
  {
    name: "Cameras",
    icon: <Camera className="h-5 w-5" />,
    items: [
      "Ksh 5,000-Ksh 10,000",
      "Ksh 10, 000- Ksh 20, 000",
      "Ksh 20, 000- Ksh 30,000",
      "Ksh 30, 000- Ksh 40, 000",
      "Ksh 40,000- Ksh 100,000",
      "Above Ksh 100,000",
      "Canon",
      "Nikon",
      "Sony",
      "Camera Lenses",
      "Camera Batteries",
      "Camera Tripods",
      "Camera Memory Cards",
    ],
  },
  {
    name: "Computers",
    icon: <FontAwesomeIcon icon={faComputer} className="h-6 w-6" />,
    items: [
      "Ksh 5,000-Ksh 10,000",
      "Ksh 10, 000- Ksh 20, 000",
      "Ksh 20, 000- Ksh 30,000",
      "Ksh 30, 000- Ksh 40, 000",
      "Ksh 40,000- Ksh 100,000",
      "Above Ksh 100,000",
      "Desktops",
      "Laptops",
      "Monitors",
      "Printers",
      "Scanners",
      "Projectors",
      "UPS",
    ],
  },
  {
    name: "Cookers",
    icon: <FontAwesomeIcon icon={faFireBurner} className="h-6 w-6" />,
    items: [
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
    ],
  },
  {
    icon: <span className="material-symbols-outlined">kitchen</span>,
    name: "Fridges",
    items: [
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
    ],
  },

  {
    icon: <span className="material-symbols-outlined">developer_mode_tv</span>,
    name: "TV Accessories",
    items: [
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
    ],
  },

  {
    icon: <span className="material-symbols-outlined">devices</span>,
    name: "Laptop & Tablet",
    items: [
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
    ],
  },
  {
    icon: <span className="material-symbols-outlined">meeting_room</span>,
    name: "Office",
    items: [
      "Ksh 5,000-Ksh 10,000",
      "Ksh 10, 000- Ksh 20, 000",
      "Ksh 20, 000- Ksh 30,000",
      "Ksh 30, 000- Ksh 40, 000",
      "Ksh 40,000- Ksh 100,000",
      "Above Ksh 100,000",

      "Office Printers",
      "Office Scanners",
      "Office Projectors",
    ],
  },
];

const MobileDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseSidebar = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="relative">
      <div className="p-4">
        <MobileCategoryCard
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <div
        className={`fixed top-0 right-0 w-80 bg-white border border-gray-300 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          selectedCategory ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleCloseSidebar}
          className="absolute top-2 right-2 text-gray-600"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {selectedCategory && (
          <Category
            icon={selectedCategory.icon}
            title={selectedCategory.name}
            items={selectedCategory.items}
          />
        )}
      </div>
    </div>
  );
};

export default MobileDisplay;
