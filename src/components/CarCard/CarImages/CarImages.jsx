import carTitleImg from "./images/car-title.jpeg";
import carImg1 from "./images/image 1.jpeg";
import carImg2 from "./images/image 2.jpeg";
import carImg3 from "./images/image 3.jpeg";
import "./CarImages.css";

export const CarImages = () => {
  return (
    <>
      <div className="mb-3 relative">
        <img
          className=" flex items-end w-full lg:max-w-[824px]  lg:h-[434px] rounded-20"
          src={carTitleImg}
          alt="фото машины"
        />
        <div className="absolute z-20 flex gap-3 left-3 bottom-3">
          <div
            className="card__img"
            style={{ backgroundImage: `url(${carImg1})` }}
          ></div>
          <div
            className="card__img"
            style={{ backgroundImage: `url(${carImg2})` }}
          ></div>
          <div
            className="card__img"
            style={{ backgroundImage: `url(${carImg3})` }}
          ></div>
        </div>
      </div>
    </>
  );
};
