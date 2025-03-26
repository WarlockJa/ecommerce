import { ItemType } from "@/index";
import styles from "../../app/[lng]/shop/page.module.scss";
import DividerThiccRed from "./dividers/DividerThiccRed";
import GridImage from "./shop/GridImage";
import { TFunction } from "i18next";

export default function Trending({
  t,
  itemsData,
}: {
  t: TFunction<string, undefined>;
  itemsData: ItemType[];
}) {
  return (
    <section className={styles.shop}>
      <h1>{t("trendingheader")}</h1>
      <DividerThiccRed />
      <div className={styles.smallImageGrid}>
        <GridImage
          item={itemsData[2]}
          priceTag={t("pricetag")}
          href="/shop#trending1"
          currency="$"
        />
        <GridImage
          item={itemsData[3]}
          priceTag={t("pricetag")}
          href="/shop#trending2"
          currency="$"
        />
        <GridImage
          item={itemsData[4]}
          priceTag={t("pricetag")}
          href="/shop#trending3"
          currency="$"
        />
      </div>
      <div className={styles.largeImageGrid}>
        <GridImage
          item={itemsData[5]}
          priceTag={t("pricetag")}
          href="/shop#trending4"
          currency="$"
        />
      </div>
    </section>
  );
}
