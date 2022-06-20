import React from "react";
import Filters from "../Filters";

import './style.css';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'

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
                            <button href={img1} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Zoom In"><i class="bx bx-plus"></i></button>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>

                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">&times;</span>
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src={img2} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <button href={img2} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Zoom In"><i class="bx bx-plus"></i></button>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>

                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">&times;</span>
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={img3} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <button href="{img3}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Zoom In"><i class="bx bx-plus"></i></button>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>

                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">&times;</span>
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-wrap">
                        <img src={img4} class="g-img vc" alt="" />
                        <div class="portfolio-links">
                            <button href="{img4}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Zoom In"><i class="bx bx-plus"></i></button>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>

                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">&times;</span>
                                    <img src={img4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                        <img src={img5} class=" l-img" alt="" />
                        <div class="portfolio-links">
                            <button href="{img5}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Zoom In"><i class="bx bx-plus"></i></button>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>

                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">&times;</span>
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                        <img src={img6} class="g-img" alt="" />
                        <div class="portfolio-links">
                            <button href="{img6}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Zoom In"><i class="bx bx-plus"></i></button>
                            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>

                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">&times;</span>
                                    <img src={img6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Gallery;