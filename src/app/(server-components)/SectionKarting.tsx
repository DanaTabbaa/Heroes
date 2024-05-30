import React, { FC } from "react";
import imagePng from "@/images/sections/3.jpg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { KartingPHOTOS } from "../constant";
import SectionSliderIdolLand from "@/components/SectionSliderIdolLand";
import { TaxonomyType } from "@/data/types";



export interface SectionHeroProps {
  className?: string;
}

const Karting: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczMeBODkLF8EGTz8iAGvsrrWIGFlCQEuyEaX4TnEbkWZaQVVP-isnfjugYjQd1C6u1Ime3-XGCCO1TUjSiNC-a8iiuZwkgtKGtJbiDDHNmG86hYE2wdr0XtNMOtD5wsOoSnG80lpmfemIb6qXe7Fhva8=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczP-waYcnfQ-7ysaNL0csBBXDUqrnBGelCPiiYvbv2cyODr4xf9UIzlhqy7e_ZEzsJXAU1lI4U-lTnS4an-8LbHfhuJGrIAwnqytFBDckNzrGLYOz1mjEuPsAoYYDyGBi2p3VMg18Zsf57SCQrSZYxLG=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczPkyzfwM7iSDFyCLzNgmBbT9anWP3R7EpaWqH4AlTJYDSM4S2P3METSotDjtBGZQMwqJlU2hOcTuXHgOp9Am1C8Noy-w6RY6Pa08ARNWPDZfupa-825cSXZhS_TtK_ewHqwNX9NksXzYFgeQ0mIzWTc=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczPV00ZQ4T64ysmF_3ZyFOu2WYMjxdGCksFAy4lGNLMLDKTHKlVYZln0WseYfg-4OzYR0RSStXL-aB60NkH44rWu-35ceDPTRZ_WCp7QUbx6cdeBt812EbqgmJJsxYSeoWOSMzjfZmhAlOyuZXLR4kLA=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczNdRpDxWGXy2bjhmFQYDxDpvOx-O6ITYxFN7yzcvyQwhTrPqyy_WE2FTVCl9RD6k8VIbtVszoinI79ynlS97T3qIym164YKngLC6LcRhzpXiPUZQJThQ6U62Z9hlEQI8L90TDYTGJrainR5gBsY00yR=w1640-h923-s-no-gm?authuser=0',
  },

];

const SectionKarting: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div  className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10  xl:pr-14 lg:mr-10 xl:mr-0" style ={{ marginTop: '180px'}}>
          <h2 className="font-medium  text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
          Karting Station
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
          On April 20, 2022, the karting tracks opened their doors for the first time
A fortified destination for fans of speed driving cars, this track distinguishes itself
With its unique idea in a safe closed space where cars are controlled remotely
The road of a competent official standing outside the track. The track includes three types of
The cars are:
Mini is intended for young ages
Super is intended for the youth category
The double is intended for two passengers, one of whom is driving
          </span>
          <ButtonPrimary href="" sizeClass="px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-grow ">
        <SectionSliderIdolLand
              heading=""
              subHeading=""
          categoryCardType="card5"
          itemPerRow={1}
          categories={Karting}
        />
        </div>
      </div>

      <header className="rounded-md sm:rounded-xl mt-10">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={KartingPHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {KartingPHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item || ""}
                  alt=""
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              />
            </div>
          ))}

        </div>
      </header>
    </div>
  );
};

export default SectionKarting;
