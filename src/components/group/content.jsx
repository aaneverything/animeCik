"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import axios from "axios";
import Link from "next/link";

function content() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <div className="container">
        <div className="flex justify-between">
          <h1 className="text-3xl">Ongoing animek</h1>
          <Button className ="">selengkapnya</Button>
        </div>
        <div className="flex flex-row gap-4 flex-wrap mt-5 justify-center content-center">
          <div className="neo shadow-neo w-52">
            <div className="flex flex-col items-center">
              <img
                className="w-28"
                src="https://otakudesu.cloud/wp-content/uploads/2020/06/Jojo-part-4-Sub-Indo.jpg"
                alt=""
              />
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold my-2">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
                <Button className="mt-4 ">tonton sekarang</Button>
              </div>
            </div>
          </div>

          <div className="neo shadow-neo w-52">
            <div className="flex flex-col items-center">
              <img
                className="w-28"
                src="https://otakudesu.cloud/wp-content/uploads/2020/06/Jojo-part-4-Sub-Indo.jpg"
                alt=""
              />
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold my-2">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
                <Button className="mt-4 ">tonton sekarang</Button>
              </div>
            </div>
          </div>

          <div className="neo shadow-neo w-52">
            <div className="flex flex-col items-center">
              <img
                className="w-28"
                src="https://otakudesu.cloud/wp-content/uploads/2020/06/Jojo-part-4-Sub-Indo.jpg"
                alt=""
              />
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold my-2">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
                <Button className="mt-4 ">tonton sekarang</Button>
              </div>
            </div>
          </div>

          <div className="neo shadow-neo w-52">
            <div className="flex flex-col items-center">
              <img
                className="w-28"
                src="https://otakudesu.cloud/wp-content/uploads/2020/06/Jojo-part-4-Sub-Indo.jpg"
                alt=""
              />
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold my-2">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
                <Button className="mt-4 ">tonton sekarang</Button>
              </div>
            </div>
          </div>

          <div className="neo shadow-neo w-52">
            <div className="flex flex-col items-center">
              <img
                className="w-28"
                src="https://otakudesu.cloud/wp-content/uploads/2020/06/Jojo-part-4-Sub-Indo.jpg"
                alt=""
              />
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold my-2">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
                <Button className="mt-4 ">tonton sekarang</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default content;
