import type { NextPage } from 'next';
import {
    Hero,
    Footer,
    Header,
    About,
    Contact,
    Projects,
} from '../components';
import projects from '../content/projects.json';

const Home: NextPage = () => (
        <>
        <Header header="Charles Garth" currentSection={0} />
        <Hero />
        <Projects projects={projects} />
        <About />
        <Contact />
            <Footer />
        </>
    );
};

export default Home;
