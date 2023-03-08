import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section id="product" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-2-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        accumsan condimentum aliquam. Praesent pharetra venenatis felis, eu
        pulvinar tellus condimentum vitae
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
