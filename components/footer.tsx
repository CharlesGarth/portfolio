export const Footer: React.FC = () => {
    enum LinkColour {
        Gradient,
        Blue,
    }

    const sharedStyle =
        'cursor-pointer sm:text-lg md:text-xl lg:text-2xl font-body';
    const gradientStyle =
        'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400';
    const linkStyle = 'text-blue-500 hover:text-blue-400';

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
            <div className="container sm:my-5 md:my-20 mx-auto sm:px-4 md:px-12 lg:px-gutters">
                <div className="flex flex-auto justify-center gap-6">
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