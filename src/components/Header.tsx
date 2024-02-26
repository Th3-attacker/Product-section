import menu from "../assets/menu 1.svg";
import search from "../assets/search.svg";
import shopping from "../assets/shopping-cart.svg";
const Header: React.FC = () => {
  return (
    <header className="w-full px-2 sm:px-6 mx-auto border-b-2 h-20 flex justify-between items-center">
      <div className="">
        <h1 className="font-bold font-Cambay text-2xl">Cozy®</h1>
      </div>
      <ul className="hidden sm:flex space-x-8">
        <li className="font-semibold text-sm leading-4 text-naturel_cadet ">
          SHOP
        </li>
        <li className="font-semibold text-sm leading-4 text-naturel_cadet ">
          COLLECTIVE
        </li>
        <li className="font-semibold text-sm leading-4 text-naturel_cadet ">
          DESIGNERS
        </li>
        <li className="font-semibold text-sm leading-4 text-naturel_cadet ">
          ABOUT US
        </li>
        <li className="font-semibold text-sm leading-4 text-naturel_cadet ">
          CONTACT
        </li>
      </ul>
      <div className="flex space-x-4 items-center ">
        <div className="space-x-2 mt-1 flex-reverse sm:flex ">
          <button>
            <img src={menu} alt="menu" />
          </button>
          <button className="hidden sm:block">
            <img src={search} alt="search" />
          </button>
        </div>
        <div className="border-l h-20 hidden sm:flex">
          <button className="ml-5">
            <img src={shopping} alt="panier" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
