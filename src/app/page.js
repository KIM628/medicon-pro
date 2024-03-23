import ContactUs from "@/componants/ContactUs";
// import Faq from "@/componants/Faq";
import Hero from "@/componants/Hero";
import About from "@/componants/About";
import Stats from "@/componants/Stats";
import Testimonials from "@/componants/Testimonials";



export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      {/* <Faq /> */}
      <Testimonials />
      <ContactUs />
    </>
  );
}
