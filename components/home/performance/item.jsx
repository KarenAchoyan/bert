import React, {useState} from 'react';
import styles from '../../../styles/performance.module.css'
import {PlayCircleOutlined} from "@ant-design/icons";
import Modal from "./modal";

const Item = ({openModal}) => {

    return (
        <>
            <div className={`${styles.secondImage}`}>
                <img src="performance1.png" alt=""/>
                <div className={styles.overline} onClick={openModal}>
                    <PlayCircleOutlined />
                </div>
            </div>
        </>

    );
};

export default Item;