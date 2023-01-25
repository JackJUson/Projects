import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda] tracking-wider mb-4">
          Hi, my name is
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] mb-3">
          Jackson Jung.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] mb-4">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[500px] mb-4">
          I have a strong passion for software engineering with experience
          building responsive multiplatform web applications. Currently, I'm
          focused on making interactive websites with{" "}
          <span className="text-[#64ffda]">React</span> and{" "}
          <span className="text-[#64ffda]">NextJs</span>.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button
              className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded
          hover:bg-[#64ffda] hover:bg-opacity-40 hover:border-[#64ffda] duration-300"
            >
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
