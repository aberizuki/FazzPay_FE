"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Login() {
  const id = Cookies.get("@userId");
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://fazzpaybe-production.up.railway.app/api/v1/auth/users/${id}`
      )
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white p-10 rounded-b-[20px] drop-shadow-xl">
      <div className="flex justify-between w-[100%] px-10">
        <div className="self-center">
          <Link href="/home">
            <Image src="/logo-blue.png" width={100} height={80} alt="" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="px-2">
            <Image
              className="rounded-xl"
              src="/shinjijo.jpg"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="px-2">
            <div className="text-[#3A3D42] font-bold">{dataUser?.name}</div>
            <div className="">
              {dataUser?.phone ? dataUser?.phone : "No phone registered"}
            </div>
          </div>
          <div className="px-2">
            <Image src="/bell.png" width={23} height={23} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
