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
            className={`my-4 mx-auto w-fit px-5 sm:text-sm md:text-xl lg:text-2xl cursor-pointer font-body text-white bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400 rounded ${className}`}
        >
            <button>{text}</button>
        </div>
    );
};
