import SecondHomeSectionCard from "@/app/components/SecondHomeSectionCard";

export default function SecondHomeSection() {
  return (
    <div className="second-home-section bg-slate-100 ">
      <div className=" py-40 flex-col md:flex-row flex items-center   text-black text-start">
        <SecondHomeSectionCard />
        <SecondHomeSectionCard />
        <SecondHomeSectionCard />
      </div>
      <div className="border-2 border-bottom border-slate-200 w-full mb-6"></div>
      <div className=" flex py-20  text-lg text-stone-950 px-6 md:px-20 ">
        <div className="flex w-full md:w-1/2 md:pr-20">
          <h2 className=" text-3xl font-bold mb-4">
            Long heading is what you see here in this feature section
          </h2>
        </div>

        <div className="flex w-full md:w-1/2 md:pl-20 ">
          <p className=" text-sm  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
