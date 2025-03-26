import styles from "./page.module.scss";
import Image from "next/image";
import GenericLogo1 from "../../public/images/genericcompany1.png";
import GenericLogo3 from "../../public/images/genericcompany3.png";
import GenericLogo4 from "../../public/images/genericcompany4.png";
import GenericLogo2 from "../../public/images/genericcompany2.png";
import GenericLogo5 from "../../public/images/genericcompany5.png";
import { TFunction } from "i18next";

const testimonialItems = [
  {
    testimonial: "testimonial1",
    src: GenericLogo1,
    width: 432,
    height: 244,
    alt: "Generic company one",
  },
  {
    testimonial: "testimonial2",
    src: GenericLogo2,
    width: 399,
    height: 244,
    alt: "Generic company two",
  },
  {
    testimonial: "testimonial3",
    src: GenericLogo3,
    width: 432,
    height: 255,
    alt: "Generic company three",
  },
  {
    testimonial: "testimonial4",
    src: GenericLogo4,
    width: 419,
    height: 263,
    alt: "Generic company four",
  },
  {
    testimonial: "testimonial5",
    src: GenericLogo5,
    width: 432,
    height: 231,
    alt: "Generic company five",
  },
];

export default function Testimonials({
  t,
}: {
  t: TFunction<string, undefined>;
}) {
  return (
    <div className={styles.testimonials}>
      {testimonialItems.map((item, index) => {
        return (
          <div key={"testimonial" + index} className={styles.testimonial}>
            <p>{t(item.testimonial)}</p>
            <Image
              className={styles.logo}
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
            />
          </div>
        );
      })}
    </div>
  );
}
