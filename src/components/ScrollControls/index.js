import React from 'react';
import styles from './styles.module.css';

const ScrollControls = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.scrollControls}>
            <button
                className={styles.scrollBtn}
                onClick={scrollToTop}
                title="Go to Top"
                aria-label="Go to Top"
            >
                ⬆
            </button>
            <button
                className={styles.scrollBtn}
                onClick={scrollToBottom}
                title="Go to Bottom"
                aria-label="Go to Bottom"
            >
                ⬇
            </button>
        </div>
    );
};

export default ScrollControls;
