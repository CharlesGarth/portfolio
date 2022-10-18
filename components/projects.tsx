import { useState } from 'react';
import { Button } from './button';
import { Card } from './card';
import { IProject, ProjectCard } from './project';
import projects from '../content/projects.json';
import moreProjects from '../content/moreProjects.json';

interface IListProject {
    title: string;
    link?: string;
    text?: string;
}

export const Projects: React.FC = () => {
    const [showMore, setShowMore] = useState<boolean>();

    return (
        <Card id="projects" title="Project Spotlight">
            {projects.map((proj: IProject, i) => (
                <ProjectCard
                    key={`projects_${i}_${proj.title}`}
                    title={proj.title}
                    link={proj.link}
                    body={proj.body}
                    tags={proj.tags}
                    mainImage={proj.mainImage}
                    images={proj.images}
                />
            ))}
            <Button
                text={showMore ? 'Show Less' : 'Show More'}
                onClick={() => setShowMore(!showMore)}
                className="px-4 py-2 rounded-lg"
            />
            {showMore && (
                <div className="prose mx-auto pt-2">
                    <h2 className="text-center">
                        Other Projects I&apos;ve Contributed To
                    </h2>
                    <ul className="md:columns-2">
                        {moreProjects.map((proj: IListProject, i) => (
                            <li key={`moreProjects_${i}_${proj.title}`}>
                                <div>
                                    <strong>{proj.title}</strong>
                                    <p className="overflow-clip text-ellipsis md:overflow-auto md:whitespace-normal">
                                        {proj.link ? (
                                            <a
                                                href={proj.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-500 hover:text-blue-400"
                                            >
                                                {proj.link}
                                            </a>
                                        ) : (
                                            proj.text
                                        )}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Card>
    );
};
