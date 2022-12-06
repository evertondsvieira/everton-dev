import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom"
import { IOpenMenu } from "../Header";


const NavBar = ({setIsOpen}:IOpenMenu) => {
    return(
        <div className="w-[290px] h-screen flex items-center justify-center text-xl relative">
            <div className="flex-col space-y-6">
                <div className="w-70 h-full text-slate-100 absolute cursor-pointer top-2.5 right-1.5" onClick={() => setIsOpen(false)}><AiOutlineClose size={25}/></div>
                <ul className="w-54 flex gap-12 flex-col text-slate-100 ">
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <AiFillHome />
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <BsPersonFill />
                        <li><Link to="about">About</Link></li>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <FaGraduationCap />
                        <li><Link to="education">Education</Link></li>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <MdWork />
                        <li><Link to="projects">Portfolio</Link></li>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <IoChatbubblesSharp />
                        <li><Link to="contact">Contact</Link></li>
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