const About = () => {
    return(
        <div id="about">
            <h1 className="text-left text-2xl mx-4 my-4 underline text-slate-100">About me</h1>
            <div className="flex items-center justify-center flex-col text-slate-100 max-w-[1440px] tablet:flex-row">
                <div>
                    <img className="max-w-[288px] mx-4 mb-2 border-separate rounded-full" src="perfil.jpg" alt="Foto de perfil"/>
                </div>
                <div className="flex items-center justify-center laptop:mx-4">
                    <p className="text-justify mx-4 laptop:mx-0">Hello, my name is Everton, I'm 23 years old and I graduated from the Kenzie Academy Brasil Web Development course as a Full Stack Developer. I have experience in Front End and Back End and worked on several projects, whether individual or in groups, I have experience with agile methodologies (scrum) and teamwork, at the moment I'm also studying Systems Analysis and Development at the Federal University of Paraná and I'm looking for my first professional opportunity, to be able to work with what I love which is web development.</p>
                </div>
            </div>
        </div>
    )
}

export default About