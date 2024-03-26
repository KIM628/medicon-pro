import Search from "@/componants/Layout/Icons/Search";
import ArrowRight from "@/componants/Layout/Icons/arrowRight";
import Link from "next/link";

export default function MobileNav() {
  // mobile nav    ++++++ do it later +++++++

  // const mobileNav = document.querySelector('.mnav');
  // const closeBtn = document.querySelector('.mnav__close-btn');
  // const closeBtnIcn = document.querySelector('.mnav__close-btn-icom');

  // const navOpenedClass = 'left-0';
  // const navClosedClass = '-left-[300px]';
  // const arrowLeftClass = 'ri-arrow-left-s-line';
  // const arrowRightClass = 'ri-arrow-right-s-line';

  // closeBtn.addEventListener('click', () => {
  //   if (mobileNav.classList.contains(navClosedClass)) {
  //     mobileNav.classList.toggle(navOpenedClass);

  //     closeBtnIcn.classList.toggle(arrowLeftClass);
  //     closeBtnIcn.classList.toggle(arrowRightClass);
  //   }
  // });

  return (
    <nav
      className="mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20">
      {/* nav trigger btn */}
      <div
        className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
        <ArrowRight />
      </div>
      {/* logo , list , form */}
      <div className="px-12 flex flex-col gap-y-12 h-full">
        {/* logo */}
        <Link href={'#'}>
          <img src={'/assets/img/MG-Logo.png'} />
        </Link>
        {/* list */}
        <ul className="flex flex-col gap-y-5">
          <li>
            <Link
              href={'#'}
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'#'}
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={'#'}
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={'#'}
              className="text-secondary hover:text-accent transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* form */}
        {/* <form className="relative flex gap-x-[10px]">
          <Search />
          <input
            type="text"
            id="mnav-search-input"
            placeholder="Search..."
            className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
          />
        </form> */}
      </div>
    </nav>
  );
}


