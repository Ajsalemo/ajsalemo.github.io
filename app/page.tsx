import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center font-sans bg-[url('/background.jpg')] bg-cover h-screen">
        <div className="flex flex-col bg-gray-900 w-1/2 h-96 rounded-sm bg-linear-to-r/srgb from-indigo-950 to-teal-950 justify-center text-white p-8 opacity-90">
          <h1 className="text-center"><span className="text-2xl md:text-4xl">Hi, my name is </span><span className="text-2xl md:text-4xl font-bold italic">Anthony Salemo</span></h1>
          <div className="flex justify-around mt-4 pt-8">
            <a href="https://github.com/ajsalemo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /><span className="hidden md:inline">GitHub</span></a>
            <a href="https://www.linkedin.com/in/ajssalemo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /><span className="hidden md:inline">LinkedIn</span></a>
            <a href="#about" className="text-sm md:text-lg">About</a>
          </div>
        </div>
      </div>
      <div className="bg-linear-to-r/srgb from-indigo-950 to-teal-950 border-black border-4" id="about">
        <div className="pt-10">
          <h2 className="text-2xl md:text-4xl text-center">About</h2>
          <Image
            src="avatar.jpg"
            width={300}
            height={300}
            alt="Self portrait of Anthony Salemo"
            className=" w-64 h-64 md:w-72 md:h-72 rounded-full mx-auto my-6 border-indigo-400 border-3 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
