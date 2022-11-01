import { Card } from './card';
import { IProject, ProjectCard } from './project';
import projects from '../content/projects.json';
import moreProjects from '../content/moreProjects.json';
import { Section } from './section';
import Image from 'next/image';

interface IListProject {
    title: string;
    link?: string;
    text?: string;
    logo?: string;
}

export const Projects: Section = ({ setSection }) => {
    const ID = 'projects';

    return (
        <Card id={ID} title="Project Spotlight" onEnter={() => setSection(ID)}>
            {projects.map((proj: IProject, i) => (
                <ProjectCard
                    key={`${ID}_${i}_${proj.title}`}
                    title={proj.title}
                    link={proj.link}
                    body={proj.body}
                    tags={proj.tags}
                    mainImage={proj.mainImage}
                    images={proj.images}
                    markdown={proj.markdown}
                />
            ))}
            <div className="prose mx-auto pt-2 text-center dark:prose-p:text-white dark:prose-headings:text-white dark:prose-strong:text-white">
                <h2 className="text-center">
                    Other Projects I&apos;ve Contributed To
                </h2>
                <div className="flex flex-wrap overflow-hidden justify-center list-none">
                    {moreProjects.map((proj: IListProject, i) => (
                        <div
                            key={`moreProjects_${i}_${proj.title}`}
                            className="y-1 px-1 w-full overflow-hidden md:my-4 md:px-4 md:w-1/2"
                        >
                            <a
                                href={proj.link}
                                className="flex flex-col items-center gap-4 m-2 pt-5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 no-underline"
                            >
                                {proj.logo && (
                                    <Image
                                        src={proj.logo}
                                        width={100}
                                        height={100}
                                        alt={proj.title}
                                        objectFit="contain"
                                    />
                                )}
                                <div>
                                    <strong>{proj.title}</strong>
                                    <p className="overflow-clip text-ellipsis md:overflow-auto md:whitespace-normal">
                                        {proj.link ? (
                                            <span className="text-blue-500 hover:text-blue-400">
                                                {proj.link.split('https://')[1]}
                                            </span>
                                        ) : (
                                            proj.text
                                        )}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};
