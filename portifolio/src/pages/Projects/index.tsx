import { SiExpress, SiCss3, SiJavascript, SiHtml5, SiNodedotjs, SiReact, SiStyledcomponents, SiTypescript } from "react-icons/si";

const Projects = () => {
    return(
        <div id="projects" className="text-slate-100">
            <h1 className="text-left text-2xl mx-4 my-4 underline">Portfolio</h1>
            <h2 className="text-left text-lg mx-4 my-4">My last projects:</h2>
            <div className="flex items-center justify-center flex-row flex-wrap gap-3 max-w-[1200px] mb-8">
                <div>
                    <p>Comix Shop</p>
                    <a href="https://evertondsvieira.github.io/Comix-Shop/" target="blank"><img src="/comixshop.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiHtml5 />
                        <SiCss3 />
                        <SiJavascript />
                    </div>
                </div>
                <div>
                    <p>Nu Kenzie</p>
                    <a href="https://react-entrega-s1-nu-kenzie-evertondsvieira.vercel.app/" target="blank"><img src="/nukenzie.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiCss3 />
                        <SiJavascript />
                    </div>
                </div>
                <div>
                    <p>Kenzie Burger</p>
                    <a href="https://react-entrega-s1-hamburgueria-da-kenzie-evertondsvieira.vercel.app/" target="blank"><img src="/kenzieburger.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiCss3 />
                        <SiJavascript />
                    </div>
                </div>
                <div>
                    <p>Kenzie Hub</p>
                    <a href="https://kenzie-hub-eight-gamma.vercel.app/" target="blank"><img src="/kenziehub.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiStyledcomponents />
                        <SiTypescript />
                    </div>
                </div>
                <div>
                    <p>The Cost</p>
                    <a href="https://thecost.vercel.app/" target="blank"><img src="/thecost.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiReact />
                        <SiStyledcomponents />
                        <SiTypescript />
                    </div>
                </div>
                <div>
                    <p>Work Collection</p>
                    <a href="https://github.com/evertondsvieira/WorkCollection" target="blank"><img src="/workcollection.png" alt="" /></a>
                    <div className="flex items-center justify-center m-2 gap-2">
                        <SiNodedotjs />
                        <SiExpress />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects