const Contact = () => {
    return(
        <div className="text-slate-100">
            <h1 className="text-left text-2xl mx-4 my-4 underline">Contact me</h1>
            <h2 className="text-center mx-4 my-4">Have you any question? Let's talk</h2>
            <div className="flex gap-2 items-center justify-center flex-col">
                <div>
                    <p>Your name:</p>
                    <input type="text"  className="outline-none text-black" autoComplete="off"/>
                </div>
                <div>
                    <p>Your email:</p>
                    <input type="text" className="outline-none text-black" autoComplete="off"/>
                </div>
                <div>
                    <p>Your message:</p>
                    <input type="text" className="flex items-start h-40 outline-none text-black" autoComplete="off"/>
                </div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center">Send</button>
            </div>           
        </div>    
    )
}

export default Contact