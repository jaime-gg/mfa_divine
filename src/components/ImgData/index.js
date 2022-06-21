import React, { useState } from 'react';
import Modal from '../Modal';

const ImgData = ({ category }) => {

    const [imgs] = useState([
        {
            name: 'Allegory of Knowledge and the Visual Arts Crowning Parthenope, the Siren of Naples',
            artist: 'Paolo de Matteis',
            category: ['all', 'Sarah Campbell Blaffer Foundation'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Immaculate Conception',
            artist: 'Juan Carreño de Miranda',
            category: ['all', 'Rienzi'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Adoration of the Shepherds',
            artist: 'Francesco Fontebasso',
            category: ['all', 'Arts of Europe and the Mediterranean'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Christ and the Woman of Samaria',
            artist: 'Marcantonio Franceschini',
            category: ['all', 'Arts of Europe and the Mediterranean'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Death of St. Clare',
            artist: 'Bartolomé Estebán Murillo',
            category: ['all', 'Rienzi'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Mocking of Christ',
            artist: 'Domenico Tintoretto',
            category: ['all', 'Sarah Campbell Blaffer Foundation'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }
    ]);

    const [currentImg, setCurrentImg] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentImgs = imgs.filter((img) => img.category === category);

    const toggleModal = (image, i) => {
        setCurrentImg({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen && <Modal currentImg={currentImg} onClose={toggleModal} />}
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    {currentImgs.map((image, i) => (
                        <img
                            src={require(`../../assets/${category}/${i}.jpg`)}
                            alt={image.name}
                            className="g-img"
                            key={image.name}

                        />
                    ))}
                    {currentImgs.map((image, i) => (
                        <button onClick={() => toggleModal(image, i)} data-gallery="portfolioGallery" class="portfolio-lightbox" title="More Details"><i class="bx bx-plus"></i></button>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ImgData;