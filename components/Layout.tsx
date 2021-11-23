import { FC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { DefaultHead } from './DefaultHead';

const Layout: FC<{title: string}> = ({ title, children }) => {
    return (
        <>
            <DefaultHead title={title} />
            <div className='layout'>
                <Header />
                { children }
                <Footer />
            </div>
            <div className="noise" />
        </>
    );
}

export { Layout };
