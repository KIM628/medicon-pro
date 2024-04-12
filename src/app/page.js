// import Faq from "@/componants/Faq";
import Hero from "@/componants/Hero";
import MobileNav from "@/componants/MobileNav";
import Stats from "@/componants/Stats";
import Testimonials from "@/componants/Testimonials";



export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      {/* <Faq /> */}
      <Testimonials />
      <MobileNav/>
    </>
  );
}
