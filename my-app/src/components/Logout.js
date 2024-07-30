import React from "react";
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg"
import "../scss/Logout.scss"
import NavHeader from "./NavHeader";

const Logout = () => {

    return (
        <>
            <NavHeader/>
            <section className="logout">
                <h2 className="logout__header">Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                <div className="logout__decoration"><img className="decoration__img" src={decoration} alt="decoration"/></div>
                <Link className="logout__btn" to="/">Strona główna</Link>
            </section>
        </>
    );
};

export default Logout;