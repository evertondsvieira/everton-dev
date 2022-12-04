import { FiMenu } from "react-icons/fi";

export interface IOpenMenu{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({isOpen, setIsOpen}:IOpenMenu) => {
    return(
        <header className="flex items-center justify-between mx-8 my-5">
            <h1 className="text-2xl text-slate-100">Everton Dev</h1>
            <FiMenu size={25} className="text-slate-100 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        </header>
    )
};

export default Header;
