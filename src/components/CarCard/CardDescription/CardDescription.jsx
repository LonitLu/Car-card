import "./CardDescription.css";

export const CardDescription = () => {
  return (
    <div className="bg-white rounded-20 shadow-card pr-5 pl-5 pb-5 mb-4">
      <div>
        <h1 className="pt-8 pb-7 md:pb-16 text-center font-Gilroy text-2xl">
          Kia Presto 2019
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <ul className="list">
              <li>Марка</li>
              <li>Kia</li>
            </ul>
          </li>
          <li>
            <ul className="list">
              <li>Модель</li>
              <li>Presto</li>
            </ul>
          </li>
          <li>
            <ul className="list">
              <li>Пробег</li>
              <li>500 км</li>
            </ul>
          </li>
          <li>
            <ul className="list">
              <li>Год</li>
              <li>2019</li>
            </ul>
          </li>
          <li>
            <ul className="list">
              <li>Комиссия парка</li>
              <li>0.1%</li>
            </ul>
          </li>
          <li>
            <ul className="list">
              <li>Коробка передач</li>
              <li>Автомат</li>
            </ul>
          </li>
          <li>
            <ul className="list">
              <li>Тип топлива</li>
              <li>Бензин</li>
            </ul>
          </li>
          <li>
            <ul className="list border-none">
              <li>Название парка</li>
              <li>Predator</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
