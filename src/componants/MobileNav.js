'use client'
import { useState, useRef } from 'react';
import ArrowRight from "@/componants/Layout/Icons/arrowRight";
import Link from "next/link";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mobileNavRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    mobileNavRef.current.classList.toggle('left-0');
    mobileNavRef.current.classList.toggle('-left-[300px]');
    mobileNavRef.current.querySelector('.mnav__close-btn-icon').classList.toggle('ri-arrow-left-s-line');
    mobileNavRef.current.querySelector('.mnav__close-btn-icon').classList.toggle('ri-arrow-right-s-line');
  };

  return (
    <nav
      ref={mobileNavRef}
      className="mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20"
    >
      {/* nav trigger btn */}
      <div
        className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
        onClick={toggleNav}
      >
        <ArrowRight />
      </div>
      {/* logo, list, form */}
      <div className="px-12 flex flex-col gap-y-12 h-full">
        {/* logo */}
        <Link href={'/'}>
          <img src={'/assets/img/MG-Logo.png'} />
        </Link>
        {/* list */}
        <ul className="flex flex-col gap-y-5">
          <li>
            <Link
              href={'/'}
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/About'}
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={'/services'}
              className="text-secondary hover:text-accent transition-all duration-300"
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
      </div>
    </nav>
  );
}