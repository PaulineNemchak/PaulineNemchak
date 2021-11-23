import { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

const cv: NextPage = () => {
    return(
        <Layout title='my cv'>
            <Container>
                <h1>my cv</h1>
            </Container>
        </Layout>
    )
};

export default cv;
