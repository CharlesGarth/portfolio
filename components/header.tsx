import Link from 'next/link';

interface IHeaderProps {
    header: string;
    currentSection: number;
}

export const Header: React.FC<IHeaderProps> = ({
    header,
    currentSection = 0,
}) => {
    const linkStyles =
        'px-2 sm:text-sm md:text-xl lg:text-2xl cursor-pointer font-body';
    const selectedStyles =
        'text-white bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400 rounded';
    const unselectedStyles =
        'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-blue-400';

    const sections = [
        {
            text: 'Projects',
            href: '#projects',
        },
        {
            text: 'About',
            href: '#about',
        },
        {
            text: 'Contact',
            href: '#contact',
        },
    ];

    return (
        <div className="sm:px-4 md:px-12 lg:px-gutters my-2 flex flex-col sm:flex-row flex-grow content-center items-center gap-2 md:gap-6 sticky top-0 bg-white z-10">
            <h1 className="grow text-2xl md:text-4xl lg:text-6xl font-body font-thin tracking-widest">
                <Link href="/">{header}</Link>
            </h1>
            {sections.map(({ text, href }, i) => (
                <span
                    key={`header_${i}_${href}`}
                    className={`${linkStyles} ${
                        currentSection == i ? selectedStyles : unselectedStyles
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
