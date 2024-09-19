import React from 'react';
import styles from "../../../styles/banner.module.css";
import Image from "next/image";

const Item = ({item}) => {
    return (
        <div className={styles.main}>
            <div className={styles.media}>
                <video width={1500} height={1000} autoPlay loop muted controls={false}>
                    <source src={'berd_banner.mp4'} type="video/mp4"/>
                </video>

            </div>
            {item.title !== 'undefined' && item.content !== 'undefined' ?
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