import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';

const blog: NextPage = () => {
    return(
        <Layout title='my blog'>
            <Container>
                <h1>my blog</h1>
                <main>
                    nothing here yet... because i&apos;m lazy
                </main>
            </Container>
        </Layout>
    );
};

export default blog;