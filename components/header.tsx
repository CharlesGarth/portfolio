let unselectedStyle =
    'px-2 text-2xl cursor-pointer font-body bg-gradient-to-r hover:from-red-400 hover:to-blue-400 hover:text-black rounded';
let selectedStyle =
    'px-2 text-2xl cursor-pointer font-body text-white bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400 hover:text-black rounded';

export const Header: React.FC = () => (
    <div className="px-gutters my-2 flex flex-grow content-center items-center gap-6">
        <h1 className="grow text-8xl font-body font-thin tracking-widest">
            Charles Garth
        </h1>
        <a className={selectedStyle}>About</a>
        <a className={unselectedStyle}>Projects</a>
        <a className={unselectedStyle}>Contact</a>
    </div>
);
