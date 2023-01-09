import { SiExpress, SiCss3, SiJavascript, SiHtml5, SiNodedotjs, SiReact, SiStyledcomponents, SiTypescript, SiPostgresql, SiDocker, SiPython, SiDjango } from "react-icons/si";

const Projects = () => {
    return(
        <div id="projects" className="text-slate-100">
            <h1 className="text-left text-2xl mx-4 my-4 underline">Portfolio</h1>
            <h2 className="text-left text-lg mx-4 my-4">My last projects:</h2>
            <div className="w-screen h-auto flex flex-row overflow-x-scroll items-center px-4 pb-4 gap-3 laptop:overflow-x-hidden laptop:flex-wrap laptop:justify-center max-w-[1440px]">
                <div>
                    <a href="https://evertondsvieira.github.io/Comix-Shop/" target="blank"><img className="max-w-[300px]" src="/comixshop.png" alt=""/></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiHtml5 />
                        <SiCss3 />
                        <SiJavascript />
                    </div>
                </div>
                <div>
                    <a href="https://react-entrega-s1-nu-kenzie-evertondsvieira.vercel.app/" target="blank"><img className="max-w-[300px]" src="/nukenzie.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiCss3 />
                        <SiJavascript />
                    </div>
                </div>
                <div>
                    <a href="https://react-entrega-s1-hamburgueria-da-kenzie-evertondsvieira.vercel.app/" target="blank"><img className="max-w-[300px]" src="/kenzieburger.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiCss3 />
                        <SiJavascript />
                    </div>
                </div>
                <div>
                    <a href="https://kenzie-hub-eight-gamma.vercel.app/" target="blank"><img className="max-w-[300px]" src="/kenziehub.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiStyledcomponents />
                        <SiTypescript />
                    </div>
                </div>
                <div>
                    <a href="https://thecost.vercel.app/" target="blank"><img className="max-w-[300px]" src="/thecost.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiStyledcomponents />
                        <SiTypescript />
                    </div>
                </div>
                <div>
                    <a href="https://github.com/evertondsvieira/WorkCollection" target="blank"><img className="max-w-[300px]" src="/workcollection.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiNodedotjs />
                        <SiExpress />
                        <SiPostgresql />
                        <SiDocker />
                        <SiTypescript />
                    </div>
                </div>
                <div>
                    <a href="" target="blank"><img className="max-w-[300px]" src="/blank.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                    <SiPostgresql />
                    <SiDocker />
                    <SiDjango />
                    <SiPython />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects