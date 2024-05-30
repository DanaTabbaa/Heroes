import React, { FC } from "react";
import imagePng from "@/images/sections/3.jpg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { EventPHOTOS } from "../constant";
import SectionSliderIdolLand from "@/components/SectionSliderIdolLand";
import { TaxonomyType } from "@/data/types";



export interface SectionHeroProps {
  className?: string;
}

const Event: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczPZgC3XFA7Y3jUDSJ20OayP2uERZUk2Alu-lM9Yd_IOiVeupzy6gn4G4PH7zqW7DublMPOAJhSHg91x1DEGKsTHkwjTrYPuXqwZCP5vjiXZ_Crodsy9tEilpVud_fi0UEllI79II2ZUX6PiL91Bj6bb=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczPDBgwOqJHZSyPHrNiwq7XY4Mq6vYvPELGMOsL3njxv7TmcLjFXYWhxldKapi34nlwaHYjE3xFzimfYs_lAjZiZSDme_1R6ZDJ1VIVhl00Rff7nFa93DjZibPGgezFEtH_ed59XnUUUUeAVXIgtbmnm=w615-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczNQkUOmZruOHNXqcUcYQ_G4IeOE5_VMjfNPdapc3cB6hXH2ayz731Q_Iix6pZZelyQU3f0OpjazcuMtNX2eceu7WQe8KMO58VgDmMU0C65ipm-DDuUBaOQ758wjV9wFWJkZ6Iaux-mjpYBKQl6oAqab=w1435-h923-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczOP6rz9Tp__FDtoQBSw3HHWf2o3o--3Qji23d6Cr3fTgMBt6FdBGdxOWMUY_9vKTU15lh7I20xQA4WT20yZ1QHfHO8fUpiFC6XWMCQrdSFGpysS0_j_z7QJ1ufvTBHj1X8iFWlTAUXFqkKyZoxH_iWh=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczNC68vUsdEVJYYc9DWlAQtzxnWhb8wIXD5GRcMSJ6SPhVEoK_opqMC2B2_3ELTnKUJjCc43NXy1lea7AHGhgU2eYBZ3Ko8jl03ylY2Bbq7FfeWvmfurv49CuDXR5cyGClePM7b_kln9F3t9WY-C0riQ=w1330-h923-s-no-gm?authuser=0',
  },

];

const SectionEvent: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div  className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10  xl:pr-14 lg:mr-10 xl:mr-0" style ={{ marginTop: '180px'}}>
          <h2 className="font-medium  text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
          Event hall
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
          Event hall a station to meet children's various celebrations, from birthdays to other celebrations that carry unforgettable memories.
By designing huge hall decorations that suit all these occasions
The presence of a specialized team to carry out all preparations.
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
          categories={Event}
        />
        </div>
      </div>

      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={EventPHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {EventPHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
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

export default SectionEvent;
