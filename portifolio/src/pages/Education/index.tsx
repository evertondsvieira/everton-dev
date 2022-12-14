import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiSass, SiStyledcomponents, SiTailwindcss, SiGit, SiGithub, SiNodedotjs, SiExpress, SiPostgresql, SiDocker, SiPython, SiDjango } from "react-icons/si";

const Education = () => {
    return(
        <div id="education">
            <h1 className="text-left text-2xl mx-4 my-4 underline text-slate-100">Education</h1>
            <div className="flex items-center justify-center gap-4 flex-col text-slate-100 max-w-[1440px]">
                <div className="flex items-center justify-center gap-5 mx-4 flex-col tablet:flex-row">
                    <img className="w-[300px]" src="logo-ufpr.png" alt="Logo UFPR" />
                    <div className="text-justify">
                        <h2>Institution: Federal University of Paraná</h2>
                        <p>Duration: 2022 - 2025</p>
                        <p>The Federal University of Paraná is a public university headquartered in Curitiba, Paraná, Brazil. UFPR is considered to be one of the oldest universities in Brazil. I am currently studying the Systems Analysis and Development and will probably graduate in 2025.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 mx-4 flex-col tablet:flex-row">
                    <img className="w-[300px]" src="logo-kenzie.png" alt="Logo Kenzie" />
                    <div className="text-justify">
                        <h2>Institution: Kenzie Academy Brazil</h2>
                        <p>Duration: 2022 - 2023</p>
                        <p>2,000 hour Full-Stack Development course covering Front End and Back End technologies as well as soft skills needed for the job market.</p>
                    </div>
                </div>
            </div>
            <div className="text-slate-100">
                <h1 className="text-left text-2xl mx-4 my-4 underline">Skills</h1>
                <p className="text-justify mx-4">These are my main skills and at the moment I am studying the Vue.js framework. I also have experience with Visual Studio Code, Vercel, Discord, Slack, Figma, Trello and Jira.</p>
                <div className="max-w-[1440px] flex items-center justify-between mx-4 my-4 ">
                    <ul>
                        <div className="flex items-center gap-1">
                            <SiHtml5 />
                            <li>HTML5</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiCss3 />
                            <li>CSS3</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiJavascript />
                            <li>JavaScript</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiTypescript />
                            <li>TypeScript</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiReact />
                            <li>ReactJs</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiSass />
                            <li>Sass</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiStyledcomponents />
                            <li>Styled-Components</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiTailwindcss />
                            <li>Tailwind</li>
                        </div>
                    </ul>
                    <ul>
                        <div className="flex items-center gap-1">
                            <SiGit />
                            <li>Git</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiGithub />
                            <li>GitHub</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiNodedotjs />
                            <li>Node.js</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiExpress />
                            <li>Express</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiPostgresql />
                            <li>PostgreSQL</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiDocker />
                            <li>Docker</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiPython />
                            <li>Python</li>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiDjango />
                            <li>Django</li>
                        </div>
                    </ul>
                </div>
                <div className="flex items-center justify-between mx-4 max-w-[1440px]">
                    <h1 className="text-left text-2xl my-4 underline text-slate-100">Resume</h1>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <a href='/Resume.pdf' download>Download</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Education