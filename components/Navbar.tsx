// Navbar.js
import Link from "next/link";
import { HeartIcon } from "./Icons";

const Navbar = () => {
  return (
    <header className="px-2 sm:px-4 rounded-md shadow-sm lg:px-6 h-14 flex items-center fixed w-screen sm:w-[90vw] right-0 sm:right-10 z-[100] bg-white">
      <Link className="flex items-center justify-center" href="#">
        <HeartIcon className="h-6 w-6 text-white" />
        <Link
          href={"/"}
          className="ml-1 font-bold text-green-600 text-sm sm:text-lg"
        >
          Envision AI
        </Link>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="sm:text-sm text-xs font-medium hover:underline underline-offset-4"
          href="mailto:huleshjangde1@gmail.com"
        >
          Huleshjangde1@gmail.com
        </Link>
        <Link
          className="text-sm font-medium text-blue-500 hover:underline underline-offset-4"
          href="https://www.linkedin.com/in/hulesh-jangde-108310189/"
        >
          Linkedin
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
