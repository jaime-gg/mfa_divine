import React from 'react';
import './style.css';

function Modal({ onClose, currentPhoto}) {
    const {name, category, description, index} = currentPhoto;

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='ModalTitle'>{name}</h3>
                <img src={require(`../../assets/${index}.jpg`)} alt="current category" />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal; 