import styles from "../../../app/[lng]/shop/page.module.scss";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import DividerLine from "../dividers/DividerLine";
import { TFunction } from "i18next";
import { ItemType } from "@/index";

export default function SectionBundles({
  t,
  itemsData,
}: {
  t: TFunction<string, undefined>;
  itemsData: ItemType[];
}) {
  return (
    <Fragment>
      <h1>{t("section-bundles-header")}</h1>
      <DividerThiccRed />
      <p>{t("section-bundles-p")}</p>
      <div className={styles.largeImageGrid}>
        <GridImage item={itemsData[16]} priceTag={t("shop")} currency="$" />
      </div>
      <div className={styles.smallImageGrid}>
        <GridImage item={itemsData[6]} priceTag={t("shop")} currency="$" />
        <GridImage item={itemsData[1]} priceTag={t("shop")} currency="$" />
        <GridImage
          item={itemsData[4]}
          elId="trending3"
          priceTag={t("shop")}
          currency="$"
        />
      </div>
      <DividerLine />
    </Fragment>
  );
}
