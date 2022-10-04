import type { NextPage } from 'next';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default Home;
