import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

function navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-transparent md:px-[100px] xl:px-[250px] fixed bg-white w-full z-10">
      <Link href={"/"}>
        {/* <Image
          width={120}
          height={50}
          src={"/logo.png"}
          alt=""
          className="m-1"
        ></Image> */}
        <p>Animecik</p>
      </Link>
      <div className="flex gap-3">
        <Input/>
        <Button>Search</Button>
      </div>
    </div>
  );
}

export default navbar;
