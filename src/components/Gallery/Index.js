import React from "react";
import ImgData from "../ImgData";

import { capitalizeFirstLetter } from '../../utils/helpers';
import './style.css';

const Gallery = (props) => {

    const { 
        categories = [],
        setCurrentCategory,
        currentCategory
     } = props;

    return (
        <section className="wrapper row gallery">

            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul className="flex-row">
                        {categories.map((category) => (
                            <li
                                className={`mx-1 ${currentCategory.name === category.name && `navActive`
                                    }`}
                                key={category.name}
                            >
                                <span
                                    onClick={() => {
                                        setCurrentCategory(category);
                                    }}
                                >
                                    {(category.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="section-title">
                <h2 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h2>
                <p>{currentCategory.description}</p>
            </div>

            <ImgData category={currentCategory.name} />
        </section>
    );
};


export default Gallery;