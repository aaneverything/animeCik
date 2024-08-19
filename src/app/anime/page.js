import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/group/navbar";
import Footer from "@/components/group/footer";
import Hasil from "@/components/group/hasilSearch";

function page() {
  return (
    <>
      <Navbar />
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
          </div>
      <Footer />
      
    </>
  );
}

export default page;
