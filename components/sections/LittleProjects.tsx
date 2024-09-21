import React from "react";

function LittleProjects() {
  return (
    <section className="bg-noiseonblack bg-black px-20 py-60">
      <h2 className="heading text-white-25">MY PROJECTS -</h2>

      <div className="mt-16 grid grid-flow-col justify-stretch text-gray content font-bold gap-40">
        <h3 className="flex flex-col gap-5">
          Project 1<div className="bg-white-25 box-content h-96 w-full"></div>
        </h3>
        <div className=" content flex flex-col gap-5">
          Project 2<div className="bg-white-25 box-content h-96 w-full"></div>
        </div>
      </div>
    </section>
  );
}

export default LittleProjects;
