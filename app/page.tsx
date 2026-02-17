import Image from "next/image";
import Button from "./components/button";
import ButtonDanger from "./components/button_danger";
import Project_card from "./components/Project_card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
   <div className="flex-col bg-[#FDF0D5] px-12">
    <div className="flex justify-center">
    
  <Image src="/image 11.png" alt="Profile Picture" width={1253} height={330} />  </div>
    <h1 className="flex justify-center text-4xl heading1 pt-8 pb-4"> About Me </h1>
    <div className="flex justify-center">
    <p className="text-center pb-10 w-255">My name is Diogo Penafiel, I am a motivated CS student with experience in various coding languages, such as Java and React. I am willing to apply myself in any type of problem and am willing to find solutions to modern day problems. I am very passionate about coding and find it to be something I enjoy and can use to connect with others.</p>
    </div>
    <div className= "flex justify-center gap-100 ">
    <div className="bg-[#BC6C25] w-104 h-67 rounded-[30px] mb-15">
      <h1 className="heading1 text-4xl text-center text-[#FDF0D5] px-24 drop-shadow-md pt-5 pb-6"> What I do</h1>
      <ul className="list-disc text-[#283618] px-10">
        <li className="pb-4"> Find front end business website problems </li>
        <li className="pb-4"> Create solutions for the web through redesign </li>
        <li className="pb-4"> Develop improved version of web page </li>
      </ul>
    </div>
    <div className="bg-[#DDA15E] w-104 h-67 rounded-[30px] mb-15">
      <h1 className="heading1 text-4xl text-center text-[#FDF0D5] drop-shadow-xl pt-5 pb-6"> Skills</h1>
      <ul className="list-disc text-[#283618] px-12">
        <li className="pb-4"> Can use Figma </li>
        <li className="pb-4"> Created projects on Visual Studio Code </li>
        <li className="pb-4"> Proficient in HTML/CSS </li>
      </ul>
    </div>
    </div>
    </div>
   </div>
      
  );
}
/*
<div>
      <p> This is my stylesheet </p>
      <h1 className="heading1 "> This is my Heading 1</h1>
      <h2 className="heading2"> This is my Heading 2</h2>
      <h3 className="heading3"> This is my Heading 3</h3>
      <h4 className="heading4"> This is my Heading 4</h4>
      <p className="paragraph"> This is my paragraph </p>
      <Button text={"Click me"}/>
      <Button text={"Hold me"}/>
      <Button text={"Hover me"}/>
      <Button text={"Drag me"}/>
      <ButtonDanger text={"Don't click me"}/>
      <Project_card title={"Project 1"} date={"2023"} info={"This is a project I made in 2023"} src={"/image 11.png"} alt={"Project Image"}/>
      <Navbar />
      <Footer />
    </div>
 <div className="flex min-h-screen items-center justify-center bg-indigo-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-yellow-50 dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-red-400 px-4 py-1 rounded-md text-white" >
            MyWebsite
          </button>
          <button className="bg-blue-400 px-4 py-1 rounded-md text-white" >
            MyWebsite
          </button>
          <button className="bg-purple-400 px-4 py-1 rounded-md text-white" >
            MyWebsite
          </button>
          <button className="bg-green-400 px-4 py-1 rounded-md text-white" >
            MyWebsite
          </button>
        </div>
        </main>
    </div>
        */