import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/Cart.module.css";
import SlideUpButton from "./SlideUpButton";
import CartItem from "./CartItem";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const cart = {
  hidden: { x: "100%" },
  visible: { x: "0" },
};

export default function Cart({
  updateQuantity,
  totalPrice,
  cartContent,
  closeCart,
  showCart,
}) {
  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  };

  return (
    <AnimatePresence>
      {showCart && (
        <>
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeCart}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={styles.backdrop}
          />
          <motion.div
            variants={cart}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={styles.cart}
          >
            <div className={styles.container}>
              <button onClick={closeCart} className={styles.close}>
                <svg
                  className={styles.svgClose}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                </svg>
              </button>
              <div className={styles.cartContentWrapper}>
                <h1 className={styles.title}>
                  Your
                  <br />
                  Shopping
                  <br />
                  Bag
                </h1>
                <div className={styles.cartList}>
                  {cartContent &&
                    cartContent.length > 0 &&
                    cartContent.map((product) => (
                      <CartItem
                        key={product.id}
                        updateQuantity={updateQuantity}
                        product={product}
                      />
                    ))}
                  {cartContent && cartContent.length > 0 && (
                    <>
                      <div className={styles.totalPrice}>
                        Subtotal: {format(totalPrice)}
                      </div>
                      <SlideUpButton
                        onClick={closeCart}
                        text="Checkout"
                        path="/shopping-cart"
                      />
                    </>
                  )}
                  {cartContent && cartContent.length === 0 && (
                    <p className={styles.subtitle}>Your bag is empty.</p>
                  )}
                </div>
              </div>
              {cartContent && cartContent.length === 0 && (
                <>
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
                  <SlideUpButton
                    onClick={closeCart}
                    text="Browse Products"
                    path="/shopping-cart/catalog"
                  />
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
