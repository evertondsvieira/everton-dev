import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-scroll"
import { IOpenMenu } from "../Header";


const NavBar = ({setIsOpen}:IOpenMenu) => {
    return(
        <div className="w-[320px] m-movel:min-w-[425px] h-screen flex items-center justify-center text-xl relative">
            <div className="flex-col space-y-6">
                <div className="w-70 h-full text-slate-100 absolute cursor-pointer top-2.5 right-1.5 laptop:right-20" onClick={() => setIsOpen(false)}><AiOutlineClose size={25}/></div>
                <ul className="w-54 flex gap-12 flex-col text-slate-100 ">
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                        <AiFillHome />
                        <li><Link to="/" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                        <BsPersonFill />
                        <li><Link to="about" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                        <FaGraduationCap />
                        <li><Link to="education" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsOpen(false)}>Education</Link></li>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                        <MdWork />
                        <li><Link to="projects" activeClass="active" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                    </div>
                    <li className="flex justify-center space-x-12 cursor-pointer">
                        <a href="https://github.com/evertondsvieira" target="blank" className="hover:text-blue-600 hover:scale-110 hover:delay-150"><AiOutlineGithub size={25}/></a>
                        <a href="https://www.linkedin.com/in/everton-da-silva-vieira/" target="blank" className="hover:text-blue-600 hover:scale-110 hover:delay-150"><AiFillLinkedin size={25}/></a>
                        <a href="http://instagram.com/evertuuuv" target="blank" className="hover:text-blue-600 hover:scale-110 hover:delay-150"><AiOutlineInstagram size={25}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;