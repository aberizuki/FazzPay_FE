import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";
import Link from "next/link";

export default function TransferConfirm() {
  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[100vh]">
          <Navigation />
        </section>
        <section className="">
          <div className="p-5 mr-5  bg-white rounded-xl h-[100%] drop-shadow-lg w-[50vw]">
            <div className="font-bold">Transfer to</div>
            <div className="py-[40px]">
              <div className="flex items-center p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7 h-[100px]">
                <div className="px-2">
                  <Image
                    className="rounded-xl"
                    src="/runrun.png"
                    width={80}
                    height={80}
                    alt=""
                  />
                </div>
                <div className="px-2">
                  <div className="text-[#3A3D42] font-bold mb-2">
                    Morita Hikaru
                  </div>
                  <div className="">+62813938772</div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold mb-7">Details</div>
            </div>
            <form>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Amount
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    Rp.100.000
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Balance left
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    Rp.1.000.000
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Date & Time
                  </span>
                  <div className="font-bold ml-1 text-[#514F5B]">
                    May 11, 2020 - 12.20
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 mb-2 block text-[12px] text-[#858D96]">
                    Notes
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    id="phone"
                    type="text"
                    placeholder="Enter notes"
                  />
                </div>
              </div>

              <Link href="/transferSuccess">
                <div className="flex justify-end">
                  <button className="bg-[#6379F4] text-white rounded-lg h-[50px] w-[30%] ">
                    Continue
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
