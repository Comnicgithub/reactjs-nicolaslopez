import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

import { FaCartPlus } from 'react-icons/fa';
import { useCartContext } from "../../context/cartContext";

const links = ["Hombre", "Mujer", "Infantil"];

export const Navbar = () => {
  const { cart, getCartQty } = useCartContext();
  console.log({ cart });
  return (
    <header className="navbar">
      <Link to="/">
        <img
          src={
            "../assets/logo-negro.png"
          }
          className="navbar__logo"
          alt="logo"
        />
      </Link>
      <div className="navbar__nav">
        {links.map((elemento) => {
          return (
            <NavLink
              className={({isActive}) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")}
              to={`/category/${elemento.toLowerCase()}`}
              key={elemento}
            >
              {elemento}
            </NavLink>
          );
        })}
      </div>
      <Link to="/cart" className="navbar__cart">
        <FaCartPlus className="carrito" />{" "}
        <span className="navbar__cart-qty">{getCartQty()}</span>
      </Link>
    </header>
  );
};
