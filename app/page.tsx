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
    <h1 className="flex justify-center text-4xl heading1 pt-8 pb-4"> About Me </h1>
    <div className="flex justify-center">
    <p className="text-center pb-10 w-255">My name is Diogo Penafiel, I am a motivated CS student with experience in various coding languages, such as Java and React. I am willing to apply myself in any type of problem and am willing to find solutions to modern day problems. I am very passionate about coding and find it to be something I enjoy and can use to connect with others.</p>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 w-full">

  {/* WHAT I DO */}
  <div className="bg-[#BC6C25] w-full max-w-sm rounded-[30px] p-6 text-center">
    <h1 className="heading2 text-[#FDF0D5] drop-shadow-md mb-4">What I Do</h1>
    <ul className="list-disc text-[#283618] text-left mx-auto w-fit space-y-3 text-base md:text-lg">
      <li>Find front end business website problems</li>
      <li>Create solutions for the web through redesign</li>
      <li>Develop improved versions of web pages</li>
    </ul>
  </div>

  {/* SKILLS */}
  <div className="bg-[#DDA15E] w-full max-w-sm rounded-[30px] p-6 text-center">
    <h1 className="heading2 text-[#FDF0D5] drop-shadow-md mb-4">Skills</h1>
    <ul className="list-disc text-[#283618] text-left mx-auto w-fit space-y-3 text-base md:text-lg">
      <li>Can use Figma</li>
      <li>Created projects on Visual Studio Code</li>
      <li>Proficient in HTML/CSS</li>
    </ul>
  </div>

</div>

    </div>
   </div>
      
  );
}