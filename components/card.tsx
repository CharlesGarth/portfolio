import React, { useEffect, useRef } from 'react';

interface ICardProps {
    id: string;
    title: string;
    centered?: boolean;
    children?: React.ReactNode;
    onEnter?: () => void;
}

export const Card: React.FC<ICardProps> = ({
    id,
    title,
    centered,
    children,
    onEnter,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const vh = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
        );
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && onEnter && onEnter(),
            { rootMargin: `0px 0px -${vh / 2}px 0px` }
        );
        observer.observe(ref.current as Element);
        return () => {
            observer.disconnect();
        };
    }, [onEnter]);

    return (
        <div className="container my-2 sm:my-5 md:my-10 lg:my-20 mx-auto px-2 sm:px-4 md:px-12 lg:px-gutters">
            <h2
                id={id}
                className={`${
                    centered && 'mx-auto'
                } text-xl md:text-2xl lg:text-5xl w-fit h-14 font-body font-bold tracking-wide underline underline-offset-[20px] overflow-visible scroll-mt-44 sm:scroll-mt-36 md:scroll-mt-40`}
            >
                {title}
            </h2>
            <div ref={ref} />
            <div className="my-2 py-1 md:py-5 lg:py-10 px-1 md:px-5 lg:px-20 h-fit w-full rounded-lg">
                {children}
            </div>
        </div>
    );
};
