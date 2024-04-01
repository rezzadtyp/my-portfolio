import React from 'react';

interface ProjectProps {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

const Project: React.FC<ProjectProps> = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex justify-between items-center px-4 md:px-8 py-12 border-y border-gray-200 cursor-pointer transition-all duration-200 last-of-type:border-gray-200 hover:opacity-50 hover:translate-x-[-10px]"
    >
      <h2 className="text-lg md:text-3xl font-semibold tracking-normal transition-all duration-400 hover:translate-x-[-10px]">{title}</h2>
      <p className="font-light transition-all duration-400 hover:translate-x-[10px]">Design & Development</p>
    </div>
  );
};

export default Project;
