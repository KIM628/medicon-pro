export default function About() {
  return (
    <section className="services">
      {/* bg */}
      <div
        className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          {/* text */}
          <div
            className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2
              className="h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">
              Our vision
            </h2>
            <p
              className="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
              We seek to be the best in the world of manufacturing all medical supplies, exporting them abroad, and achieving a unique development in the medical field in Egypt and the world.
            </p>
          </div>
        </div>
      </div>
      {/* grid container */}
      <div
        className="container mx-auto mt-8 xl:-mt-[144px]">
        {/* grid */}
        <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
          {/* grid item 1 */}
          <div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px] w-12">
              <img src="/assets/icons/services/service.png" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Quality</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">Specially trained engineering and sales team to handle any fault within a maximum of two days throughout Egypt.</p>
          </div>
          {/* grid item 2 */}
          <div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px]">
              <img src="/assets/icons/services/together.png" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Diversity</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">
              We are distinguished by the diversity of products to support small and giant medical facilities.</p>
          </div>
          {/* grid item 3 */}
          <div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px]">
              <img src="/assets/icons/services/diamond.png" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Value</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">We provide special educational training for fresh graduates and students to assist in the labor market to gain scientific and practical experience.</p>
          </div>
          {/* grid item 4 */}
          <div
            className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center">
            {/* grid item icon */}
            <div className="mb-[15px]">
              <img src="/assets/icons/services/unite.png" alt="" />
            </div>
            {/* grid item title */}
            <h3 className="h3 mb-[10px]">Nationalism</h3>
            {/* grid item description */}
            <p className="font-light leading-normal max-w-[300px]">We provide full support and facilities for all locally manufactured products and monitor their quality, accuracy and stability in order to exploit the opportunities available in the local and global market.</p>
          </div>
        </div>
      </div>
    </section>
  );
}