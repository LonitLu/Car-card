import arrowImg from "../../../images/black-down-arrow.svg";
import { Btn } from "../../Buttons/Btn";

export const CardPrice = () => {
  return (
    <div className=" bg-white rounded-20 shadow-card pr-3 pl-3 pb-4 pt-4">
      <h3 className="text-center font-Gilroy">
        Выберите стоимость и схему дней
      </h3>
      <div className="h-[77px] flex justify-between items-center mt-9 mb-2 pl-4 pr-4 bg-[#EFEEEE] rounded-2xl">
        <div>
          <p className="font-Gilroy text-2xl">1 650 ₽</p>
          <p className="text-sm">7 раб. / 0 вых.</p>
        </div>
        <div>
          <img className="cursor-pointer" src={arrowImg} alt="" />
        </div>
      </div>
      <div className=" h-[55px]">
        <Btn textBtn={"Забронировать"} class={"rounded-2xl"} />
      </div>
    </div>
  );
};
