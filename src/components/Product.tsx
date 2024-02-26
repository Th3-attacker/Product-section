const Product: React.FC = () => {
  return (
    <div className="sm:mt-0 mt-40 flex sm:flex-row flex-col-reverse sm:justify-between sm:py-20 gap-10 py-16 sm:px-12 px-20 h-screen justify-center  ">
      <SectionLeft />
      <SectionRight />
    </div>
  );
};
export default Product;

import color1 from "../assets/Ellipse 1.svg";
import color4 from "../assets/Ellipse 3.svg";
import color3 from "../assets/Ellipse 4.svg";
import color2 from "../assets/Ellipse 5.svg";
import starts from "../assets/Stars.svg";
import back from "../assets/back.svg";
import facebook from "../assets/facebook.svg";
import heart from "../assets/heart.svg";
import instagram from "../assets/instagram.svg";
import minus from "../assets/minus.svg";
import pinterest from "../assets/pinterest.svg";
import plus from "../assets/plus.svg";
import twitter from "../assets/twitter.svg";
export const SectionLeft: React.FC = () => {
  return (
    <section className="sm:w-2/5 space-y-10 sm:space-y-12">
      <img src={back} alt="" className="cursor-pointer" />
      <p className="mt-10 font-semibold sm:text-md text-base leading-4">
        <span className="text-naturel_gray">Chair /</span> Meryl Lounge Chair
      </p>
      <h1 className="font-bold text-4xl sm:text-6xl text-naturel_cadet leading-[56-px] font-poppins mt-[10px]">
        Meryl Lounge Chair
      </h1>
      <div className="mt-[8px] flex justify-between items-center">
        <span className="text-2xl leading-4 font-semibold text-naturel_cadet">
          $149.99
        </span>
        <div className="flex space-x-3">
          <img src={starts} alt="" />
          <span>4.6 / 5.0 </span>
        </div>
      </div>
      <p className="font-normal text-justify text-lg sm:text-xl leading-6 mr-[15px] mt-[32px] text-naturel_cadet">
        The gently curved lines accentuated by sewn details are kind to your
        body and pleasant to look at. Also, there’s a tilt and height-adjusting
        mechanism that’s built to outlast years of ups and downs.
      </p>
      <div className="flex space-x-4 sm:space-x-8 mt-[10px]">
        <span className="">
          <img src={color1} alt="" className="" />
        </span>
        <span>
          <img src={color2} alt="" />
        </span>
        <span>
          <img src={color3} alt="" />
        </span>
        <span>
          <img src={color4} alt="" />
        </span>
      </div>
      <div className="mt-[35px] flex space-x-6">
        <div className="border-naturel-gray border-2 border-naturel_gray rounded-xl flex items-center justify-between p-4 w-[160px] font-bold text-naturel_cadet ">
          <button>
            <img src={minus} alt="minus" />
          </button>
          <span>1</span>
          <button>
            <img src={plus} alt="plus" />
          </button>
        </div>
        <button className="py-2 px-4 text-center  w-[160px] bg-primary rounded-xl font-semibold text-base leading-5 text-naturel_white">
          Add to Cart
        </button>
      </div>
      <p className="mt-[32px] text-base sm:text-xl font-normal leading-6 text-naturel_cadet">
        Free 3-5 day shipping • Tool-free assembly • 30-day trial
      </p>
      <div className="flex justify-between mt-[57px]">
        <div className="space-x-4 flex font-semibold text-base">
          <img src={heart} alt="" className="text-primary" />
          <button className="text-primary leading-5">Add to Wishlist</button>
        </div>
        <div className="flex  space-x-3 sm:space-x-6 items-center">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </section>
  );
};

import chevronLeft from "../assets/chevron-left.svg";
import chevronRight from "../assets/chevron-right.svg";
import productImage from "../assets/images/Product Image.png";
import product1 from "../assets/images/Rectangle 2.png";
import product2 from "../assets/images/Rectangle 4.png";
import product3 from "../assets/images/Rectangle 5.png";
import product4 from "../assets/images/Rectangle 6.png";
import product5 from "../assets/images/langfjaell-office-chair-with-armrests-gunnared-beige-black__0461403_PE607530_S5 1.png";
export const SectionRight: React.FC = () => {
  return (
    <section className=" sm:w-3/5 sm:text-end text-center items-center flex-row justify-center">
      <p className="text-2xl text-naturel_gray mr-20">
        <span className="font-bold text-4xl text-naturel_cadet">01 </span> / 05
      </p>
      <div className="text-end mt-10  ">
        <div className="bg-white mb-5  ">
          <div className="space-x-24 sm:mt-[10px] mr-10 ">
            <button>
              <img src={chevronLeft} alt="" />
            </button>
            <button>
              <img src={chevronRight} alt="" />
            </button>
          </div>
          <div className="flex justify-center sm:justify-end">
            <img src={productImage} alt="" className="h-[500px] w-[800px]" />
          </div>
        </div>
        <div className="flex sm:justify-end sm:mr-12 items-center space-x-12">
          <img
            src={product1}
            alt=""
            className="w-[60px] h-[60px] object-contain rounded-md"
          />
          <img
            src={product2}
            alt=""
            className="w-[60px] h-[60px] object-contain rounded-md"
          />
          <img
            src={product3}
            alt=""
            className="w-[60px] h-[60px] object-contain rounded-md"
          />
          <img
            src={product4}
            alt=""
            className="w-[60px] h-[60px] object-contain rounded-md"
          />
          <img
            src={product5}
            alt=""
            className="w-[60px] h-[60px] object-contain rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
