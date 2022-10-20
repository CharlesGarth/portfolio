import type { NextPage } from 'next';
import { useState } from 'react';
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

const Home: NextPage = () => {
    const [currentSection, setCurrentSection] = useState<string>('projects');

    return (
        <>
            <Toggle />
            <Meta />
            <Header header="Charles Garth" currentSection={currentSection} />
            <Hero />
            <Projects setSection={setCurrentSection} />
            <About setSection={setCurrentSection} />
            <Contact setSection={setCurrentSection} />
            <Footer />
        </>
    );
};

export default Home;
