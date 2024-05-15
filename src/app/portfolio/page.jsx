"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Movie Recommendation App",
    desc: " Welcome to our responsive movie and TV show recommendation app, crafted with React.js and powered by the TMDB API.",
    img: "https://drive.google.com/uc?id=1CZrwvRFb7JAwp_HNx9LW6SNi8Tz8BErV",
    link: "https://movie-tmdb-ecru.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Typescript Static App",
    desc: "Welcome to our TypeScript static web application tailored for gym companies! This comprehensive solution offers a sleek and professional platform for gym owners to showcase their facilities, services, and membership options.",
    img: "https://drive.google.com/uc?id=11c3nP36aD9Zp8VYnn0_2Tql5CEoOEmWd",
    link: "https://gym-one-gilt.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Javascript demo App",
    desc: "Welcome to our JavaScript eCommerce demo site, a fully-functional web application built entirely with vanilla JavaScript.It showcases the power and versatility of JavaScript in creating dynamic and interactive eCommerce experiences.",
    img: "https://drive.google.com/uc?id=1VzO9xy9ENg5hJDb252DdWYcEEWZG-5N3",
    link: "https://my-e-commerce-project-five.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "React-Bootstrap Static App",
    desc: " Static React-Bootstrap dashboard project built with React.js and Bootstrap, this dashboard offers a seamless user experience with responsive design and dynamic components.",
    img: "https://drive.google.com/uc?id=100taG4wLKbIuBiGph7sRtHRWO1Musmps",
    link: "https://dashboard-react-sepia.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              key={item.id}
            >
              <div className="flex flex-col gap-8 text-white">
                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                  {item.title}
                </h1>
                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[370px]">
                  <Image src={item.img} alt="" fill />
                </div>
                <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                  {item.desc}
                </p>
                <Link href={item.link} className="flex justify-end">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                </Link>
              </div>
            </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;