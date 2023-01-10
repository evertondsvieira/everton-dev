const About = () => {
    return(
        <div id="about">
            <h1 className="text-left text-2xl mx-4 my-4 underline text-slate-100">About me</h1>
            <div className="flex items-center justify-center flex-col text-slate-100 max-w-[1440px] tablet:flex-row">
                <div>
                    <img className="max-w-[288px] mx-4 mb-2 border-separate rounded-full" src="perfil.jpg" alt="Foto de perfil"/>
                </div>
                <div className="flex items-center justify-center laptop:mx-4">
                    <p className="text-justify mx-4 laptop:mx-0">Hello. My name is Everton, I am a twenty three years old Full Stack Developer graduate from the Kenzie Academy Brasil. With experience in both Front End and Back End development, agile methodologies (SCRUM), as well as several group and individual project completions. Currently I am studying System Analysis at the Federal University of Paraná and looking for my first professional opportunity as a web developer.</p>
                </div>
            </div>
        </div>
    )
}

export default About