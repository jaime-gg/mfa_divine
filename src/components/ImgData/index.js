import React, { useState } from 'react';
import Modal from '../Modal';

const ImgData = ({ category }) => {

    const [imgs] = useState([
        {
            name: '',
            category: '',
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