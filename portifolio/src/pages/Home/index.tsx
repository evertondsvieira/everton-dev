import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div id="/" className="text-center pt-16 text-slate-100 max-w-[1200px]">
      <p>Hi, welcome to my page</p>
      <div className="flex items-center justify-center gap-1">
        <p>I am a</p>
        <Typewriter
          options={{
            strings: ["Front-end Developer", "Back-end Developer", "Full-stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
