// const reviews = [
//   {
//     name: "Juan Miguel",
//     logo: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg",
//     text: "Ken captured our wedding with so much heart and elegance. We’ll cherish these photos forever!",
//   },
//   {
//     name: "JOVÉ Studio",
//     logo: "https://cdn.pixabay.com/photo/2016/10/18/05/16/woman-1749355_960_720.jpg",
//     text: "His editorial work elevated our spring collection. Brilliant creative direction and execution.",
//   },
//   {
//     name: "RH Legal",
//     logo: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
//     text: "Professional, efficient, and truly understands how to portray corporate identity through portraits.",
//   },
// ];

"use client";
import styles from "./ReviewSlider.module.css";
import { useState } from "react";

const reviews = [
  {
    name: "Clara & Miguel",
    logo: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg",
    text: "Ken captured our wedding with so much heart and elegance. We’ll cherish these photos forever!",
  },
  {
    name: "JOVÉ Studio",
    logo: "https://cdn.pixabay.com/photo/2016/10/18/05/16/woman-1749355_960_720.jpg",
    text: "His editorial work elevated our spring collection. Brilliant creative direction and execution.",
  },
  {
    name: "RH Legal",
    logo: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
    text: "Professional, efficient, and truly understands how to portray corporate identity through portraits.",
  },
  {
    name: "Luma Brand",
    logo: "https://cdn.pixabay.com/photo/2019/06/01/21/04/face-painting-4245033_1280.jpg",
    text: "Creative, responsive and collaborative from start to finish. The photos are stunning.",
  },
  {
    name: "Fabi & Noah",
    logo: "https://cdn.pixabay.com/photo/2016/10/26/07/56/wedding-1770860_960_720.jpg",
    text: "Working with Ken felt effortless. He made us comfortable and the results were amazing.",
  },
];

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prev = () => {
    setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setActiveIndex((activeIndex + 1) % reviews.length);
  };

  const getVisibleIndexes = () => {
    const left = (activeIndex - 1 + reviews.length) % reviews.length;
    const center = activeIndex;
    const right = (activeIndex + 1) % reviews.length;
    return [left, center, right];
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <section className={styles.carousel}>
      <h2 className={styles.title}>
        <span className={styles.decorate}>What</span> Clients Are Saying
      </h2>

      <div className={styles.wrapper}>
        <button className={`${styles.button} ${styles.left}`} onClick={prev}>
          ←
        </button>

        <div className={styles.cards}>
          {visibleIndexes.map((i, pos) => (
            <div
              key={i}
              className={`${styles.card} ${
                pos === 1 ? styles.active : styles.inactive
              }`}
            >
              <img
                src={reviews[i].logo}
                alt={reviews[i].name}
                className={styles.avatar}
              />
              <p className={styles.text}>"{reviews[i].text}"</p>
              <p className={styles.name}>— {reviews[i].name}</p>
            </div>
          ))}
        </div>

        <button className={`${styles.button} ${styles.right}`} onClick={next}>
          →
        </button>
      </div>
    </section>
  );
}
