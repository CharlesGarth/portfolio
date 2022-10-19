import type { NextPage } from 'next';
import {
    Hero,
    Footer,
    Header,
    About,
    Contact,
    Projects,
    Meta,
    Toggle,
} from '../components';

const Home: NextPage = () => (
    <>
        <Toggle />
        <Meta />
        <Header header="Charles Garth" currentSection={0} />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
    </>
);

export default Home;
