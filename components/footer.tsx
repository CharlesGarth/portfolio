export const Footer: React.FC = () => (
    <>
        <footer>
            <div className="container my-20 mx-auto px-5">
                <div className="flex flex-auto gap-6">
                    <a className="cursor-pointer font-body text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400">
                        Contact
                    </a>
                    <a className="cursor-pointer font-body text-blue-500 hover:text-blue-400">
                        Github
                    </a>
                    <a className="cursor-pointer font-body text-blue-500 hover:text-blue-400">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    </>
);
