import React, { FC } from "react";
import imagePng from "@/images/sections/3.jpg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { ClanPHOTOS } from "../constant";
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
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczOzOO0VSOdzlC_zjXGDF1qB1TB73BbwEBOKrjWRxrhJ3ecD-9ECS3Zz0AA0MLOjcWfK-fDtkgC5L8xBfSMlxdZqcVsAaA0RkvF_TQSUa31dGsnHveUha8aNzg7DkObe2X2dXHKeSvNONT1FJIMSj6h7=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczN6-E8WAHd6ZCWbNmhD2z9z6vrytA4yiRebv2eGG1CjstrPAAZCGmKdsJo275F4QMAP4XDZlKjhyLGvTsAGwN1QTBcQ4D8ruQjbTBbQFjxkrt6gI7r7rAlB9alLH97xA4IhvPoO_tSDp4Vv_nvrEbE7=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczNyB0A_2O2KTJrogI0eopjHR3vYySoOd7TjP_-m_vQF_TbRQ6q0LSZgRj2OQ9MHgtVeIsXmvecg348oQr0LAMgcyUZ8JkfUhCN9c8z6ozkmVHzg6BaTAsx2qlfHP5IogTCxlo-YFUapjQe2QJLrYxIf=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczN4n7nMEIr7BV7NPA7uUy8Naqp7XE5qgBKptEy9P9FOEGsfcJjJaPF7eemH8Zl6Y_0R8slLxct3B956O22kza5-iFgyvuUPqcfCJlF3WjWsU0T7Ge5ctgvhUWBn1sJkvIS3g8fD9FXEMNkaqBlQm4GK=w1384-h923-s-no-gm?authuser=0',
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
          Clan Station
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
          The “Callen Station” hall was opened to meet the needs of our youth
Providing a place equipped with the latest PlayStation gaming devices, so that everyone can
Enjoy their enchanting experiences in the world of games.
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
              src={ClanPHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {ClanPHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
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
