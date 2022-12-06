const Education = () => {
    return(
        <div>
            <h1 className="text-left text-2xl mx-4 my-4 underline text-slate-100">Education</h1>
            <div className="flex items-center justify-center gap-4 flex-col text-slate-100">
                <div className="flex items-center justify-center gap-5 mx-4 flex-col">
                    <img className="w-[300px]" src="logo-ufpr.png" alt="Logo UFPR" />
                    <div className="text-justify">
                        <h2>Institution: Federal University of Paraná</h2>
                        <p>Duration: 2022 - 2025</p>
                        <p>The Federal University of Paraná is a public university headquartered in Curitiba, Paraná, Brazil. UFPR is considered to be one of the oldest universities in Brazil. I am currently taking the Systems Analysis and Development course and will probably graduate in 2025.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 mx-4 flex-col">
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
                <div className="flex items-center justify-between mx-4 my-4 ">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>ReactJs</li>
                        <li>Sass</li>
                        <li>Styled-Components</li>
                        <li>Tailwind</li>
                    </ul>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>Docker</li>
                        <li>Python</li>
                        <li>Django</li>
                    </ul>
                </div>
            <div className="flex items-center justify-between mx-4">
                <h1 className="text-left text-2xl my-4 underline text-slate-100">Resume</h1>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <a href='/resume.pdf' download>Download</a>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Education