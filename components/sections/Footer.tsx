import React from "react";

function Footer() {
  return (
    <footer className="flex justify-between items-center py-8 px-20 button text-gray bg-noiseonwhite">
      <div className="flex gap-5">
        <a href="#" className="linkedin">
          LinkedIn
        </a>
        <a href="#" className="github">
          GitHub
        </a>
        <a href="#" className=" medium">
          Blogspace
        </a>
        <a href="#" className=" download">
          My Resume
        </a>
      </div>
      <p>© 2024. Joshua Lim</p>
    </footer>
  );
}

export default Footer;
