import React, { useState } from "react";
import "./square.css";
import ImageToggleButton from "./imagetogglebutton";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";
import p7 from "./assets/p7.png";
import p8 from "./assets/p8.png";
import p9 from "./assets/p9.png";
import p10 from "./assets/p10.png";
import p11 from "./assets/p11.png";
import p12 from "./assets/p12.png";
import p13 from "./assets/p13.png";
import p14 from "./assets/p14.png";
import p15 from "./assets/p15.png";
import p16 from "./assets/p16.png";
import p17 from "./assets/p17.png";
import p18 from "./assets/p18.png";

export default function Square() {
  return (
    <>
      <div>
        <ImageToggleButton firstImage={p1} secondImage={p2} />
        <ImageToggleButton firstImage={p3} secondImage={p4} />
        <ImageToggleButton firstImage={p5} secondImage={p6} />
      </div>
      <div>
        <ImageToggleButton firstImage={p7} secondImage={p8} />
        <ImageToggleButton firstImage={p9} secondImage={p10} />
        <ImageToggleButton firstImage={p11} secondImage={p12} />
      </div>
      <div>
        <ImageToggleButton firstImage={p13} secondImage={p14} />
        <ImageToggleButton firstImage={p15} secondImage={p16} />
        <ImageToggleButton firstImage={p17} secondImage={p18} />
      </div>
    </>
  );
}
