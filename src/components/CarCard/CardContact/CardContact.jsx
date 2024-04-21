import mapIcon from "../../../images/map-icon.svg";
import clockIcon from "../../../images/clock-icon.svg";
import arrowImg from "../../../images/black-down-arrow.svg";
import { Btn } from "../../Buttons/Btn";

export const CardContact = () => {
  return (
    <>
      <div className="pl-8 pt-4 pr-5 pb-3 max-w-[817px] bg-white rounded-20 shadow-card">
        <div className="pb-4 flex justify-between border-b border-black/35">
          <div className="">
            <p className="pb-7">Адрес парка</p>
            <address className="">
              <img src={mapIcon} alt="Москва, ул. Поморская 15с1, 127410" />
              <a className="text-blue-link hidden md:block" href="#">
                Москва, ул. Поморская 15с1, 127410
              </a>
            </address>
          </div>
          <div className="">
            <p className="pb-7 text-right">График работы</p>
            <span className="flex gap-2">
              <img src={clockIcon} alt="График работы" />
              <p>Пн - Пт: 10:00 - 22:00</p>
            </span>
            <p className="text-right">Сб - Вс: выходной</p>
          </div>
        </div>
        <div className="pb-4 border-b border-black/35">
          <p className="pt-5 pb-7">Телефон</p>
          <address>
            <a href="tel:+79991234567">+7(999) 123-45-67</a>
          </address>
        </div>
        <div className="pt-4 pb-3 flex justify-between items-center border-b border-black/35">
          <p>О парке</p>
          <div>
            <img className="cursor-pointer" src={arrowImg} alt="" />
          </div>
        </div>
        <div className="pt-3 mb-3 h-10 flex justify-end">
          <div className=" w-[255px] h-[41px]">
            <Btn textBtn={"Смотреть похожие"} />
          </div>
        </div>
      </div>
    </>
  );
};
