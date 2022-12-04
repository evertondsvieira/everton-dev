import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IOpenMenu } from "../Header";
import { Link } from 'react-router-dom';

const NavBar = ({setIsOpen}:IOpenMenu) => {
    return(
        <div className="w-[290px] h-screen flex items-center justify-center text-xl relative">
            <div className="flex-col space-y-6">
                <div className="w-70 h-full text-slate-100 absolute cursor-pointer top-3 right-5" onClick={() => setIsOpen(false)}><AiOutlineClose size={25}/></div>
                <ul className="w-54 flex-col space-y-12 text-slate-100 ">
                    <li className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Education</li>
                    <li className="hover:text-blue-600 cursor-pointer">Projects</li>
                    <li className="hover:text-blue-600 cursor-pointer">Let's talk</li>
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