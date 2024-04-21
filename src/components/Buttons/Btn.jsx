import PropTypes from "prop-types";

export const Btn = (props) => {
  return (
    <button
      className={`bg-yellow-1 w-full h-full rounded-lg ${props.class} transition ease-in-out hover:scale-105 duration-500`}
    >
      {props.textBtn}
    </button>
  );
};

Btn.propTypes = {
  textBtn: PropTypes.string,
  class: PropTypes.string,
};
