import { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav: FC = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href='/'>home</Link>
                </li>
                <li>
                    <Link href='/cv'>cv</Link>
                </li>
                <li>
                    <Link href='/blog'>blog</Link>
                </li>
            </ul>
        </nav>
    )
};

export { Nav }
