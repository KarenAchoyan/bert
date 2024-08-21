import React from 'react';
import {Image} from "antd";
import styles from '@/styles/gallery.module.css'

const Item = () => {
    return (
        <div className={styles.image}>
            <Image src="gallery1.png" alt=""/>
        </div>
    );
};

export default Item;