import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ProductPage.module.css";
import allProducts from "../data/allProducts";

const ProductPage = (props) => {
  const squares = "Component".split("");
  const { productId } = useParams();
  const product = allProducts.find((product) => product.id === productId);
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState(null);
  const [cursorIsVisible, setCursorIsVisible] = useState(false);

  useEffect(() => {
    const image = document.getElementById("image");
    image.style.opacity = 1;
  }, []);

  const nextImage = () => {
    if (product.gallery.length === 1) {
      return null;
    }

    const image = document.getElementById("image");
    image.style.opacity = 0;

    setTimeout(() => {
      if (index < product.gallery.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
      image.style.opacity = 1;
    }, 100);
  };

  const prevImage = () => {
    if (product.gallery.length === 1) {
      return null;
    }

    const image = document.getElementById("image");
    image.style.opacity = 0;

    setTimeout(() => {
      if (index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(product.gallery.length - 1);
      }
      image.style.opacity = 1;
    }, 100);
  };

  const showCursor = (e) => {
    if (cursorIsVisible) {
      const cursor = document.getElementById("cursor");
      cursor.style.display = "flex";
      cursor.style.top = `${e.pageY}px`;
      cursor.style.left = `${e.pageX}px`;
    }
    setCursorIsVisible(true);
  };

  const hideCursor = () => {
    setCursorIsVisible(false);
  };

  const showLeftCursor = (e) => {
    setCursor("left");
    showCursor(e);
  };

  const showRightCursor = (e) => {
    setCursor("right");
    showCursor(e);
  };

  const cursorVariants = {
    visible: { opacity: 0.8, scale: 1, x: "-50%", y: "-50%" },
    hidden: { opacity: 0, scale: 0.8, x: "-50%", y: "-50%" },
  };

  const addToCart = () => {
    props.addToCart(product);
  };

  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AnimatePresence>
          {cursorIsVisible && (
            <motion.div
              variants={cursorVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ ease: "easeOut", duration: 0.4 }}
              id="cursor"
              className={styles.cursor}
            >
              {cursor && cursor === "left" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
              )}
              {cursor && cursor === "right" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#efece9"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.interactionArea}>
          <div
            onMouseEnter={showLeftCursor}
            onMouseMove={showLeftCursor}
            onMouseLeave={hideCursor}
            onClick={prevImage}
            className={styles.leftClickArea}
          />
          <div
            onMouseEnter={showRightCursor}
            onMouseMove={showRightCursor}
            onMouseLeave={hideCursor}
            onClick={nextImage}
            className={styles.rightClickArea}
          />
        </div>
        <div className={styles.bgStyle} />
        <h1 className={styles.productName}>{product.name}</h1>
        <img
          id="image"
          src={product.gallery[index]}
          alt={product.name}
          className={styles.productImage}
        />
        <div className={styles.galleryCounter}>
          <span className={styles.galleryCurrentIndex}>
            {(index + 1).toString().padStart(3, "0")}
          </span>
          {` / ${product.gallery.length.toString().padStart(3, "0")}`}
        </div>
      </main>
      <aside className={styles.side}>
        <div className={styles.squares}>
          {squares &&
            squares.map((square, index) => {
              return (
                <span key={index} className={styles.square}>
                  {square}
                </span>
              );
            })}
        </div>
        <div className={styles.productPrice}>{format(product.price)}</div>
        <div className={styles.buyButtons}>
          <button onClick={addToCart} className={styles.addToBag}>
            <div>
              <span>Add to bag</span>
              <span>Add to bag</span>
            </div>
          </button>
          <button onClick={addToCart} className={styles.buyNow}>
            Buy it now
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ProductPage;
