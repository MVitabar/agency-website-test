import Image from "next/image";
import Img1 from "@/public/images/img2.svg";
export default function Layout3() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-slate-50 p-6 md:px-16 md:py-48 w-full">
      <div className="flex flex-col  ">
        <div>
          <div className="flex flex-col items-center md:items-start md:text-left text-center justify-around py-5 bg-white my-4 rounded-xl md:flex-row md:[width:42vw] md:[height:320px]">
            <div className="flex flex-col items-center md:items-start md:text-left md:justify-start text-center justify-center py-5 bg-white my-4 rounded-xl ">
              <h2 className="layout-3-card-title font-bold text-2xl ">
                Card Title
              </h2>
              <p className="layout-3-card-description font-normal text-sm ">
                Card Description
              </p>
            </div>
            <Image
              width={240}
              height={200}
              src={Img1}
              alt="Placeholder Image"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center md:items-start md:text-left text-center justify-around py-5 bg-white my-4 rounded-xl md:flex-row md:[width:42vw] md:[height:320px]">
            <div className="flex flex-col items-center md:items-start md:text-left md:justify-start text-center justify-center py-5 bg-white my-4 rounded-xl ">
              <h2 className="layout-3-card-title font-bold text-2xl ">
                Card Title
              </h2>
              <p className="layout-3-card-description font-normal text-sm ">
                Card Description
              </p>
            </div>
            <Image
              width={240}
              height={200}
              src={Img1}
              alt="Placeholder Image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center justify-center ">
        <div className="flex flex-col items-center   text-center justify-center py-5 bg-white my-4 rounded-xl md:[width:42vw] md:[height:672px]">
          <h2 className="layout-3-card-title font-bold text-2xl ">
            Card Title
          </h2>
          <p className="layout-3-card-description font-normal text-sm md:mb-20">
            Card Description
          </p>
          <Image width={240} height={200} src={Img1} alt="Placeholder Image" />
        </div>
      </div>
    </div>
  );
}
