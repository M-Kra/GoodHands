import React from "react";
import "../scss/SimpleSteps.scss";
import decoration from "../../src/assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from  "../assets/Icon-2.svg"
import icon3 from  "../assets/Icon-3.svg"
import icon4 from  "../assets/Icon-4.svg"
import {NavLink} from "react-router-dom";


const SimpleSteps = () => {
    return (
        <section className="instructionSteps" id="what">
            <h2 className="instructionSteps__header">Wystarczą 4 proste kroki</h2>
            <img className="instructionSteps__decoration" src={decoration} alt="decoration"/>
            <div className="steps">
                <div className="box">
                    <img className="box__icon" src={icon1} alt="icon-t-shirt"/>
                    <p className="box__title">Wybierz rzecz</p>
                    <p className="box__description">Ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="box">
                    <img className="box__icon" src={icon2} alt="icon-bag"/>
                    <p className="box__title">Spakuj je</p>
                    <p className="box__description">Skorzystaj z worków na śmieci</p>
                </div>
                <div className="box">
                    <img className="box__icon" src={icon3} alt="icon-magnifying-glass"/>
                    <p className="box__title">Zdecyduj komu chcesz pomóc</p>
                    <p className="box__description">wybierz zaufane miejsce</p>
                </div>
                <div className="box">
                    <img className="box__icon" src={icon4} alt="icon-arrows"/>
                    <p className="box__title">Zamów kuriera</p>
                    <p className="box__description">Kurier przyjedzie w dogodnym miejscu</p>
                </div>
            </div>
            <NavLink className="navLinkSteps" to="/logowanie">
                <span>Oddaj </span>
                <span>Rzeczy</span>
            </NavLink>
        </section>
    )
};

export default SimpleSteps;