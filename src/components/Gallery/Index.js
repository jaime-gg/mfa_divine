import React from "react";
import Filters from "../Filters";

import './style.css';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpeg'

const Gallery = () => {

    return (
        <section className="wrapper row gallery">
            <div class="section-title">
                <h2> A Preview of Our Collection </h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <Filters />

            <div class="row portfolio" data-aos="fade-up" data-aos-delay="100">

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={img1} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <a href={img1} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src={img2} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <a href={img2} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={img3} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <a href="{img3}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-wrap">
                        <img src={img4} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <a href="{img4}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src={img5} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <a href="{img5}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={img6} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <a href="{img6}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Gallery;