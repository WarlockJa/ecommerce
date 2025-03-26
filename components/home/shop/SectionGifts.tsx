import styles from "../../../app/[lng]/shop/page.module.scss";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import { TFunction } from "i18next";
import { ItemType } from "@/index";

export default function SectionGifts({
  t,
  itemsData,
}: {
  t: TFunction<string, undefined>;
  itemsData: ItemType[];
}) {
  return (
    <Fragment>
      <h1>{t("section-gifts-header")}</h1>
      <p>{t("section-gifts-p")}</p>
      <DividerThiccRed />
      <div className={styles.smallImageGrid}>
        <GridImage item={itemsData[7]} priceTag={t("shop")} currency="$" />
        <GridImage item={itemsData[9]} priceTag={t("shop")} currency="$" />
        <GridImage item={itemsData[8]} priceTag={t("shop")} currency="$" />
      </div>
      <div className={styles.largeImageGrid}>
        <GridImage item={itemsData[10]} priceTag={t("shop")} currency="$" />
        <GridImage item={itemsData[15]} priceTag={t("shop")} currency="$" />
        <GridImage item={itemsData[13]} priceTag={t("shop")} currency="$" />
      </div>
    </Fragment>
  );
}
