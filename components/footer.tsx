export const Footer: React.FC = () => {
    enum LinkColour {
        Gradient,
        Blue,
    }

    const sharedStyle =
        'cursor-pointer sm:text-lg md:text-xl lg:text-2xl font-body';
    const gradientStyle =
        'text-transparent bg-clip-text bg-gradient-to-tl from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600';
    const linkStyle = 'text-blue-500 hover:text-blue-600';

    const items = [
        {
            link: 'mailto: contact@charlesgarth.co.uk',
            text: 'Email: contact@charlesgarth.co.uk',
            colour: LinkColour.Gradient,
        },
        {
            link: 'https://github.com/CharlesGarth',
            text: 'Github',
            colour: LinkColour.Blue,
        },
        {
            link: 'https://www.linkedin.com/in/charles-garth/',
            text: 'LinkedIn',
            colour: LinkColour.Blue,
        },
    ];

    return (
        <footer>
            <div className="container my-5 md:my-20 mx-auto pb-10 md:pb-0 px-4 md:px-12 lg:px-gutters">
                <div className="flex flex-auto flex-col md:flex-row justify-center gap-6">
                    {items.map((item, i) => (
                        <a
                            key={`footer_${i}_${item.link}`}
                            href={item.link}
                            className={`${sharedStyle} ${
                                item.colour == LinkColour.Gradient
                                    ? gradientStyle
                                    : linkStyle
                            }`}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
