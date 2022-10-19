import { useEffect, useState } from 'react';

export const Statement: React.FC = () => {
    let modifiers = [
        'Distributed',
        'Cloud Based',
        'High Quality',
        'Awesome',
        'Scalable',
        'Speedy',
        'Optimised',
        'Responsive',
        'Secure',
    ];
    let products = [
        'Websites',
        'E-commerce Platforms',
        'Dashboards',
        'Visualisations',
        'Scripts',
        'Applications',
        // 'Mobile Apps',
        'APIs',
        'Code',
        'Systems',
    ];

    const [modifier, setModifier] = useState(0);
    const [product, setProduct] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            let random = (max: number) => Math.floor(Math.random() * max);
            let freshNumber = (
                next: number,
                prev: number,
                max: number
            ): number => {
                if (next != prev) {
                    return next;
                }

                return freshNumber(random(max), prev, max);
            };

            setModifier((prev) =>
                freshNumber(random(modifiers.length), prev, modifiers.length)
            );

            setProduct((prev) =>
                freshNumber(random(products.length), prev, products.length)
            );
        }, 2000);
        return () => clearInterval(interval);
    }, [modifiers.length, products.length]);

    return (
        <div className="container my-8 mx-auto flex align-middle">
            <span className="font-body text-sm sm:text-base md:text-1xl lg:text-3xl">
                I build{' '}
                <span className="text-base sm:text-lg md:text-2xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
                    {modifiers[modifier]} {products[product]}
                </span>
                .
            </span>
        </div>
    );
};
