"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TopUpModal } from "./topup";

export default function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const id = JSON.parse(localStorage.getItem("@login"))?.user.id;

  const router = useRouter();
  return (
    <>
      <div className="flex py-5 ">
        <div className="block h-[70%] ">
          <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
            <Image
              src={"/grid.png"}
              width={20}
              height={20}
              className="mr-[10px]"
              alt=""
            />
            <Link href="/home">
              <button className="hover:text-[#6379F4] hover:font-bold click:font-bold click:text-[#6379F4]">
                Dashboard
              </button>
            </Link>
          </div>
          <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
            <Image
              src={"/arrow-up.png"}
              width={20}
              height={20}
              className="mr-[10px]"
              alt=""
            />
            <Link href="/transfer">
              <button className="hover:text-[#6379F4] hover:font-bold click:font-bold click:text-[#6379F4]">
                Transfer
              </button>
            </Link>
          </div>
          <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
            <Image
              src={"/plus.png"}
              width={20}
              height={20}
              className="mr-[10px]"
              alt=""
            />
            <Link href="/home">
              <button
                // onClick={() => {
                //   setShowModal(true);
                // }}
                className="hover:text-[#6379F4] hover:font-bold click:font-bold click:text-[#6379F4]"
              >
                Top Up
              </button>
            </Link>
          </div>
          <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4]">
            <Image
              src={"/user.svg"}
              width={20}
              height={20}
              className="mr-[10px]"
              alt=""
            />
            <Link href="/profile">
              <button className="hover:text-[#6379F4] hover:font-bold click:font-bold click:text-[#6379F4]">
                Profile
              </button>
            </Link>
          </div>
          <div className="flex p-[20px] hover:border-l-[5px] border-[#6379F4] self-end">
            <Image
              src={"/log-out.png"}
              width={20}
              height={20}
              className="mr-[10px]"
              alt=""
            />
            <button
              onClick={() => {
                alert("You have been logged out");
                localStorage.removeItem("@login");
                router.push("/");
              }}
              className="hover:text-[#6379F4] hover:font-bold click:font-bold click:text-[#6379F4]"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <TopUpModal
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
}
