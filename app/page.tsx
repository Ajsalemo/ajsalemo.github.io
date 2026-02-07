import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center font-sans bg-[url('/background.jpg')] bg-cover h-screen bg-top" id="top">
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
          <p className="py-4">My name is Anthony and I've been working with Open Source Software and Open Sourced-based languages for the last 7+ years.</p>

          <p className="py-4">
            I work primarily with backend related languages and software but also will use various front-end Javascript, CSS frameworks, and libraries. In my current role I handle product supportability and technical incident escalations for Azure App Services, Azure Container Apps, and Azure Spring Apps, including OSS that runs on these services - as well as the products codebase(s) themselves. I work with various teams and stakeholders between CSS (engineers, other TA's, Supportability) and engineering (Software engineers, PMs and Software Engineering Managers). Including creating numerous internal and external public facing diagnostic dashboards through internal C# frameworks - and building up a vast wealth of technical knowledge bases, articles, and blogs, for all of these services and languages both for internal and external public consumption. Daily technical incident investigation, triage for incidents, and other incident work, across App Service Linux and Container Apps, and generally investigating complex incidents are apart of daily work throughout the week.
          </p>

          <p className="py-4">I've helped build and lead supportability efforts from the support side and have built most of all available diagnostic detectors exposed in Diagnose and Solve Problems (available externally, public facing) and internally to engineers, for Azure Container Apps. I've created almost around 75% of TSGs used by support engineers and other CSS roles handling this product. This has lead to a 40% drop in incidents over time and increasing engineer effenciency through the years. I also work closely with other engineering teams and engineering leads and assisting with their incidents to identify issues or be proactive for improvement in product codebases.</p>

          <p className="py-4">For both work and side projects - I mostly use Linux and containerized applications that encapsulates all of the above. I've taken an interest with container software such as containerd and runc, and the languages that power a lot of these, which is Go (lang). Other languages I work with more commonly is Javascript (through node.js and client only .js), Python, C#, Java and PHP. Aside from working with these in production scenarios, I like to experiment with these languages and their frameworks by building random applications or projects.</p>

          <p className="py-4">Outside of work, I like to travel - currently attempting to start my journey of slowly visiting all European countries that I can. I like to work on random house projects, play video games, and piano. I've been learning Italian in my free time, as well. I've also recently starting using Home Assistant for home automation and exploring what it can do.</p>
        </div>
      </div>
      <footer className="bg-gray-900 text-center text-white p-4">
        <div className="flex flex-col justify-center items-center">
          <p>&copy; 2026 Anthony Salemo</p>
          <span className="border-black border-1 my-4 w-1/6"></span>
          <a href="#top" className="text-sm md:text-lg mt-4 px-4 py-2 bg-indigo-900 rounded hover:bg-indigo-800">Back to top</a>
        </div>
      </footer>
    </div >
  );
}
