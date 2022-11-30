import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IOpenMenu } from "../Header"

const NavBar = ({setIsOpen}:IOpenMenu) => {

    return(
        <div className="w-60 h-screen flex items-center justify-center text-xl">
            <div className="flex-col space-y-6">
                <div className="w-70 h-full text-slate-100 flex items-center justify-end " onClick={() => setIsOpen(false)}><AiOutlineClose size={25}/></div>
                <ul className="w-54 gap-x-36 flex-col text-slate-100 ">
                    <li className="hover:text-blue-600">Home</li>
                    <li className="pt-12 hover:text-blue-600">About</li>
                    <li className="pt-12 hover:text-blue-600">Education</li>
                    <li className="pt-12 hover:text-blue-600">Projects</li>
                    <li className="pt-12 hover:text-blue-600">Contact with me</li>
                    <li className="flex justify-center gap-12 pt-12 pb-8">
                        <a href="https://github.com/evertondsvieira" className="hover:text-blue-600"><AiOutlineGithub size={25}/></a>
                        <a href="https://www.linkedin.com/in/everton-da-silva-vieira/" className="hover:text-blue-600"><AiFillLinkedin size={25}/></a>
                        <a href="http://instagram.com/evertuuuv" className="hover:text-blue-600"><AiOutlineInstagram size={25}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar