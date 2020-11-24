import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/Header.module.css";

function Header(props) {
  const { openSearch, openCart } = props;
  const [theme, setTheme] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setTheme(location.pathname === "/" ? "light" : "dark");
  }, [location]);

  return (
    <header className={styles.container}>
      <Link
        className={theme === "light" ? styles.logo : styles.logoBlack}
        to="/shopping-cart"
      >
        Core Components
      </Link>
      <nav className={styles.nav}>
        <Link
          className={theme === "light" ? styles.shop : styles.shopBlack}
          to="/shopping-cart/catalog"
        >
          Shop
        </Link>
        <button
          onClick={openSearch}
          className={theme === "light" ? styles.btn : styles.btnBlack}
        >
          <svg
            className={styles.svgSearch}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
        </button>
        <div className={styles.cartBtnContainer}>
          {props.cartLength > 0 && (
            <div
              className={
                theme === "light" ? styles.cartLength : styles.cartLengthBlack
              }
            >
              {props.cartLength}
              <svg
                className={
                  theme === "light" ? styles.svgArrow : styles.svgArrowBlack
                }
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12l-18 12v-24z" />
              </svg>
            </div>
          )}
          <button
            onClick={openCart}
            className={theme === "light" ? styles.btn : styles.btnBlack}
          >
            <svg
              className={styles.svgCart}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  openSearch: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
};

export default Header;
