import React from "react";
import Filters from "../Filters";
import ImgData from "../ImgData";

import { capitalizeFirstLetter } from '../../utils/helpers';
import './style.css';

const Gallery = (props) => {

    const { currentCategory } = props;

    return (
        <section className="wrapper row gallery">

            <Filters />

            <div className="section-title"> 
                <h2 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h2>
                <p>{currentCategory.description}</p>
            </div>

            <ImgData category={currentCategory.name} />
        </section>
    );
};


export default Gallery;