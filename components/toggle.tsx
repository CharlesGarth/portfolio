import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const Toggle: React.FC = () => {
    const [mounted, setMounted] = useState<boolean>();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const Sun = (
        <Image
            src="/assets/icons/sun.svg"
            width={35}
            height={39}
            alt="a sun icon"
        />
    );
    const Moon = (
        <Image
            src="/assets/icons/moon.svg"
            width={35}
            height={39}
            alt="a moon icon"
        />
    );
    return (
        <>
            <div
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="fixed bottom-4 bg-darkness dark:bg-white z-20 w-10 h-10 rounded-r-full cursor-pointer text-center"
            >
                <span className="select-none flex justify-center">
                    {theme === 'dark' ? Sun : Moon}
                </span>
            </div>
        </>
    );
};
