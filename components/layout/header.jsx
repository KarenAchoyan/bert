import React from 'react';
import styles from '../../styles/header.module.css'
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={`header ${styles.header}`}>
        <div className={styles.content}>

          <div className={styles.title}>
            <ul>
              <li><a href="#">Մեր մասին</a>
                <div className={styles.drb}>
                    <div className={styles.drbContent}>
                      <ul>
                        <li>Կենսագրություն</li>
                        <li>Մրցանակներ</li>
                        <li>Հոդվածներ</li>
                        <li>Պատմություն</li>
                        <li>Կարծիքներ</li>
                      </ul>
                    </div>
                </div>
              </li>
              <li><Link href={'/gallery'}>Պատկերասրահ</Link></li>
              <li><a href="#">Ելույթներ</a>
                <div className={styles.drb}>
                  <div className={styles.drbContent}>
                    <ul>
                      <li>Ելույթներ Հայաստանում</li>
                      <li>Միջազգային ելույթներ</li>
                      <li><Link href={'/videos'}>Տեսանյութեր</Link></li>
                    </ul>
                  </div>
                </div></li>
            </ul>
          </div>
          <div className={styles.middleTitle}>

          </div>
          <div className={styles.title}>
            <ul>
              <li>Մեր տարազները</li>
              <li>Նորություններ</li>
              <li>Մեր արխիվը</li>
            </ul>
          </div>


        </div>
      </div>
    </>
  );
};

export default Header;