import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav
      className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
      <ul
        className="flex gap-x-4">
        <li>
          <Link
            href={'/'}
            className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={'/About'}
            className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href={'/services'}
            className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={'/contact'}
            className="text-secondary hover:text-accent transition-all duration-300"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}


