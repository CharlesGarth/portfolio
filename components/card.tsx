interface ICardProps {
    id: string;
    title: string;
    centered?: boolean;
    children?: React.ReactNode;
}

export const Card: React.FC<ICardProps> = ({
    id,
    title,
    centered,
    children,
}) => (
    <div className="container sm:my-5 md:my-10 lg:my-20 mx-auto sm:px-4 md:px-12 lg:px-gutters">
        <h2
            id={id}
            className={`${
                centered && 'mx-auto'
            } sm:text-xl md:text-2xl lg:text-5xl w-fit h-14 font-body font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 overflow-visible scroll-mt-32`}
        >
            {title}
        </h2>
        <div className="my-2 sm:py-1 md:py-5 lg:py-10 sm:px-1 md:px-5 lg:px-20 h-fit w-full rounded-lg">
            {children}
        </div>
    </div>
);
