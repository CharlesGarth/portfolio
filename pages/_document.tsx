import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="dark:bg-darkness dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
