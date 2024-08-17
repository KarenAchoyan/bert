import React from 'react';
import styles from '@/styles/header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>

          <div className={styles.title}>
            <ul>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Customes</li>
            </ul>
          </div>
          <div className={styles.middleTitle}>

          </div>
          <div className={styles.title}>
            <ul>
              <li>Performance</li>
              <li>News</li>
              <li>Archive</li>
            </ul>
          </div>


        </div>
      </div>
    </>
  );
};

export default Header;