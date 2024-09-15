import React from 'react';
import styles from '../../../styles/performance.module.css'

const Modal = ({openModal,videoStarted, video}) => {
    const modalStyles = {
        transform:" translate(-50%, -50%) scale(1)"
    }
    return (
        <>
            <div className={styles.back} onClick={openModal}>

            </div>
            <div className={styles.modal} style={modalStyles}>
                {videoStarted && (
                    <iframe
                        width="560"
                        height="315"
                        src={video}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        style={{ border: 'none' }}
                    />
                )}
            </div>
        </>
    );
};

export default Modal;