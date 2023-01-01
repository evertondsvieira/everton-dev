import { FiMenu } from "react-icons/fi";

export interface IOpenMenu{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({isOpen, setIsOpen}:IOpenMenu) => {
    return(
        <header className="w-screen px-4 py-4 flex items-center justify-between fixed z-100 bg-zinc-900">
            <h1 className="text-2xl text-slate-100">Everton Dev</h1>
            <FiMenu size={25} className="text-slate-100 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        </header>
    )
};

export default Header;
