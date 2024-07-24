import React from "react";
import "../scss/ThreeColumns.scss";

const ThreeColumns = () => {
    return (
        <section className="columns">
            <div className="box">
                <p className="box__number"> 100</p>
                <p className="box__title">oddanych worków</p>
                <p className="box__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                    enim a elit viverra elementuma. Aliquam erat voluptat
                </p>
            </div>
            <div className="box">
                <p className="box__number"> 30</p>
                <p className="box__title">wspartych organizacji</p>
                <p className="box__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                    enim a elit viverra elementuma. Aliquam erat voluptat
                </p>
            </div>
            <div className="box">
                <p className="box__number">90</p>
                <p className="box__title">zorganizowanych zbiórek</p>
                <p className='box__description'>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                    enim a elit viverra elementuma. Aliquam erat voluptat
                </p>
            </div>
        </section>
    );
}

export default ThreeColumns;