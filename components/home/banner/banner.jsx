import React from 'react';
import styles from '../../../styles/banner.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../ui/button/button";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
           <div className={styles.banner}>
               <Slider {...settings}>
                   <div className={styles.main}>
                       <div className={styles.image}>
                           <img src="main.png" alt=""/>
                       </div>
                       <div className={styles.imageContent}>
                           <h1><b>BERT</b> Dancing Ensemble</h1>
                           <span>Armenian dance ensemble that has been active since 1963</span>
                       </div>
                   </div>
                   <div className={styles.main}>
                       <div className={styles.image}>
                           <img src="main.png" alt=""/>
                       </div>
                       <div className={styles.imageContent}>
                           <h1><b>BERT</b> Dancing Ensemble</h1>
                           <span>Armenian dance ensemble that has been active since 1963</span>
                           <Button>Կարդալ ավելին</Button>
                       </div>
                   </div>
               </Slider>
           </div>

        </>
    );
};

export default Banner;