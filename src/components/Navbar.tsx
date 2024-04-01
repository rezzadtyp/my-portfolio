"use client";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "About", href: "#about-section" },
  { title: "Works", href: "#works-section" },
  { title: "Contact", href: "#contact-section" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div>
      <div className="flex justify-between px-8 py-6 fixed w-full backdrop-blur-md bg-white bg-opacity-70 z-40 border-b border-black">
        <div>
          <Image src={logo} alt={"logo"} width={36} height={36} />
        </div>
        <div className="hidden md:flex gap-20 items-center text-base font-medium">
          <Link
            href="#about-section"
            className="underline-offset-4 hover:underline"
            scroll={true}
          >
            About
          </Link>
          <Link
            href="#works-section"
            className="underline-offset-4 hover:underline"
            scroll={true}
          >
            Works
          </Link>
          <Link
            href="#contact-section"
            className="underline-offset-4 hover:underline"
            scroll={true}
          >
            Contact
          </Link>
        </div>
        <div
          className="md:hidden flex items-center underline-offset-4 hover:underline text-base font-medium cursor-pointer"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 md:hidden origin-top w-full h-screen bg-neutral-900 text-white px-8 py-6 z-50"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <Image
                  src={logo}
                  alt={"logo"}
                  width={36}
                  height={36}
                  className="invert"
                />
                <p
                  className="cursor-pointer text-base font-medium underline-offset-4 hover:underline"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col items-center h-full place-content-center gap-10"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" onClick={toggleMenu}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
              <div className="flex justify-center underline">
                <p>rezzadityap@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

const mobileLinkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

interface MobileNavLinkProps {
  title: string;
  href: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVariants}
      className="text-5xl underline-offset-4 hover:underline"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
