const Projects = () => {
    return(
        <div id="projects" className="text-slate-100">
            <h1 className="text-left text-2xl mx-4 my-4 underline">Portfolio</h1>
            <h2 className="text-center text-lg mx-4 my-4">My last projects</h2>
            <div className="flex items-center justify-center flex-row flex-wrap gap-3 max-w-[1200px] mb-8">
                <div>
                    <p>Comix Shop</p>
                    <img src="/blank.png" alt="" />
                </div>
                <div>
                    <p>Nu Kenzie</p>
                    <img src="/blank.png" alt="" />
                </div>
                <div>
                    <p>Kenzie Burger</p>
                    <img src="/blank.png" alt="" />
                </div>
                <div>
                    <p>Kenzie Hub</p>
                    <img src="/blank.png" alt="" />
                </div>
                <div>
                    <p>The Cost</p>
                    <img src="/blank.png" alt="" />
                </div>
                <div>
                    <p>Work Collection</p>
                    <img src="/blank.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects