import React from 'react';
import styles from '@/styles/banner.module.css'

const Banner = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.image}>
          <img src="main.png" alt=""/>
        </div>
        <div className={styles.imageContent}>
          <h1><b>BERT</b> Dancing Ensemble</h1>
          <span>Armenian dance ensemble that has been active since 1963</span>
        </div>
      </div>
    </>
  );
};

export default Banner;