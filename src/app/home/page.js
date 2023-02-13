import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex h-[100vh] justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[80vh]">
          <Navigation />
        </section>
        <section className="w-[60vw] h-[100vh]">
          <div className="block sm:flex border-[1px] rounded-xl p-[40px] bg-[#6379F4] w-[100%]">
            <div className="w-[100%]">
              <h1 className="mb-[10px] text-[#FFFFFF]">Balance</h1>
              <h1 className="mb-[10px] text-[#FFFFFF] text-[50px]">
                Rp120.000
              </h1>
              <h1 className="text-[#FFFFFF]">+6282112801436</h1>
            </div>
            <div>
              <button className="text-white font-bold block w-[100%] border-[1px] px-[30px] py-[10px] rounded mb-[50px] bg-[#6379F426] hover:bg-white hover:text-[#6379F4]">
                Transfer
              </button>
              <button className="text-white font-bold block w-[100%] border-[1px] py-[10px] rounded bg-[#6379F426] hover:bg-white hover:text-[#6379F4]">
                Top Up
              </button>
            </div>
          </div>
          <div className="block md:block lg:flex mt-10 justify-between h-[45%]">
            <div className="p-5 mr-5  bg-white rounded-xl h-[100%] w-[100%] drop-shadow-xl">
              <div className="block  ">
                <div className="flex justify-between ">
                  <Image src="/in2.png" width={100} height={100} alt="" />
                  <Image src="/out2.png" width={100} height={100} alt="" />
                </div>
                <div className="px-[30px]">
                  <Image src="/graphic.png" width={250} height={250} alt="" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl drop-shadow-xl w-[100%]">
              <div className="p-5">
                <h1>Transaction History</h1>
                <div className="">
                  <div className="">
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
                          <div className="text-[#7A7886] text-[13px]">
                            Accept
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold text-[#1EC15F]">
                        +Rp.50.000
                      </div>
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
                          <div className="text-[#7A7886] text-[13px]">
                            Accept
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold text-[#1EC15F]">
                        +Rp.50.000
                      </div>
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
                          <div className="text-[#7A7886] text-[13px]">
                            Accept
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold text-[#1EC15F]">
                        +Rp.50.000
                      </div>
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
                          <div className="text-[#7A7886] text-[13px]">
                            Accept
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold text-[#1EC15F]">
                        +Rp.50.000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
