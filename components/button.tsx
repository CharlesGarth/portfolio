import { MouseEvent } from 'react';

interface IButtonProps {
    text: string;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    className?: string;
}

export const Button: React.FC<IButtonProps> = ({
    text,
    onClick,
    className,
}) => {
    return (
        <div
            onClick={onClick}
            className={`my-4 mx-auto w-fit sm:text-sm md:text-xl lg:text-2xl cursor-pointer font-body px-10 py-5 font-medium tracking-wide text-white bg-gradient-to-tl from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400 rounded-full ${className}`}
        >
            <button>{text}</button>
        </div>
    );
};
