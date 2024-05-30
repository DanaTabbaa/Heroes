import React, { FC } from "react";
import imagePng from "@/images/sections/3.jpg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { SpacePlanetImg } from "../constant";
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
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczMmYAHXSlHa3uraZfk2jN3ZV6ft0OwTM0VIF59f6iZy9wvumAWpnkv4-EQFPLMk57G6BuVhX6QExMddqelRnycyv6oAn4i-rd2n3_DkVfmjNf2YQqkxNI632xOxH-7_6EKg2cqw3Ewfq0WDKvwujl_N=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczNVHLRkDdZXMze4jsQlsJqhUdlyU8z19GeVHMcsZo9h8tOs_r7e3-7skaqqPljfCl7gSc59Ly4SiFbUG9Q2ztMkURVLESahUFBamSW5DB74Hh_Wy5OgNhAzq9H8cpExl5LuzpKXhkWvsFpyMj3XzBuk=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczMbRReGm8BrgALS2GXaFkQAJ1NQeG3uZdggOHHvszfcgsQ44yl1c32gRPqvDPR897-ygd4hqQ2Uytl8e-YulM0sEJ377A4sx9K50GlNAMYoW0CFoaKPPYjYHM2THy_1hiFulE_4iMQIxo9PHTI5glob=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczMuS34xjAx-MGJ5WYJFyAIIqwXFrQYPewtUPN6coqg5mm4sGOHpeCNlWh4_KcznwWbfn7yszKfpreFNphJb2WRqDL4HPWl_YYf8WfJOsOHycnjdvWO-vC4sr4w4tvVms4hDf-Q7TWjw-sdMSm7DCwTo=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczOFQtFLjYYgqcRFGcj9pQLAIt8jbuZt0RpJihtjizTgp7rPo9S8m83qu6ciXkuNgffYbqEZ4t7kcjRCbMEGeGlJlsMmXyt0saXhcbGV9-QKJhLk5temcyRQUrNyK_C3S6FlVSTTYcGcQ7B4P9UrMv6z=w1384-h923-s-no-gm?authuser=0',
  },
  

];

const SpacePlanet: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div  className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10  xl:pr-14 lg:mr-10 xl:mr-0" style ={{ marginTop: '180px'}}>
          <h2 className="font-medium  text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
          Space Planet
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
          Space Planet was opened to meet the needs of young people and provide them with an enjoyable time. It is a unique galaxy consisting of seven
Multiple planets, each planet features a unique entertainment service
The planets are:
Planet trampoline, planet octopus, planet bee, planet cars
Collision, video game planet, VR game planet, cinema planet
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
              src={SpacePlanetImg[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {SpacePlanetImg.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
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

export default SpacePlanet;
