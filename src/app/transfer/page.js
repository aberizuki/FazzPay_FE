"use client";

import Navigation from "../component/navigation";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Transfer() {
  const router = useRouter();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/auth/users`)
      .then((result) => {
        console.log(result.data.data);
        setUserData(result.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex h-[100vh] justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[80vh]">
          <Navigation />
        </section>
        <section className="w-[100vh] mx-[10px]">
          <div className="bg-white rounded-xl drop-shadow-xl">
            <div className="p-5 w-[100%]">
              <h1 className="py-[10px] font-bold">Search Recevier</h1>
              <input
                placeholder="Search Recivier Here"
                className="w-[100%] rounded-xl bg-[#3A3D42] bg-opacity-[10%] px-[10px] h-[60px] mb-7"
              />
              {userData?.map((index) => {
                return (
                  <>
                    <div
                      key={index.id}
                      onClick={() => router.push(`/transfer/${index.id}`)}
                      className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-6 h-[100px]"
                    >
                      <div className="flex items-center">
                        <Image
                          className="rounded-xl mr-2"
                          src="/runrun.png"
                          width={60}
                          height={60}
                          alt=""
                        />
                        <div className="mx-[10px]">
                          <div>{index.name}</div>

                          <div className="text-[#7A7886] text-[13px]">
                            {index.phone ? index.phone : "No phone registered"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
