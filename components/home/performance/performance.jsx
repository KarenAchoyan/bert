import React, {useState} from 'react';
import styles from '@/styles/performance.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./item";
import Modal from "./modal";

const Performance = () => {
    const [showModal, setShowModal] = useState(false)
    const [videoStarted, setVideoStarted] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    function openModal() {
        setShowModal(!showModal)
        setVideoStarted(!videoStarted);
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Ելույթներ</h1>
                    </div>
                    <div className={styles.imageContent}>
                        <Slider {...settings}>
                            <Item openModal={openModal}/>
                            <Item openModal={openModal}/>
                            <Item openModal={openModal}/>
                            <Item openModal={openModal}/>
                        </Slider>
                    </div>
                </div>
            </div>
            {showModal ? <Modal openModal={openModal} videoStarted={videoStarted}/> : null}

        </>
    );
};

export default Performance;