// Navbar.js
import Link from "next/link";
import { HeartIcon } from "./Icons";

const Navbar = () => {
  return (
    <header className="px-4 rounded-md shadow-sm lg:px-6 h-14 flex items-center fixed w-[90vw] right-10 z-[100] bg-white">
      <Link className="flex items-center justify-center" href="#">
        <HeartIcon className="h-6 w-6 text-white" />
        <Link href={"/"} className="ml-1 font-bold text-green-600 text-lg">
          HealthBridge AI
        </Link>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          AI Services
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Medical AI
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Appointments
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
