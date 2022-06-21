import React, { useState } from 'react';
import Modal from '../Modal';

const ImgData = ({ category }) => {

    const [imgs] = useState([
        {
            name: 'Allegory of Knowledge and the Visual Arts Crowning Parthenope, the Siren of Naples',
            artist: 'Paolo de Matteis',
            category: 'Sarah Campbell Blaffer Foundation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Immaculate Conception',
            artist: 'Juan Carreño de Miranda',
            category: 'Rienzi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Adoration of the Shepherds',
            artist: 'Francesco Fontebasso',
            category: 'Arts of Europe and the Mediterranean',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Christ and the Woman of Samaria',
            artist: 'Marcantonio Franceschini',
            category: 'Arts of Europe and the Mediterranean',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Death of St. Clare',
            artist: 'Bartolomé Estebán Murillo',
            category: 'Rienzi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'The Mocking of Christ',
            artist: 'Domenico Tintoretto',
            category: 'Sarah Campbell Blaffer Foundation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }
    ]);

    const [currentImg, setCurrentImg] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentImgs = imgs.filter((img) => img.category === category);

    const toggleModal = (image, i) => {
        setCurrentImg({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen && <Modal currentImg={currentImg} onClose={toggleModal} />}
            <div className="flex-row">
                {currentImgs.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                        onClick={() => toggleModal(image, i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImgData;