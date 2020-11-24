import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/SlideUpButton.module.css";

function SlideUpButton(props) {
  const { text, onClick, path } = props;
  return (
    <Link onClick={onClick} className={styles.link} to={path}>
      <div className={styles.linkText}>{text}</div>
    </Link>
  );
}

SlideUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default SlideUpButton;
