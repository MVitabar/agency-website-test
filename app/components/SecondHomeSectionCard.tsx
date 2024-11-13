import Image from "next/image";
import Relume from "../../public/images/relume.svg";

export default function SecondHomeSectionCard() {
  return (
    <section className="mx-6 my-8">
      <div>
        <Image alt="logo" src={Relume} width={48} height={48} />
        <h2 className="text-3xl font-bold mb-4">Get Started</h2>
        <p className="text-sm mt-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Praesent sit amet
          nulla auctor, vestibulum magna sed
        </p>
      </div>
    </section>
  );
}
