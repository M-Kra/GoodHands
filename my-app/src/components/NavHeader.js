import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "../scss/NavHeader.scss";

const NavHeader = () => {
    const location = useLocation();
    return (
        <nav className="navigation">
            <ul className="navigation__login">
                <li><Link className="navLinkLog" to="/logowanie">Zaloguj</Link></li>
                <li><Link className="navLinkLog" to="/rejestracja">Załóż konto</Link></li>
            </ul>
            <ul className="navigation__menu">
                <li>
                    {location.pathname === "/" ? (
                    <ScrollLink className="navLink" to="start" smooth={true} duration={500}>Start</ScrollLink>
                ) : (
                    <Link className="navLink" to="/">Start</Link>
                )
                }</li>
                <li><ScrollLink className="navLink" to="what" smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                <li><ScrollLink className="navLink" to="about" smooth={true} duration={500}>O nas</ScrollLink></li>
                <li><ScrollLink className="navLink" to="organizations" smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                <li><ScrollLink className="navLink" to="contact" smooth={true} duration={500}>Kontakt</ScrollLink></li>
            </ul>
        </nav>
    );
}

export default NavHeader