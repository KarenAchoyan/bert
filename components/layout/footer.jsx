import React from 'react';
import styles from '../../styles/footer.module.css'
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.info}>
            <ul>
              <li>Information</li>
              <li>About Us</li>
              <li>Biography</li>
              <li>Prizes</li>
              <li>Articles</li>
              <li>History</li>
              <li>Rewiews</li>
            </ul>
          </div>
          <div className={styles.info}>
            <ul>
              <li>Performance</li>
              <li>Performance in Armenia</li>
              <li>Internation Performance</li>
              <li>Videos</li>
            </ul>
          </div>
          <div className={styles.info}>
            <ul>
              <li>Blog</li>
              <li>News</li>
              <li>Performance</li>
            </ul>
          </div>
          <div className={styles.info}>
            <ul>
              <li>Contact us</li>
              <li>+37477474747</li>
              <li>bert@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;