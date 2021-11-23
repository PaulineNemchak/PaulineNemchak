import { FC } from 'react';
import styles from '../styles/Container.module.css';

const Container: FC<{className?: string}> = ({ className, children }) => {
    const classes = className ? `${styles.container} ${className}` : styles.container;
    return (
        <div className={classes}>
            { children }
        </div>
    )
};

export { Container }
