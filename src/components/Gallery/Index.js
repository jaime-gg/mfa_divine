import React from "react";
import Filters from "../Filters";
import ImgData from "../ImgData";

import './style.css';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'

const Gallery = (props) => {

    const { currentCategory } = props;

    return (
        <section className="wrapper row gallery">

            <Filters />

            <div class="section-title"> 
                <h2 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h2>
                <p>{currentCategory.description}</p>
            </div>

            <ImgData category={currentCategory.name} />
        </section>
    );
};


export default Gallery;