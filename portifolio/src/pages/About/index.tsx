const About = () => {
    return(
        <div>
            <h1 className="text-left text-2xl mx-4 my-4 underline text-slate-100">About me</h1>
            <div className="flex items-center justify-center flex-col text-slate-100">
                <div>
                    <h2 className="text-center text-2xl">This is me</h2>
                    <img className="w-[300px] border-separate px-4 rounded-full" src="perfil.jpg" alt="Foto de perfil"/>
                </div>
                <div className="flex items-center justify-center">
                    <p className="">My trajetory with technology...</p>
                </div>
            </div>
        </div>
    )
}

export default About