import logo from "../../images/flex-trap-logo.png";
import "./Navbar.css";
import SignIn from "./SignIn";
import { useEffect, useState } from "react";

export default function Navbar({ cart, setCart }) {
  const [signIn, setSignIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [animate, setAnimate] = useState(false);

  function handleCartClick() {
    setShowCart((prevState) => !prevState);
  }

  function removeCartItem(itemToBeRemoved) {
    const newCart = cart.filter((_, index) => index !== itemToBeRemoved);
    setCart(newCart);
  }

  useEffect(() => {
    if (cart.length > 0) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cart]);

  function handleSignIn() {
    if (signIn) {
      setSignIn(false);
      setTimeout(() => {
        setShowSignIn(false);
      }, 700);
    } else {
      setShowSignIn(true);
      setSignIn(true);
    }
  }

  const totalPrice = cart.reduce(
    (total, itemSelected) => total + itemSelected.price,
    0
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            <img
              src={logo}
              className="logo img-thumbnail"
              alt="Discounted Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  <span>Sale</span>
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                onClick={handleSignIn}
                className={`btn ${signIn ? "btn-danger" : "btn-outline-dark"}`}
                type="button"
              >
                {signIn ? "Close" : "Sign In"}
              </button>
              <button
                className={`btn btn-outline-dark ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
                type="button"
                onClick={handleCartClick}
              >
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cart.length}
                </span>
              </button>
            </form>
          </div>
        </div>
        {showSignIn ? <SignIn signIn={signIn} /> : ""}
        {showCart && (
          <div className="modal d-block animate__animated animate__slideInDown">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Cart
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCartClick}
                  ></button>
                </div>
                <div className="modal-body">
                  {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    <ul className="list-group list-group-flush">
                      {cart.map((item, index) => (
                        <li className="list-group-item" key={index}>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => removeCartItem(index)}
                          >
                            X
                          </button>
                          {item.title} - €{item.price}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="modal-footer">
                  <p className="total-price">
                    Total: € {totalPrice.toFixed(2)}
                  </p>
                  <button type="button" className="btn btn-primary">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
