import React from "react";
import "../scss/AboutUs.scss"
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.jpg";

const AboutUs = () => {
    return (
        <section className="about" id="about">
            <div className="about__leftSide">
                <h3 className="left__header">O nas</h3>
                <img className="left__decoration" src={decoration} alt="decoration"/>
                <article className="left__article">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek
                    lentil turnip greens parsnip.
                </article>
                <img className="left__signature" src={signature} alt="signature"/>
            </div>
            <div className="about__rightSide">
                <img className="right_img" src={people} alt="People"/>
            </div>
        </section>
    );
}

export default AboutUs;