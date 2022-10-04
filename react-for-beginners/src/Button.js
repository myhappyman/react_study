import PropTypes from "prop-types";
import btnStyles from "./Button.module.css";

function Button({text}){
    return <button className={btnStyles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;