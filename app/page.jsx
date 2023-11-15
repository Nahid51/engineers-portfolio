"use client"
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from "../styles/home.module.css";
import { SiJavascript } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowRight, MdLocationOn } from "react-icons/md";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import heroPhoto from "../public/images/heroPhoto1.jpg";
import purple from "../public/images/purple_romb2.png";
import darkCube from "../public/images/dark_cube2.png";
import whiteCube from "../public/images/white_cube1.png";
import ProjectsSlider from "@/components/ProjectsSlider";
import ContactForm from "@/components/ContactForm";

function SampleNextArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
    />
  );
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <main>
      <Header />
      <section id="hero" className={`${styles.homeBg}`}>
        <div className="md:h-[90vh] h-full container mx-auto flex items-center">
          <Image src={purple} alt="purple" width={15} height={15} className={`absolute md:right-1/2 right-10 top-1/4 -translate-x-1/2 -translate-y-1/2 ${styles.purple}`} />
          <Image src={purple} alt="purple" width={100} height={100} className={`absolute left-1/3 bottom-32 -translate-x-1/2 -translate-y-1/2 ${styles.purple}`} />
          <Image src={purple} alt="purple" width={20} height={20} className={`absolute right-40 bottom-20 ${styles.purple}`} />
          <div className="grid md:grid-cols-2 grid-cols-1 items-center text-white">
            <div className="p-10">
              <h4 className="md:text-6xl text-4xl font-bold">Front-End Software Engineer</h4>
              <p className="my-6 text-lg">Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
              <Link href="/#about" scroll={true} className="flex items-center gap-3 text-[#9C27B0] font-semibold text-lg group md:w-1/5 w-2/5">
                <span>About me</span>
                <MdKeyboardArrowRight size={24} color="#9C27B0" className="group-hover:rotate-90 duration-300" />
              </Link>
            </div>
            <div className={styles.rightBg}>
              <Image src={heroPhoto} alt="heroPhoto" className="rounded-full" />
            </div>
          </div>
        </div>
        <div className="absolute md:right-6 -right-4 bottom-[50%] -rotate-90">
          <div className="text-gray-300 flex items-center gap-5">
            <Link href="/#about" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongLeft size={24} /></Link>
            <span>Scroll</span>
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.aboutBg} relative py-20`}>
        <Image src={purple} alt="purple" width={50} height={50} className={`-z-10 absolute right-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2 ${styles.purple}`} />
        <Image src={darkCube} alt="darkCube" width={200} height={200} className={`-z-10 absolute left-[20%] bottom-20 -translate-x-1/2 -translate-y-1/2`} />
        <Image src={darkCube} alt="darkCube" width={200} height={200} className={`-z-10 absolute left-[20%] bottom-20 -translate-x-1/2 -translate-y-1/2`} />
        <Image src={darkCube} alt="darkCube" width={100} height={100} className={`-z-10 absolute right-[20%] bottom-20 -translate-x-1/2 -translate-y-1/2`} />
        <div className="h-screen container mx-auto flex items-center z-20">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center text-white p-10">
            <div>
              <h4 className="md:text-6xl text-4xl font-bold">Hi, I am John Doe</h4>
              <h4 className="md:text-6xl text-4xl font-bold">Software Engineer</h4>
              <p className="mt-6 text-gray-400 tracking-widest text-xl md:mb-0 mb-5">Full Stack, JavaScript, Python, Node JS</p>
            </div>
            <div className="text-lg">
              <p>Professionally connected with the web development industry.</p>
              <p className="my-3">Problem solver, well-organised person, loyal employee with high attention to detail. Fan of Boxing, outdoor activities, video games, and coding of course.</p>
              <p>Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
            </div>
          </div>
        </div>
        <div className="absolute md:right-0 -right-10 bottom-[50%] -rotate-90 z-10">
          <div className="text-gray-300 flex items-center gap-5">
            <Link href="/#skills" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongLeft size={24} /></Link>
            <span>Scroll</span>
            <Link href="/" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongRight size={24} /></Link>
          </div>
        </div>
      </section>

      <section id="skills" className={`${styles.skillsBg} relative md:py-0 p-20`}>
        <div className="h-screen container mx-auto flex items-center justify-center">
          <div className="text-white text-center">
            <h6 className="text-xl text-gray-500">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</h6>
            <h2 className="text-6xl font-bold my-5">Skills & Experience</h2>
            <p>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
            <p className="md:w-[40%] w-full mx-auto my-4">HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress</p>
            <p>Visit my <Link href="#" className="text-[#EA580C]">Linkedin</Link> for more details.</p>
            <div className="w-1/2 mx-auto mt-10">
              <div className="grid md:grid-cols-6 grid-cols-3 md:gap-10 gap-2">
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
                <SiJavascript size={72} className="w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:right-0 -right-10 bottom-[50%] -rotate-90">
          <div className="text-gray-300 flex items-center gap-5">
            <Link href="/#projects" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongLeft size={24} /></Link>
            <span>Scroll</span>
            <Link href="/#about" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongRight size={24} /></Link>
          </div>
        </div>
      </section>

      <section id="projects" className={`${styles.projectsBg} relative md:py-0 py-20`}>
        <ProjectsSlider />
        <div className="absolute md:right-0 -right-10 bottom-[50%] -rotate-90">
          <div className="text-gray-300 flex items-center gap-5">
            <Link href="/#contact" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongLeft size={24} /></Link>
            <span>Scroll</span>
            <Link href="/#skills" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongRight size={24} /></Link>
          </div>
        </div>
      </section>

      <section id="contact" className={`${styles.contactBg} relative md:px-0 px-10`}>
        <Image src={whiteCube} alt="purple" width={100} height={100} className={`absolute right-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2  md:z-10 -z-10 ${styles.purple}`} />
        <Image src={whiteCube} alt="purple" width={150} height={150} className={`absolute left-1/3 bottom-20 translate-x-1/2 -translate-y-1/2  md:z-10 -z-10 ${styles.purple}`} />
        <div className="h-screen container mx-auto flex items-center z-20">
          <div className="text-white grid md:grid-cols-2 grid-cols-1 items-center gap-x-0 md:gap-y-0 gap-y-10">
            <div className="md:w-2/3 mx-auto">
              <h6 className="text-xl">What would you do if you had a software expert available at your fingertips?</h6>
              <h6 className="text-xl my-3">Want to start new project? Or just say hey. You can also follow me on <a aria-label="Chat on WhatsApp" href="https://wa.me/01747961604" target="_blank" className="text-[#EA580C]"> WhatsApp</a></h6>
              <p className="text-lg">tdrdimov@gmail.com</p>
              <div className="mt-3 flex items-center md:gap-x-10 gap-x-3 md:gap-y-0 gap-y-10">
                <div className="flex md:flex-row flex-col items-start gap-3 text-lg">
                  <IoIosCall size={32} className="bg-[#9C27B0] rounded-full p-2" />
                  <div>
                    <h4>Call Me</h4>
                    <p>+8801XXXXXXXXX</p>
                    <p>+8801XXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col items-start gap-3 text-lg">
                  <HiLocationMarker size={36} className="bg-[#9C27B0] rounded-full p-2" />
                  <div>
                    <h4>Address</h4>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="absolute md:right-0 -right-4 bottom-[50%] -rotate-90">
          <div className="text-gray-300 flex items-center gap-5">
            {/* <Link href="/" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongLeft size={24} /></Link> */}
            <span>Scroll</span>
            <Link href="/#projects" scroll={true} className="hover:text-white cursor-pointer"> <CgArrowLongRight size={24} /></Link>
          </div>
        </div>
      </section>

    </main>
  )
}
