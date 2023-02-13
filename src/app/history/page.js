import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";

export default function History() {
  return (
    <>
      <Header />
      <div className="flex h-[100vh] justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[80vh]">
          <Navigation />
        </section>
        <section className="w-[50vw] mx-[10px]">
          <div className="bg-white rounded-xl drop-shadow-xl">
            <div className="p-5 w-[100%]">
              <div className="flex justify-between m-5">
                <div className="font-bold">Transaction History</div>
                <button className="px-[15px] py-[5px] rounded bg-[#3A3D42] bg-opacity-[10%] ">
                  Select Filter
                </button>
              </div>
              <div className="flex p-[20px] items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl mr-2"
                    src="/runrun.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className="mx-[10px]">
                    <div>Morita Hikaru</div>
                    <div className="text-[#7A7886] text-[13px]">Accept</div>
                  </div>
                </div>
                <div className="font-semibold text-[#1EC15F]">+Rp.50.000</div>
              </div>
              <div className="flex p-[20px] items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl mr-2"
                    src="/runrun.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className="mx-[10px]">
                    <div>Morita Hikaru</div>
                    <div className="text-[#7A7886] text-[13px]">Accept</div>
                  </div>
                </div>
                <div className="font-semibold text-[#1EC15F]">+Rp.50.000</div>
              </div>
              <div className="flex p-[20px] items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl mr-2"
                    src="/runrun.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className="mx-[10px]">
                    <div>Morita Hikaru</div>
                    <div className="text-[#7A7886] text-[13px]">Accept</div>
                  </div>
                </div>
                <div className="font-semibold text-[#1EC15F]">+Rp.50.000</div>
              </div>
              <div className="flex p-[20px] items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl mr-2"
                    src="/runrun.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className="mx-[10px]">
                    <div>Morita Hikaru</div>
                    <div className="text-[#7A7886] text-[13px]">Accept</div>
                  </div>
                </div>
                <div className="font-semibold text-[#1EC15F]">+Rp.50.000</div>
              </div>
              <div className="flex p-[20px] items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl mr-2"
                    src="/runrun.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className="mx-[10px]">
                    <div>Morita Hikaru</div>
                    <div className="text-[#7A7886] text-[13px]">Accept</div>
                  </div>
                </div>
                <div className="font-semibold text-[#1EC15F]">+Rp.50.000</div>
              </div>
              <div className="flex p-[20px] items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl mr-2"
                    src="/runrun.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className="mx-[10px]">
                    <div>Morita Hikaru</div>
                    <div className="text-[#7A7886] text-[13px]">Accept</div>
                  </div>
                </div>
                <div className="font-semibold text-[#1EC15F]">+Rp.50.000</div>
              </div>
              <div className="flex p-[20px] items-center justify-between">
                <div className="flex items-center">
                  <Image
                    className="rounded-xl mr-2"
                    src="/runrun.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className="mx-[10px]">
                    <div>Morita Hikaru</div>
                    <div className="text-[#7A7886] text-[13px]">Accept</div>
                  </div>
                </div>
                <div className="font-semibold text-[#1EC15F]">+Rp.50.000</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
