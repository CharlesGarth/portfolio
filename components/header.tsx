import Link from 'next/link';

interface IHeaderProps {
    header: string;
    currentSection: string;
}

export const Header: React.FC<IHeaderProps> = ({
    header,
    currentSection = 'projects',
}) => {
    const linkStyles =
        'sm:text-sm md:text-xl lg:text-2xl cursor-pointer font-body';
    const selectedStyles =
        'px-10 py-5 font-medium tracking-wide text-white bg-gradient-to-tl from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400 rounded-full';
    const unselectedStyles =
        'px-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-blue-400 dark:text-white dark:hover:text-transparent dark:hover:from-red-400 dark:hover:to-blue-400';

    const sections = [
        {
            id: 'projects',
            text: 'Projects',
            href: '#projects',
        },
        {
            id: 'about',
            text: 'About',
            href: '#about',
        },
        {
            id: 'contact',
            text: 'Contact',
            href: '#contact',
        },
    ];

    return (
        <div className="sm:px-4 md:px-12 lg:px-gutters py-4 md:py-10 flex flex-col sm:flex-row flex-grow content-center items-center gap-2 md:gap-6 sticky top-0 bg-white dark:bg-darkness z-10">
            <h1 className="grow text-2xl md:text-4xl lg:text-6xl font-body font-bold tracking-widest">
                <Link href="/">{header}</Link>.
            </h1>
            {sections.map(({ id, text, href }, i) => (
                <span
                    key={`header_${i}_${href}`}
                    className={`${linkStyles} ${
                        currentSection == id ? selectedStyles : unselectedStyles
                    }`}
                >
                    <Link href={href} scroll={false}>
                        {text}
                    </Link>
                </span>
            ))}
        </div>
    );
};
