import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

function navbar() {
  return (
    
 <div className="container flex justify-between w-full mx-auto px-4 my-12 z-50 ">
      <Link href="/">
        {/* <Image
          width={120}
          height={50}
          src="/logo.png"
          alt="Animecik Logo"
          className="m-1"
        /> */}
        <p className="text-xl font-semibold">Animecik</p>
      </Link>
      <div className="flex gap-3">
        <Input />
        <Button>Search</Button>
      </div>
    </div>
  );
}

export default navbar;
