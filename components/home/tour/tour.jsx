import React from 'react';
import styles from '@/styles/tour.module.css'

const Tour = () => {
  return (
    <>
      <div className={styles.container}>
          <div className={styles.content}>
            <h1>WorldTour 2024-2025</h1>
          </div>
          <div className={styles.moreInfo}>
            <div className={styles.about}>
              <div className={styles.upSide}>
                <h2>ESTONIA</h2>
                <h3>2024</h3>
              </div>
              <div className={styles.downSide}>
                <span>October</span>
                <div className={styles.btn}>
                  <button>Buy Tickets</button>
                </div>
              </div>
            </div>
            <div className={styles.about}>
              <div className={styles.upSide}>
                <h2>ESTONIA</h2>
                <h3>2024</h3>
              </div>
              <div className={styles.downSide}>
                <span>October</span>
                <div className={styles.btn}>
                  <button>Buy Tickets</button>
                </div>
              </div>
            </div>
            <div className={styles.about}>
              <div className={styles.upSide}>
                <h2>ESTONIA</h2>
                <h3>2024</h3>
              </div>
              <div className={styles.downSide}>
                <span>October</span>
                <div className={styles.btn}>
                  <button>Buy Tickets</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Tour;