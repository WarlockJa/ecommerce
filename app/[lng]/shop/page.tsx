import styles from "./page.module.scss";
import { paramsType } from "@/index";
import SectionTop from "@/components/home/shop/SectionTop";
import SectionBundles from "@/components/home/shop/SectionBundles";
import SectionFriendsFamily from "@/components/home/shop/SectionFriendsFamily";
import SectionGifts from "@/components/home/shop/SectionGifts";
import { useTranslation } from "@/app/i18n";
import getStoreItems from "@/components/utils/getStoreItems";

export default async function Shop({ params: { lng } }: paramsType) {
  const [
    { t: tSectionTop },
    { t: tSectionBundles },
    { t: tSectionFriendsFamily },
    { t: tSectionGifts },
  ] = await Promise.all([
    useTranslation(lng, "shop-section-top"),
    useTranslation(lng, "shop-section-bundles"),
    useTranslation(lng, "shop-section-friendsfamily"),
    useTranslation(lng, "shop-section-gifts"),
  ]);

  const itemsData = await getStoreItems();

  return (
    <section className={styles.shop}>
      <SectionTop t={tSectionTop} itemsData={itemsData} />
      <SectionBundles t={tSectionBundles} itemsData={itemsData} />
      <SectionFriendsFamily t={tSectionFriendsFamily} itemsData={itemsData} />
      <SectionGifts t={tSectionGifts} itemsData={itemsData} />
    </section>
  );
}
