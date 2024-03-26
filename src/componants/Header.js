import Map from "@/componants/Layout/Icons/map";
import Phone from "@/componants/Layout/Icons/phone";
import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  return (
    <header className="py-8 lg:pt-6 lg:pd-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <div className="flex justify-center lg:justify-normal w-[210px]">
          <Link href={'#'}>
            <img src={'/assets/img/image.jpeg'} className="max-w-full h-auto" />
          </Link>
        </div>

        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0 hidden lg:flex ">
          {/* location  */}
          <div className="flex justify-center items-center gap-x-2 ">
            <Map />
            <div className="text-secondary">
              10 Mohammed Ahmed Ibrahim,
              <br /> Nasr city, Cairo.
            </div>
          </div>
          {/* phone  */}
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal lg:w-[25%] xl:w-auto">
            <Phone />
            <a href="tel:+201146757348" className="text-secondary">
              +201146757348
              <br />
              +201146757349
            </a>
          </div>

          {/* btn */}
          {/* <button 
        className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0 ">
        Book Now
      </button>  */}
          <MobileNav  /> {/* visible only on mobile */}
          <DesktopNav /> {/* visible only on desktop */}
        </div>
      </div>
    </header>
  );
}




    // <header
    //   className="py-8 lg:pt-6 lg:pd-14">
    //   <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
    //     <div className="flex justify-center lg:justify-normal w-[210px]">
    //       <Link href={'#'}>
    //         <img src={'/assets/img/image.jpeg'} />
    //       </Link>
    //     </div>

    //     <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
    //       {/* location  */}
    //       <div className="flex justify-center items-center gap-x-2 lg:justify-normal ">
    //         <Map />
    //         <div className="text-secondary">
    //           10 Mohammed Ahmed Ibrahim,
    //           <br /> Nasr city, Cairo.
    //         </div>
    //       </div>
    //       {/* phone  */}
    //       <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
    //         <Phone />
    //         <a
    //           href="tel:+201146757348"
    //           className="text-secondary">
    //           +201146757348
    //           <br />
    //           +201146757349
    //         </a>
    //       </div>

    //       {/* btn */}
    //       {/* <button 
    //         className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0 ">
    //         Book Now
    //       </button>  */}
    //       <MobileNav />      {/* need to activate */}
    //       <DesktopNav />
    //     </div>
    //   </div>
    // </header>