import { Card } from './card';
import Image from 'next/image';
import AboutMarkdown from '../content/about.md';
import me from '../public/assets/images/me-bnw-left.jpg';
import { Section } from './section';

export const About: Section = ({ setSection }) => (
    <Card id="about" title="About Me" onEnter={() => setSection('about')}>
        <div className="my-1">
            <div className="flex flex-col-reverse md:flex-row md:justify-center lg:justify-start gap-2">
                <div className="prose prose-slate prose-a:text-blue-500 hover:prose-a:text-blue-400 md:prose-p:text-xs lg:prose-p:text-base md:prose-headings:text-xs lg:prose-headings:text-base dark:prose-p:text-white dark:prose-headings:text-white dark:prose-strong:text-white">
                    <AboutMarkdown />
                </div>
                <div className="sm:w-fit md:w-[133rem] lg:w-1/2 md:pl-10 lg:pl-20">
                    <Image
                        src={me}
                        alt="a picture of me in black and white"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    </Card>
);
