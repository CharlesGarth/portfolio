import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, MouseEvent } from 'react';
import { Button } from './button';
import { LightBox } from './lightbox';

export interface IProject {
    title: string;
    link?: string;
    body: string;
    tags: string[];
    mainImage: string;
    images: string[];
    markdown?: string;
}

interface IProjectImage {
    title: string;
    image: string;
    onClick: (e: MouseEvent) => void;
    main?: boolean;
}

const colors = [
    '#FCA5A5',
    '#F9A8D4',
    '#C4B5FD',
    '#BAE6FD',
    '#93C5FD',
    '#A5B4FC',
];

const ProjectImage: React.FC<IProjectImage> = ({
    title,
    image,
    onClick,
    main,
}) => {
    const sharedStyle = 'col-span-2 w-full relative hover:opacity-95';
    const mainImageStyle = 'row-span-2 h-auto';
    const smallImageStyle = 'col-start-3 h-48';

    return (
        <button
            onClick={onClick}
            className={`${sharedStyle} ${
                main ? mainImageStyle : smallImageStyle
            }`}
        >
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </button>
    );
};

const getDynamicComponent = (filename: string) =>
    dynamic(() => import(`content/projects/${filename}.md`), {
        ssr: false,
        loading: () => <p>Loading...</p>,
    });

export const ProjectCard: React.FC<IProject> = ({
    title,
    link,
    body,
    tags,
    mainImage,
    images,
    markdown,
}) => {
    const [selectedImage, setSelectedImage] = useState<string>();
    const [readMore, setReadMore] = useState<boolean>();

    const MarkdownComponent = markdown ? getDynamicComponent(markdown) : null;

    return (
        <div className="sm:py-1 md:py-2 lg:py-10 mx-auto w-full">
            <h3 className="my-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-body font-light tracking-widest text-center overflow-clip text-clip">
                {title}
                {link && ' - '}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:text-blue-600"
                    >
                        {link.split('https://')[1]}
                    </a>
                )}
            </h3>
            <p className="my-2 text-base md:text-xl lg:text-2xl font-body font-light text-center">
                {body}
            </p>
            <div className="my-5 flex flex-wrap md:flex-nowrap justify-center gap-1">
                {tags.map((tag, i) => (
                    <span
                        key={`project_${i}_${tag}`}
                        style={{ backgroundColor: colors[i] }}
                        className={`mx-1 lg:mx-5 px-1 md:px-5 text-sm md:text-sm lg:text-2xl font-body rounded-lg text-center dark:text-black`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="my-10 grid overflow-hidden grid-cols-3 grid-rows-2 gap-1 sm:gap-10 lg:gap-20">
                <ProjectImage
                    title={title}
                    image={mainImage}
                    onClick={(e: MouseEvent) => {
                        e.preventDefault();
                        setSelectedImage(mainImage);
                    }}
                    main
                />
                <ProjectImage
                    title={title}
                    image={images[0] || mainImage}
                    onClick={(e: MouseEvent) => {
                        e.preventDefault();
                        setSelectedImage(images[0] || mainImage);
                    }}
                />
                <ProjectImage
                    title={title}
                    image={images[1] || mainImage}
                    onClick={(e: MouseEvent) => {
                        e.preventDefault();
                        setSelectedImage(images[1] || mainImage);
                    }}
                />
            </div>
            {selectedImage && (
                <LightBox
                    closeBox={() => {
                        setSelectedImage(undefined);
                    }}
                >
                    <Image
                        src={selectedImage}
                        alt={title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </LightBox>
            )}
            {markdown && MarkdownComponent && (
                <>
                    {readMore && (
                        <div className="prose mx-auto pt-2 dark:prose-p:text-white dark:prose-headings:text-white dark:prose-strong:text-white">
                            <h2 className="text-center">Project Info</h2>
                            <MarkdownComponent />
                        </div>
                    )}
                    <Button
                        text={readMore ? 'Close' : 'Read More'}
                        onClick={() => setReadMore(!readMore)}
                    />
                </>
            )}
        </div>
    );
};
