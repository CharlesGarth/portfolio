import Image from 'next/image';
import { Statement } from './statement';
import me from '../public/assets/images/me-bnw-right.jpg';
import { useRouter } from 'next/router';
import { Button } from './button';

export const Hero: React.FC = () => {
    const router = useRouter();
    const quoteClick = () => {
        router.push('#contact', undefined, { scroll: false });
    };

    return (
        <div className="container sm:my-5 md:my-20 mx-auto px-2 sm:px-4 md:px-12 lg:px-gutters">
            <div className="flex flex-1 flex-col-reverse md:flex-row items-center md:items-start lg:pl-20">
                <div className="w-48 h-fit md:h-40">
                    <Image
                        src={me}
                        alt="a picture of me"
                        className="rounded-full"
                    />
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-body sm:px-5 md:px-20 h-44 sm:h-56 md:h-48 lg:h-40">
                    <span className="inline-block lg:w-3/4">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                            Hello there!
                        </span>{' '}
                        Welcome to my portfolio, my name&apos;s Charles Garth
                        and I&apos;m a full stack freelance contract software
                        developer.
                    </span>
                    <Statement />
                </div>
            </div>
            <Button
                text="🎉 Say hello!"
                onClick={quoteClick}
                className="px-2 md:px-5 lg:px-10 py-3 md:py-3 lg:py-6 lg:text-4xl font-cursive font-bold text-black from-yellow-300 to-orange-300 hover:from-yellow-200 hover:to-orange-200 hover:scale-105 transition-all"
            />
        </div>
    );
};
