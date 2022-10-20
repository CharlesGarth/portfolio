import Head from 'next/head';

interface IMetaProps {
    title?: string;
    description?: string;
    keywords?: string;
}

// TODO decouple data

const defaults = {
    title: 'Charles Garth - Software Development Portfolio',
    desc: 'Looking for a contract software developer? Look no further than my cosy little portfolio of projects from my 10+ years of programming experience!',
    keywords:
        'charles, garth, software, developer, engineer, contract, freelance, react, next, javascript, typescript, java, c#, programmer, programming, web, development, design, creative, build, platform, eccommerce, website, websites',
};

export const Meta: React.FC<IMetaProps> = ({
    title = defaults.title,
    description = defaults.desc,
    keywords = defaults.keywords,
}) => (
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Charles Garth" />
        <meta name="copyright" content="Charles Garth" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:description" content={description} />
        <meta
            property="og:image"
            content={`${process.env.BASE_URL}/assets/images/cover.png`}
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@charlesgarth" key="twhandle" />
        <meta property="twitter:domain" content="charlesgarth.co.uk" />
        <meta property="twitter:url" content={`${process.env.BASE_URL}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
            property="twitter:image"
            content={`${process.env.BASE_URL}/assets/images/cover.png`}
        />
    </Head>
);
