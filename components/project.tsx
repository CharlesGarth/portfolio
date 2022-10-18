import Image, { StaticImageData } from 'next/image';

export interface IProject {
    title: string;
    link?: string;
    body: string;
    tags: string[];
    mainImage:
        | string
        | {
              default: StaticImageData;
          }
        | StaticImageData;
    images: string[];
}

const colors = [
    '#FCA5A5',
    '#F9A8D4',
    '#C4B5FD',
    '#BAE6FD',
    '#93C5FD',
    '#A5B4FC',
];

export const ProjectCard: React.FC<IProject> = ({
    title,
    link,
    body,
    tags,
    mainImage,
    images,
}) => (
    <div className="sm:py-1 md:py-2 lg:py-10 mx-auto w-full">
        <h3 className="my-2 sm:text-xl md:text-2xl lg:text-3xl font-body font-light tracking-widest text-center">
            {title}
            {link && ' - '}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                >
                    {link.split('https://')[1]}
                </a>
            )}
        </h3>
        <p className="my-2 sm:text-base md:text-xl lg:text-2xl font-body font-light text-center">
            {body}
        </p>
        <div className="my-5 flex justify-center">
            {tags.map((tag, i) => (
                <span
                    key={`project_${i}_${tag}`}
                    style={{ backgroundColor: colors[i] }}
                    className={`sm:mx-1 lg:mx-5 sm:px-1 md:px-5 sm:text-sm md:text-sm lg:text-2xl font-body rounded text-center`}
                >
                    {tag}
                </span>
            ))}
        </div>
        <div className="my-10 grid overflow-hidden grid-cols-3 grid-rows-2 sm:gap-10 lg:gap-20">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="row-span-2 col-span-2 w-full h-auto relative hover:opacity-95"
            >
                <Image
                    src={mainImage}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </a>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="col-start-3 col-span-2 w-full h-48 relative hover:opacity-95"
            >
                <Image
                    src={images[0] || mainImage}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </a>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="col-start-3 col-span-2 w-full h-48 relative hover:opacity-95"
            >
                <Image
                    src={images[1] || mainImage}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </a>
        </div>
    </div>
);
