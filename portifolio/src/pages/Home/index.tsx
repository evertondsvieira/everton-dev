import Typewriter from "typewriter-effect";
import { AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  return (
    <div id="/" className="text-center pt-16 text-slate-100 max-w-[1200px] min-w-[290px]">
      <div className="flex items-center justify-center gap-1">
        <p>Hi</p>
        <AiOutlineHeart />
      </div>
      <p>Welcome to my page</p>
      <div className="flex items-center justify-center gap-1">
        <p>I am a</p>
        <Typewriter
          options={{
            strings: ["Front End Developer", "Back End Developer", "Full Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
