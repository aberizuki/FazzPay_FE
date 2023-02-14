"use client";

import axios from "axios";
import Link from "next/link";
import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const id = JSON.parse(localStorage.getItem("@login"))?.user.id;
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/auth/users/${id}`)
      .then((result) => {
        console.log(result.data.data);
        setUserDetail(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[100vh]">
          <Navigation />
        </section>
        <section>
          <div className="p-5 mr-5  bg-white rounded-xl h-[100%] drop-shadow-xl w-[50vw]">
            <div className="p-[40px]">
              <div className="flex justify-center">
                <Image
                  className=" rounded-full"
                  src={"/shinjijo.jpg"}
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex justify-center p-[10px]">
                {/* <Image src={"/Vector.png"} width={15} height={10} /> */}
                <button className="text-[10px] text-[#7A7886]">
                  Edit Photo
                </button>
              </div>
              <div className="mb-[5px]">
                <h1 className="text-center text-[40px]">{userDetail.name}</h1>
                <h2 className="text-center text-[#7A7886]">
                  {userDetail.phone}
                </h2>
              </div>
            </div>
            <div>
              <div className="font-bold mb-7">Personal Information</div>
              <div className="mb-10 text-[#7A7886] text-[12px]">
                We got your personal information from the sign <br /> up
                proccess. If you want to make changes on <br /> your
                information, contact our support.
              </div>
            </div>
            <form>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Full Name
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[100%]"
                    id="name"
                    type="text"
                    placeholder="Tamura Hono"
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Phone
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[100%]"
                    id="phone"
                    type="number"
                    placeholder="+62 813-9387-7946"
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Verified Email
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[100%]"
                    id="name"
                    type="email"
                    placeholder="honotamura@gmail.com"
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Password
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[100%]"
                    id="name"
                    type="password"
                    placeholder="*********"
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Re-enter Password
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[100%]"
                    id="name"
                    type="password"
                    placeholder="*********"
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="w-[100%]">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Pin
                  </span>
                  <input
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[100%]"
                    id="name"
                    type="password"
                    placeholder="*****"
                  />
                </div>
              </div>
              <div className="flex m-10 justify-center">
                <button className="bg-[#6379F4] text-white rounded-lg h-[50px] w-[55%] ">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
