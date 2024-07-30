import React, {useState} from "react";
import decoration from "../assets/Decoration.svg"
import "../scss/LoginForm.scss"
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [msgMail, setMsgMail] = useState("");
    const [msgPass, setMsgPass] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [passValue, setPassValue] = useState("");

    console.log(mailValue);
    console.log(passValue);

const handleClick = (event) => {
        event.preventDefault ()

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!(mailValue.match (validRegex))) {
            setMsgMail ("Podany mail jest nieprawidłowy!");
        } else {
            setMsgMail ("");
        }

        if (passValue.length < 6) {
            setMsgPass ("Podane hasło jest za krótkie!");
        } else {
            setMsgPass ("");
        }
    }

    return (
        <div className="login">
            <h2 className="login__header">Zaloguj się</h2>
            <div className="login__decoration">
                <img className="decoration__img" src={decoration} alt="decoration"/>
            </div>
            <form className="login__form">
                <div className="form__container">
                    <div className="form__box">
                        <label className="form__label">
                              Email
                            <input
                                type="text"
                                className={`login__input form__input--email ${msgMail ? 'error' : ''}`}
                                value={mailValue}
                                onChange={(e) => setMailValue (e.target.value)}
                            />
                        </label>
                        {msgMail && <div className="form__error">{msgMail}</div>}
                    </div>
                    <div className="form__box">
                        <label className="form__label">
                            Hasło
                            <input
                                type="password"
                                className={`login__input form__input--password ${msgPass ? 'error' : ''}`}
                                value={passValue}
                                onChange={(e) => setPassValue (e.target.value)}
                            />
                        </label>
                        {msgPass && <div className="form__error">{msgPass}</div>}
                    </div>
                </div>
                <div className="form__btns">
                    <Link className="form__btn form__btn--new" to="/rejestracja">Załóż konto</Link>
                    <button className="form__btn form__btn--login" onClick={handleClick}>Zaloguj się</button>
                </div>
            </form>
        </div>

    );
};

export default LoginForm;