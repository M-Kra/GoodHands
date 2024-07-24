import React from 'react';
import {Link} from "react-router-dom";
import '../scss/Home.scss';
import Decoration from "../assets/Decoration.svg";

const Home = () => {
    return (
        <header className="header" id="start">
            <div className="header__pic"></div>
            <div className="header__main">
                <h1 className="main__heading">
                    <span>Zacznij pomagać!</span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                </h1>
                <img className="decoration" src={Decoration} alt="decoration"/>
                <ul className="main__buttons">
                    <li className="main__buttons--button">
                        <Link className="navLink" to="/logowanie">
                            <span>Oddaj</span>
                            <span>rzeczy</span>
                        </Link>
                    </li>
                    <li className="main__buttons--button">
                        <Link className="navLink" to="/logowanie">
                            <span>Zorganizuj</span>
                            <span>zbiórkę</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Home;
