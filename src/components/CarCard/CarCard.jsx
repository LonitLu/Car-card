import { CarImages } from "./CarImages/CarImages";
import { CardContact } from "./CardContact/CardContact";
import { CardDescription } from "./CardDescription/CardDescription";
import { CardPrice } from "./CardPrice/CardPrice";
import arrowImg from "../../images/white-arrow-left.svg";
import { useState } from "react";

export const CarCard = () => {
  const [isDescription, setDescription] = useState(false);

  function handleClick() {
    setDescription((isDescription) => !isDescription);
  }

  let arrowClass = isDescription ? "rotate-1" : null;
  let aDescriptionClass = isDescription ? "-translate-x-[1px]" : null;

  return (
    <>
      <div className="flex">
        <div className=" min-w-[130px] fixed h-full z-40">
          <div className="bg-yellow-1 w-8 sm:w-[70px] h-full pt-16 pl-2 sm:pl-4">
            <div
              onClick={handleClick}
              className={`w-[50px] sm:w-[110px] h-[50px] sm:h-[110px] bg-yellow-1 flex justify-center items-center rounded-full outline outline-1 outline-white outline-offset-[-10px] sm:outline-offset-[-19px] cursor-pointer rotate-180 duration-500 ease-in-out delay-100 ${arrowClass}`}
            >
              <img
                className=" h-[20px] sm:h-[40px] w-[20px] sm:w-[40px] "
                src={arrowImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={`sm:max-w-[402px] sm:w-full pt-3 absolute z-30 ml-16 sm:ml-36 -translate-x-[520px] duration-500 ease-in-out delay-100 ${aDescriptionClass}`}
        >
          <CardDescription />
          <CardPrice />
        </div>
        <div className="pt-3 pr-3 ml-16 sm:ml-36 pb-12 lg:ml-auto">
          <CarImages />
          <CardContact />
        </div>
      </div>
    </>
  );
};
