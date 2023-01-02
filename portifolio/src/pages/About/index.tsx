const About = () => {
    return(
        <div id="about">
            <h1 className="text-left text-2xl mx-4 my-4 underline text-slate-100">About me</h1>
            <div className="flex items-center justify-center flex-col text-slate-100 max-w-[1200px] tablet:flex-row">
                <div>
                    <img className="max-w-[288px] mx-4 border-separate rounded-full" src="perfil.jpg" alt="Foto de perfil"/>
                </div>
                <div className="flex items-center justify-center laptop:mx-4">
                    <p className="text-justify mx-4 laptop:mx-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
            </div>
        </div>
    )
}

export default About