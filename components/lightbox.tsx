import x from '../public/assets/icons/x-symbol.svg';
import Image from 'next/image';

interface ILightBox {
    closeBox: () => void;
    children?: React.ReactNode;
}

export const LightBox: React.FC<ILightBox> = ({ closeBox, children }) => {
    return (
        <>
            <div
                className="fixed top-0 left-0 bottom-0 right-0 z-50 m-auto bg-black opacity-80"
                onClick={closeBox}
            />
            <div className="fixed top-0 left-0 bottom-0 right-0 z-50 m-auto w-4/5 h-4/5">
                <div
                    className="fixed top-6 right-6 z-[999] cursor-pointer"
                    onClick={closeBox}
                >
                    <Image src={x} alt="x" />
                </div>
                <>{children}</>
            </div>
        </>
    );
};
