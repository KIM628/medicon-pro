import Email from "@/componants/Layout/Icons/Email";
import Map from "@/componants/Layout/Icons/map";
import Phone from "@/componants/Layout/Icons/phone";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-footer bg-cover bg-no-repeat md:bg-cover sm:bg-cover footer pt-12 xl:pt-[90px]">
      <div className="container mx-auto pd-12 xl:pd-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          {/*  footer contact section  */}
          <div className="footer__item flex-1">
            {/*  logo  */}
            {/* <a href="">
              <img
                className="mb-[30px]"
                src={'/assets/img/image.jpeg'}
                alt=""
              />
            </a> */}

            {/*  location , email & phone  */}
            <div className="flex flex-col gap-y-3 mb-10 text-secondary">
              <div className="flex items-center gap-x-[6px]">
                <Map />
                <div>
                  10 Mohammed Ahmed Ibrahim,
                  <br />
                  Nasr city, Cairo.
                </div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <Email />
                <p>
                  Medicon-Group@email.com
                </p>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <Phone />
                <a href=" tel:+201146757348">
                  +201146757348
                </a>
                <a href=" tel:+201146757349">
                  +201146757349
                </a>
              </div>
            </div>
            {/*  social  */}
            <div
              className="flex gap-[14px] text-[30px]">
              <div
                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <Link
                  href={'https://wa.me/+201146757349'}>
                  <FaWhatsapp />
                </Link>
              </div>
              <div
                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all">
                <Link href={'https://www.facebook.com/people/Medicon-Group/100095171585309/?mibextid=LQQJ4d'}>
                <FaFacebook />
                </Link>
              </div>
              {/* <div
                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all"
              >
                <FaTwitter />
              </div> */}
              {/* <div
                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent cursor-pointer transition-all"
              >
                <FaInstagram />
              </div> */}
            </div>
          </div>
          {/*  footer quick links section  */}
          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Quick Links</h4>
            <div className="flex gap-x-2 text-secondary">
              {/*  list 1  */}
              <ul className="flex flex-col flex-1 gap-y-5">
                <li>
                  <a href="/" className="hover:text-accent transition-all">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/About" className="hover:text-accent transition-all">
                    About Us
                  </a>
                </li>
                <li>
                  <a href={'/services'} className="hover:text-accent transition-all">
                    Services
                  </a>
                </li>
                <li>
                  <a href={'/contact'} className="hover:text-accent transition-all">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/*  list 2  */}
              {/* <ul className="flex flex-col flex-1 gap-y-5">
                <li>
                  <a href="#" className="hover:text-accent transition-all">Our Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">Faq</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">Privacy Policy</a>
                </li>
              </ul> */}
            </div>
          </div>
          {/*  footer opening hours section  */}
          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Opening Hours</h4>
            {/*  list  */}
            <div className="flex flex-col gap-5 text-secondary">
              {/*  item 1  */}
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pd-[10px]">
                  <div>Saturday - Thursday</div>
                  <div className="text-accent font-medium">
                    10:00 Am - 8:00 Pm
                  </div>
                </div>
              </div>
              {/*  item 2  */}
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pd-[10px]">
                  <div>Friday</div>
                  <div className="text-accent font-medium">
                    Day Off
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  copyright  */}
      <div className="py-[30px] border-t">
        <div className="container mx-auto text-center">
          <div className="font-light text-base">
            &copy; 2024 Medicon-Group - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
