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
        <div className="max-w-4xl mx-auto p-4 text-sm md:text-md text-white">
          <p>I have lived in Charlotte, North Carolina since 2005. I’m originally from Queens, New York and lived in Southern Florida for about 2 years before settling in NC. Upon moving to Charlotte, I was able to kickstart my interest in technology and my natural love for art.</p>
          <p className="pt-4">My passion for web development began in 2017 when I completed UNC Charlotte’s Full Stack Web Development course. Over a period of six months, I learned, networked, and built collaborative projects with colleagues. Since then, I've been involved with Full Stack Development, Developer Support, and Product Supportability for mostly Linux-based, containerized, and open-source software for the last 6 years.</p>
          <p className="pt-4">Currently now, I work as a Senior Technical Advisor for Microsoft - on their Azure App Services - Open Source Software team (PaaS) engaging with a wide variety of technical and soft skill tasks both internal and through customer interaction.</p>
        </div>
      </div>
    </div>
  );
}
