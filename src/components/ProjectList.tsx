"use client";
import { useState } from "react";
import Modal from "./modal";
import Project from "./project";

interface ProjectData {
  title: string;
  src: string;
  color: string;
}

const projects: ProjectData[] = [
  {
    title: "Erased Project",

    src: "/images/erased1.jpg",

    color: "#000000",
  },

  {
    title: "Osaka NFT",

    src: "/images/osaka.jpg",

    color: "#333333",
  },

  {
    title: "Nowai AI",

    src: "/images/nowaip.png",

    color: "#5c5c5c",
  },

  {
    title: "WeLaunch WEB3 App",

    src: "/images/welaunch.png",

    color: "#8a8a8a",
  },
];

interface ModalState {
  active: boolean;
  index: number;
}

const ProjectList = () => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <main className="w-screen pb-24 flex flex-col md:flex-row gap-10 md:gap-72 px-2 md:px-8 pt-32 m-auto justify-stretch sm:h-auto" id="works-section">
      <div className="flex flex-col gap-4 md:gap-8 md:w-[30vw] w-full">
        <h1 className="md:text-6xl text-neutral-900 font-semibold text-3xl">Selected Works</h1>
        <p className="md:text-xl text-neutral-900">
          I&apos;ve been fortunate enough to work on a wide range of projects
          that have shaped Unsplash to where it is today: from conceptualization and research to strategic planning, visual design, and implementation. Here are some of my favorites.
        </p>
      </div>
      <div className="md:w-[50vw]">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
};

export default ProjectList;
