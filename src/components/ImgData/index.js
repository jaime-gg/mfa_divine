import React, { useState } from 'react';
import Modal from '../Modal';

const ImgData = ({ category }) => {

   

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