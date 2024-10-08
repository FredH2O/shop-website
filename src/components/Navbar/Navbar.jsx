import logo from "../../images/flex-trap-logo.png";
import FakeStore from "../FakeStoreAPI/FakeStoreAPI";
import SelectCategory from "../SelectCategory/SelectCategory";
import "./Navbar.css";
import SignIn from "./SignIn";
import { useState } from "react";

export default function Navbar() {
  const [signIn, setSignIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

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
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
        {showSignIn ? <SignIn signIn={signIn} /> : ""}
      </nav>
    </>
  );
}
