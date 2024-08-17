import React from 'react';
import styles from '@/styles/performance.module.css'

const Performance = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Performance</h1>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.secondImage}>
              <img src="performance1.png" alt=""/>
            </div>
            <div className={styles.secondImage}>
              <img src="performance2.png" alt=""/>
            </div>
            <div className={styles.secondImage}>
              <img src="performance2.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;