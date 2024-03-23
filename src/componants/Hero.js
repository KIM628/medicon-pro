import Heart from "@/componants/Layout/Icons/heart";

export default function Hero() {
  return (
    <section className="hero bg-grey py-12 xl:pt-12 xl:pd-0 overflow-hidden">
      <div className="container mx-auto h-full">
        {/* text & img */}
        <div className="flex flex-col xl:flex-row items-center justify-between h-full">
          {/* text */}
          <div className="hero__text xl:w-[48%] text-center xl:text-left">
            {/* badge */}
            <div
              className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
              {/* badge icon */}
              <Heart />
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                Live Your Life
              </div>
            </div>
            {/* title */}
            <h1 className="h1 mb-6">We Care About Your Lab</h1>
            {/* desc */}
            <p className="mb-[42px] md:max-w-xl">
              Medicon Group founded in 2017, IT is a unique high-tech Institution focusing on medical construction and consulting, we are specialized in medical equipment, laboratory equipment products and reagents.
            </p>
            {/* btn */}
            <button className="btn btn-lg btn-accent mx-auto xl:mx-0">Contact Us</button>
          </div>
          {/* image */}
          <div className="hero__img hidden xl:flex max-w-[814px] self-end">
            <img src="/assets/img/hero/img1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}