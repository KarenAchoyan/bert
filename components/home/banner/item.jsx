import React from 'react';
import styles from "../../../styles/banner.module.css";
import Image from "next/image";

const Item = ({item}) => {
    return (
        <div className={styles.main}>
            <div className={styles.image}>
                <Image width={1500} height={1000} src={process.env.IMAGE_URL2+item.image} alt=""/>
            </div>
            {item.title!=='undefined' && item.content!=='undefined' ?
                <div className={styles.imageContent}>
                    <h1><b>{item.title}</b></h1>
                    <span>{item.content}</span>
                </div>
                : null
            }
        </div>
    );
};

export default Item;