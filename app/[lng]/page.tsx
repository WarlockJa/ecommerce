import styles from "./page.module.scss";
import Image from "next/image";
import HeroPageImage from "../../public/images/Maurício_Mascaro_Man_Drinking_Water.jpg";
import Testimonials from "@/components/home/Testimonials";
import Trending from "@/components/home/Trending";
import DividerLine from "@/components/home/dividers/DividerLine";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { paramsType } from "@/index";
import getStoreItems from "@/components/utils/getStoreItems";

export default async function Home({ params: { lng } }: paramsType) {
  const [{ t: tHero }, { t: tTestimonials }, { t: tTrending }] =
    await Promise.all([
      useTranslation(lng, "hero"),
      useTranslation(lng, "testimonials"),
      useTranslation(lng, "trending"),
    ]);

  const itemsData = await getStoreItems();

  return (
    <div className={styles.home}>
      <div className={styles.heroImageOverlay}>
        <div className={styles.heroImageOverlayTitle}>
          &ldquo;{tHero("quote")}&rdquo;
        </div>
        <div className={styles.heroImageOverlayShopSection}>
          <Link className={styles.heroImageOverlayShopLink} href="/shop">
            {tHero("shoplink")}
          </Link>
        </div>
        <div className={styles.heroImageOverlayCredentials}>
          <Link href="https://www.pexels.com/@maumascaro/">
            {tHero("credentials")}
          </Link>
        </div>
      </div>
      <Image
        className={styles.heroImage}
        src={HeroPageImage}
        width={1920}
        height={1280}
        alt={tHero("credentials")}
        priority
      />
      <Testimonials t={tTestimonials} />
      <DividerLine />
      <Trending t={tTrending} itemsData={itemsData} />
    </div>
  );
}
