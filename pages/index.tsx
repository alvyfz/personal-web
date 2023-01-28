import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import profile from "assets/profile.jpg";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const contactRef = useRef();
  const profileRef = useRef();
  const skillRef = useRef();
  return (
    <>
      <Head>
        <title>M. Alvy Eka Fauzi</title>
        <meta
          name="description"
          content="Hello there, I'am Alvy.  A passionate web developer who will solve you problems and objectify your ideas. I build beautiful websites professionally, high attention to details and the most important, I love what I do."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className="fixed flex flex-wrap items-center justify-between w-full overflow-hidden px-2 py-3 bg-blur backdrop-blur-sm  mb-3 rounded-md shadow-sm">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-3xl font-ternary   inline-block mr-4  primaryspace-nowrap text-gray-500 font-bold"
                href="#pablo"
              >
                A F
              </a>
              <button
                className="text-gray-500 cursor-pointer text-xl leading-none px-3  border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Icon icon="ic:round-menu" fontSize={24} />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item cursor-pointer">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase  leading-snug  "
                    onClick={() => {
                      profileRef?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="ml-2 font-semibold text-gray-500 hover:text-primary font-sencondary ">
                      About
                    </span>
                  </a>
                </li>
                <li className="nav-item cursor-pointer">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase  leading-snug  ≈"
                    onClick={() => {
                      skillRef?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="ml-2 font-semibold text-gray-500 hover:text-primary font-sencondary ">
                      Skills
                    </span>
                  </a>
                </li>
                <li className="nav-item cursor-pointer">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase  leading-snug  "
                    onClick={() => {
                      contactRef?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setNavbarOpen(false);
                    }}
                  >
                    <span className="ml-2 font-semibold text-gray-500 hover:text-primary  font-sencondary ">
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="pt-[60px]  flex flex-col gap-8 lg:gap-[150px]  w-full"
          ref={profileRef}
        >
          <div className=" container grid grid-cols-1 gap-16 md:grid-cols-2 justify-between pt-6 px-6 lg:px-24">
            <div className="flex justify-center lg:hidden">
              <Image
                alt="profile"
                src={profile}
                className="max-w-[300px] max-h-[300px] object-contain rounded-full bg-gray-400 top-1 border-2 border-primary lg:hidden"
              />
            </div>
            <div>
              <h3 className="text-gray-600 font-primary">Hello there,</h3>
              <h1 className="font-primary text-4xl font-bold">
                I&apos;m{" "}
                <span className="text-primary font-sencondary">Alvy</span>
              </h1>
              <p className="text-gray-600 pt-5">
                A passionate web developer who will solve you problems and{" "}
                <strong>objectify</strong> your ideas. I build beautiful
                websites professionally, high attention to details and the most
                important, I love what I do.
              </p>

              <p className="text-gray-600 pt-5">
                If you want to know more about me you can find me on my{" "}
                <a
                  href="https://www.linkedin.com/in/m-alvy-eka-fauzi-516ba7214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold"
                >
                  Linkedin
                </a>{" "}
                and also my{" "}
                <a
                  href="https://github.com/alvyfz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold"
                >
                  Github
                </a>
                .
              </p>
              <p className="text-gray-600 pt-5 pb-5">
                Have any project, idea, or problems?
              </p>

              <button className="text-sm bg-primary border border-primary text-white py-2 px-5 rounded-full hover:bg-white hover:text-primary hover:border hover:border-primary">
                Let&apos;s have a chat!
              </button>
            </div>
            <div className="flex justify-end">
              {" "}
              <Image
                alt="profile"
                src={profile}
                className="max-w-[300px] max-h-[300px] object-fill rounded-full bg-gray-400 top-1 border-2 border-primary hidden lg:inline"
              />
            </div>
          </div>
          <div
            className="flex pt-[60px] justify-center px-6 lg:px-24"
            ref={skillRef}
          >
            <div className="text-center lg:w-[50%]">
              <h2 className="font-bold font-secondary uppercase text-xl text-center">
                {" "}
                TECHNOLOGY THAT I USED{" "}
              </h2>
              <p className="pt-6 font-sencondary text-gray-600 text-center">
                There are the technology I&apos;ve been using front-end as my
                main technology with React and the various technologies that
                support it. I believe as programmers we have to keep up with
                today&apos;s technology, because with time, every tool will
                evolve for the better and new ones will appear, and we as
                programmers have to adapt to it.
              </p>
            </div>
          </div>
          <div
            className="bg-[#181720] mt-[60px]  px-6 py-16  lg:p-16 w-full  text-center"
            ref={contactRef}
          >
            <h3 className="text-white">
              Got a project or partnership in mind?
            </h3>
            <h2 className="text-white font-bold text-4xl pt-2">
              Just say hi to me!
            </h2>
            <div className="flex justify-center pt-16 lg:pt-20">
              <div className="flex lg:gap-32">
                <div className="text-white flex-row ">
                  <h6 className="mb-5">Whatsapp me</h6>
                  <a
                    className="text-sm  text-primary py-2 px-5 rounded-full hover:bg-primary hover:text-white hover:border hover:border-primary font-medium"
                    href="https://wa.me/6282214644612"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +6282214644612
                  </a>
                </div>
                <div className="text-white flex-row ">
                  <h6 className="mb-5">Email me</h6>
                  <a
                    className="text-smborder border-primary text-primary py-2 px-5 rounded-full hover:bg-primary hover:text-white hover:border hover:border-primary font-medium"
                    href="mailto:alvyfauzi10@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    alvyfauzi10@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="   px-6 grid grod-cols-1 lg:grid-cols-2">
            <h2 className="font-bold text-xl ">
              Hi, Let&apos;s build something <br /> amazing together! Thank you!
            </h2>
          </div>

          <div className="bg-[#181720] mx-2 lg:mx-16 rounded-t-full p-3">
            <p className="text-white text-sm text-center p-1 lg:text-lef">
              © 2023 MUHAMMAD ALVY EKA FAUZI
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
