import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Toggle: React.FC = () => {
    const [mounted, setMounted] = useState<boolean>();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const SUN = '☼';
    const MOON = '☽';
    return (
        <>
            <div
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="fixed bottom-4 bg-darkness dark:bg-white z-20 w-10 h-10 rounded-r-full cursor-pointer text-center"
            >
                <span className="inline-block p-[6px] select-none align-middle text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400">
                    {theme === 'dark' ? SUN : MOON}
                </span>
            </div>
        </>
    );
};
