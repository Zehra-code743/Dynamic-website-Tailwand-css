import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-800  text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={150} 
            height={50} 
          />
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <Link href="/">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
          </Link>
          <Link href="/about-us">
            <li className="hover:text-indigo-400 cursor-pointer">About Us</li>
          </Link>
          <Link href="/contact-us">
            <li className="hover:text-indigo-400 cursor-pointer">Contact Us</li>
          </Link>
          <Link href="/blog">
            <li className="hover:text-indigo-400 cursor-pointer">Blog</li>
          </Link>
          <Link href="/product">
            <li className="hover:text-indigo-400 cursor-pointer">Product</li>
          </Link>
          
          {/* Start Button */}
          <Link href="/start" passHref>
            <li className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 cursor-pointer">
              Start
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
