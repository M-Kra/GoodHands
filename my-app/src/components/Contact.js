import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import "../scss/Contact.scss";

const Contact = () => {
    const [nameValue, setNameValue] = useState("");
    const [mailValue, setMailValue] = useState("");
    const [textValue, setTextValue] = useState("");

    const [wrongMail, setWrongMail] = useState(false);
    const [wrongName, setWrongName] = useState(false);
    const [wrongText, setWrongText] = useState(false);

    const [isSend, setIsSend] = useState(false);

    const handleClick = event => {
        event.preventDefault();

        const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let isValid = true;

        if (!mailValue || !validEmailRegex.test(mailValue)) {
            setWrongMail(true);
            isValid = false;
        } else {
            setWrongMail(false);
        }

        if (!nameValue || nameValue.trim().length < 2) {
            setWrongName(true);
            isValid = false;
        } else {
            setWrongName(false);
        }

        if (textValue.length < 120) {
            setWrongText(true);
            isValid = false;
        } else {
            setWrongText(false);
        }

        if (isValid) {
            const apiUrl = "https://fer-api.coderslab.pl/v1/portfolio/contact";
            const message = {
                name: nameValue,
                email: mailValue,
                message: textValue
            };

            fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "error") {
                        setIsSend(false);
                    } else if (data.status === "success") {
                        setIsSend(true);
                        setNameValue("");
                        setMailValue("");
                        setTextValue("");
                    }
                })
                .catch(err => {
                    console.log(err);
                    setIsSend(false);
                });
        }
    };

    return (
        <section className="contact">
            <div className="contact__info" id="contact">
                <div className="contact__info--form">
                    <h2 className="form__header"> Skontakuj się z nami</h2>
                    <div className="form__decoration">
                        <img className="decoration__img" src={decoration} alt="decoration" />
                    </div>
                    {isSend && <div className="form__success">
                        Wiadomość została wysłana <br />Wkrótce się skontaktujemy.
                    </div>}

                    <form className="form">
                        <div className="form__input">
                            <div className="form__input--box">
                                <label className="form__input--label">Wpisz swoje imię
                                    <input className="form__input--name" placeholder="Marian" value={nameValue}
                                           onChange={(e) => setNameValue(e.target.value)} />
                                </label>
                                {wrongName && <div style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    marginTop: "15px"
                                }}>Podane imię jest nieprawidłowe!</div>}
                            </div>

                            <div className="form__input--box">
                                <label className="form__input--label">Wpisz swój mail
                                    <input className="form__input--mail" placeholder="sample@mail.com" value={mailValue}
                                           onChange={(e) => setMailValue(e.target.value)} />
                                </label>
                                {wrongMail &&
                                    <div style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    marginTop: "15px"
                                }}>Podany mail jest nieprawidłowy!</div>}
                            </div>
                        </div>

                        <div className="form__textarea--box">
                            <label className="form__textarea--label">Wpisz swoją wiadomość
                                <textarea className="form__textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                          value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                            </label>
                            {wrongText &&
                                <div style={{
                                color: "red",
                                fontSize: "12px",
                                fontWeight: "700",
                                marginTop: "15px"
                            }}>Wiadomość musi mieć conajmniej 120 znaków!</div>}
                        </div>
                        <button className="form__send" onClick={handleClick}>Wyślij</button>
                    </form>
                </div>
            </div>
            <footer className="contact__footer">
                <div className="footer__space"></div>
                <div className="footer__copywright">Copyright by Coders Lab</div>
                <ul className="footer__list">
                    <li className="footer__list--logo">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img className="logo-img" src={facebook} alt="Facebook" />
                        </a>
                    </li>
                    <li className="footer__list--logo">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img className="logo-img" src={instagram} alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </footer>
        </section>
    );
}

export default Contact;
