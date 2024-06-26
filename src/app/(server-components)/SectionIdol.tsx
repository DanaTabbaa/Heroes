import React, { FC } from "react";
import imagePng from "@/images/sections/3.jpg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { IdolPHOTOS } from "../constant";
import SectionSliderIdolLand from "@/components/SectionSliderIdolLand";
import { TaxonomyType } from "@/data/types";



export interface SectionHeroProps {
  className?: string;
}
const Idol: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczNQbdX3nSorQkl1YY7Ay8X6IlW7bEvK2W63Kap3kNuUf_9xZpb9jEbu7Xxr2XmqIhuLsBr_eXuXWip-K_iuXWHIf1UYYZKKviEORKHMu1mvIvI_5TJ_kWBPK4tbB5GGjBwLqYeYnhNIWmh2X-frJBsZ=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczM-p1n8FRZUA1CZczTz16Dn4RVLzDx04kiHC-dc0bewggj9jnp3_AkMnS2u8kLqPETHKo5JFia91qdoAq0QHJ-l5zFqbpEOlQBGMW0D4Qhk7uaXomk2XBZ7bOPwP0SqWwxspleR9VrOPtjOH6WOzOtm=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczM4cgmrqCLugftUC2m_3k_fZToszS32e5RAfAtcm-IIAdQhciupo19YFXZ3kU6SGMfvoX4i4eUv-eMQFgM3_GZD3ZzIOa9LFDzkZuO1fbhJS-e9pTFJGWWOBjYvj7REPapsmPr7uboJhY7C4zTzOOsV=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczPp03tEj9eVJeao5gyJo96RgxCf-GlNKpaBocqYbT71MBbmki6hyUhyKaetf5copgNAhl15V13xLsQlc8b-3oE4y-Tl1g9i42Hr1zS_jZSXtj5ojsfjF-KmqqMMutmifQGbOWTZOoH3CAJcTwZmo0Sf=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/AP1GczMhTnpj9ZARg-iPECGcKifntL89bCwRBXpdeQQlVeYagfwoN52GX7jl_upFQFbSn02M6XXq3kzFppZ0fBkRpoHfYa5Ps8pDhTHhyd3OdL_BwkDW84kE3hDjCN9wJXRahWtw5KnaVaFxHjbnL4ScaNUz=w1384-h923-s-no-gm?authuser=0',
  },

];

const SectionIdol: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div  className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10  xl:pr-14 lg:mr-10 xl:mr-0" style ={{ marginTop: '180px'}}>
          <h2 className="font-medium  text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
          Idol Lanad
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
          Idol land Lounge is based on the idea of ​​developing talent and motivating them
Smart devices for an hour or two, as the child connects to the network via 8
Sections, and each section helps develop a different talent in the child.
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
          categories={Idol}
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
              src={IdolPHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {IdolPHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
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

export default SectionIdol;
