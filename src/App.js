import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearch: false,
      showCart: false,
      searchFor: "",
      cart: [],
      totalPrice: 0,
    };
  }

  updateQuantity = async (productId, quantity) => {
    const currentCart = this.state.cart;

    if (quantity === 0) {
      await this.setState({
        cart: currentCart.filter((item) => item.id !== productId),
      });
    } else {
      const product = currentCart.find((item) => item.id === productId);
      product.quantity = quantity;
      currentCart.map((item) => (item.id === productId ? product : null));
      await this.setState({ cart: currentCart });
    }

    this.computeTotalPrice();
  };

  computeTotalPrice = () => {
    let totalPrice = 0;
    this.state.cart.forEach((content) => {
      const priceTotal = content.price * content.quantity;
      totalPrice += priceTotal;
    });
    this.setState({ totalPrice: totalPrice.toFixed(2) });
  };

  addToCart = async (product) => {
    const sameProduct = this.state.cart.filter(
      (productInCart) => productInCart.id === product.id
    );
    const currentCart = this.state.cart;
    if (sameProduct.length === 1) {
      currentCart.map((productInCurrentCart) =>
        productInCurrentCart.id === sameProduct[0].id
          ? (productInCurrentCart.quantity = productInCurrentCart.quantity + 1)
          : null
      );
      await this.setState({ cart: currentCart });
    } else {
      const currentCart = this.state.cart;
      const productObject = product;
      productObject.quantity = 1;
      await this.setState({ cart: [...currentCart, productObject] });
    }
    this.computeTotalPrice();
    this.setState({ showCart: true });
  };

  openSearch = () => {
    this.setState({ showSearch: true });
  };

  setSearchFor = (str) => {
    this.setState({ searchFor: str });
  };

  closeSearch = () => {
    this.setState({
      showSearch: false,
      searchFor: "",
    });
  };

  openCart = () => {
    this.setState({ showCart: true });
  };

  closeCart = () => {
    this.setState({ showCart: false });
  };

  render() {
    return (
      <div>
        <Header
          cartLength={this.state.cart.length}
          openSearch={this.openSearch}
          closeSearch={this.closeSearch}
          openCart={this.openCart}
          closeCart={this.closeCart}
        />
        <Switch>
          <Route exact path="/shopping-cart/products/:productId">
            <ProductPage addToCart={this.addToCart} />
          </Route>
          <Route exact path="/shopping-cart/products">
            <ProductPage addToCart={this.addToCart} />
          </Route>
          <Route exact path="/shopping-cart/catalog/:categoryId">
            <ShopPage />
          </Route>
          <Route exact path="/shopping-cart/catalog">
            <ShopPage />
          </Route>
          <Route exact path="/shopping-cart">
            <HomePage />
          </Route>
        </Switch>
        <Search
          setSearchFor={this.setSearchFor}
          closeSearch={this.closeSearch}
          showSearch={this.state.showSearch}
        />
        <Cart
          updateQuantity={this.updateQuantity}
          totalPrice={this.state.totalPrice}
          cartContent={this.state.cart}
          closeCart={this.closeCart}
          showCart={this.state.showCart}
        />
      </div>
    );
  }
}

export default App;
