import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex py-5 ">
      <div className="block h-[70%] ">
        <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
          <Image
            src={"/grid.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <Link href="/">
            <button className="">Dashboard</button>
          </Link>
        </div>
        <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
          <Image
            src={"/arrow-up.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <Link href="/transferConfirm">
            <button className="">Transfer</button>
          </Link>
        </div>
        <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
          <Image
            src={"/plus.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <button className="">Top Up</button>
        </div>
        <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
          <Image
            src={"/user.svg"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <Link href="/profile">
            <button className="">Profile</button>
          </Link>
        </div>
        <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4] self-end">
          <Image
            src={"/log-out.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <button className="">Log Out</button>
        </div>
      </div>
    </div>
  );
}
