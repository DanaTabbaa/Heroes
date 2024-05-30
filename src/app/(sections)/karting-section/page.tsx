"use client";

import React, { FC } from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionKarting from "../../(server-components)/SectionKarting";


const karting: FC = () => {
  return (
    <main className="nc-PageHome relative overflow-hidden">
    {/* GLASSMOPHIN */}
    <BgGlassmorphism />
    
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      {/* SECTION HERO */}
      <SectionKarting  className="pt-10" />

    </div>
    
 
 
  </main>
  );
};

export default karting;
