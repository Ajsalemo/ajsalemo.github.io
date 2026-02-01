export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[url('/background.jpg')] bg-cover">
      <div className="flex flex-col bg-gray-900 w-1/2 h-96 rounded-sm bg-linear-to-r/srgb from-indigo-950 to-teal-950 justify-center text-white p-8">
        <h1 className="text-center"><span className="text-2xl md:text-4xl">Hi, my name is </span><span className="text-2xl md:text-4xl font-bold italic">Anthony Salemo</span></h1>
        <div className="flex justify-around mt-4">
          <span>link1</span>
          <span>link2</span>
          <span>link3</span>
        </div>
      </div>
    </div>
  );
}
