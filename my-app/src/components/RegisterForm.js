import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import "../scss/RegisterForm.scss";

const RegisterForm = () => {
    const [msgMail, setMsgMail] = useState("");
    const [msgPass, setMsgPass] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [msgPassRep, setMsgPassRep] = useState("");
    const [passValueRep, setPassValueRep] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let valid = true;

        if (!mailValue.match(validRegex)) {
            setMsgMail("Podany mail jest nieprawidłowy!");
            valid = false;
        } else {
            setMsgMail("");
        }

        if (passValue.length < 6) {
            setMsgPass("Podane hasło jest za krótkie!");
            valid = false;
        } else {
            setMsgPass("");
        }

        if (passValueRep.length < 6 || passValueRep !== passValue) {
            setMsgPassRep("Podane hasła nie są identyczne");
            valid = false;
        } else {
            setMsgPassRep("");
        }

        if (valid) {
            navigate("/logowanie");
        }
    };

    return (
        <div className="register">
            <h2 className="register__header">Załóż konto</h2>
            <div className="register__decoration">
                <img className="decoration__img" src={decoration} alt="decoration" />
            </div>
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="form__container--reg">
                    <div className="form__box--reg">
                        <label className="form__label--reg">
                            Email
                            <input
                                type="text"
                                className={`login__input--reg form__input--email ${msgMail ? "error" : ""}`}
                                value={mailValue}
                                onChange={(e) => setMailValue(e.target.value)}
                            />
                        </label>
                        {msgMail && <div className="form__error--reg">{msgMail}</div>}
                    </div>
                    <div className="form__box--reg">
                        <label className="form__label--reg">
                            Hasło
                            <input
                                type="password"
                                className={`login__input--reg form__input--password ${msgPass ? "error" : ""}`}
                                value={passValue}
                                onChange={(e) => setPassValue(e.target.value)}
                            />
                        </label>
                        {msgPass && <div className="form__error--reg">{msgPass}</div>}
                    </div>
                    <div className="form__box--reg">
                        <label className="form__label--reg">
                            Powtórz hasło
                            <input
                                type="password"
                                className={`login__input--reg form__input--password ${msgPassRep ? "error" : ""}`}
                                value={passValueRep}
                                onChange={(e) => setPassValueRep(e.target.value)}
                            />
                        </label>
                        {msgPassRep && <div className="form__error--reg">{msgPassRep}</div>}
                    </div>
                </div>
                <div className="form__btns--reg">
                    <Link className="form__btn--reg form__btn--reg--login--reg" to="/logowanie">Zaloguj się</Link>
                    <button type="submit" className="form__btn--reg form__btn--reg--new--reg">
                        Załóż konto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
