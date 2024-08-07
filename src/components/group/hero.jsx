import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function hero() {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold  mb-4 text-center md:text-left">
              Tonton anime favoritmu
            </h1>
            <p className="text-xl mb-6 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button className="neo shadow-neo neo-hover">
              Get Started
            </Button>
          </div>
          <div className="w-full md:w-auto mb-10">
            <Card className="neo shadow-neo">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
              </CardContent>
            </Card>
            <Card className="neo shadow-neo ">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
              </CardContent>
            </Card>
            <Card className="neo shadow-neo">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Asembeere</h2>
                <p>Konten card Anda di sini.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
