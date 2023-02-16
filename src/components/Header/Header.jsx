import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png"

const CartButton = () => {
    return (
        <button>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>12 906 руб</span>
        </button>
    )
}

const Header = () => {
    return (
        <header className="header">
            <NavLink className="logo__link" to="/">
                <img src={logo} alt="Streng store logo"/>
            </NavLink>

            <div className="nav">
                <CartButton />
                <NavLink to="/favorite">
                    <i className="fa-solid fa-heart"></i>
                </NavLink>
                <NavLink to="/user">
                    <i className="fa-solid fa-user"></i>
                </NavLink>
            </div>

        </header>
    )
}

export default Header;