import React from 'react';
import styles from '@/styles/gallery.module.css'
import {Image} from "antd";
import Item from "./item";

const Gallery = () => {
  return (
    <>
      <div className={styles.heading}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Gallery</h1>
          </div>
          <div className={styles.imageContent}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;