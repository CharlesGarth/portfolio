import { Button } from './button';
import { Card } from './card';
import { IProject, ProjectCard } from './project';

interface IProjectsProps {
    projects: IProject[];
}

export const Projects: React.FC<IProjectsProps> = ({ projects }) => {
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
            <Button text="See more..." className="px-4 py-2 rounded-lg" />
        </Card>
    );
};
