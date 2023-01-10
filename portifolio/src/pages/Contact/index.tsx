import { SiWhatsapp, SiInstagram, SiLinkedin } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";


const Contact = () => {
    return(
        <div id="contact" className="text-slate-100 min-w-[320px] max-w-[1440px] flex flex-col ">
            <h1 className="text-left text-2xl mx-4 mb-4 underline">Contact me</h1>
            <h2 className="text-left mx-4 my-4">Have you any question? Let's talk</h2>
            <ul className="flex items-center justify-center mx-4 gap-10 mb-4">
                <li><a href="mailto:vieiraeverton33@hotmail.com" target="blank"><AiOutlineMail /></a></li>
                <li><a href="https://wa.me/5566984141471" target="blank"><SiWhatsapp /></a></li>
                <li><a href="http://instagram.com/evertuuuv" target="blank"><SiInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/everton-da-silva-vieira/" target="blank"><SiLinkedin /></a></li>
            </ul>
        </div>    
    )
}

export default Contact