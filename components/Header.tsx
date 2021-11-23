import { Nav } from "./Nav";
import { Container } from "./Container";
import { FC } from "react";
import styles from '../styles/Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Nav />
            </Container>
        </header>
    )
};

export { Header }
