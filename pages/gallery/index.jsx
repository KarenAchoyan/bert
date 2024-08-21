import React from 'react';
import App from "../../components/layout/app";
import PageBanner from "../../components/pageBanner/pageBanner";
import styles from "../../styles/gallery.module.css"
import Item from "../../components/gallery/item";
const Index = () => {
    return (
        <>
            <App>
                <PageBanner/>
                <div className={styles.content}>
                    <div className={styles.imageContent}>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </App>
        </>
    );
};

export default Index;