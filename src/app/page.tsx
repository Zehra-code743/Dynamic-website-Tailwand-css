import Image from "next/image";


export default function Home() {
  return (
    <div className="h-screen mt-full bg-yellow-100">
  

      <div className="container mx-12 p-8 flex flex-col lg:flex-row justify-between items-center mt-20">
        <div className="intro max-w-md">
          <p className="text-xl leading-relaxed text-gray-700">
            Perfume is a liquid that gives people, things, and rooms a good smell. It is made of oils which give off scent to the surrounding air. The odoriferous compounds that make up a perfume can be manufactured synthetically or extracted from plant or animal sources.
          </p>
        </div>
        <div className="profilePic mt-8 lg:mt-0">
          <img src="/image10.png" alt="profile" height={400} width={400} />
        </div>
      </div>


    </div>
  );
}
