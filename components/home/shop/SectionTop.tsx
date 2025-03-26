import styles from "../../../app/[lng]/shop/page.module.scss";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import DividerLine from "../dividers/DividerLine";
import { TFunction } from "i18next";
import { ItemType } from "@/index";

export default function SectionTop({
  t,
  itemsData,
}: {
  t: TFunction<string, undefined>;
  itemsData: ItemType[];
}) {
  return (
    <Fragment>
      <h1>{t("section-top-header")}</h1>
      <DividerThiccRed />
      <p>{t("section-top-p")}</p>
      <div className={styles.largeImageGrid}>
        <GridImage item={itemsData[14]} priceTag={t("shop")} currency="$" />
        <GridImage item={itemsData[0]} priceTag={t("shop")} currency="$" />
      </div>
      <div className={styles.smallImageGrid}>
        <GridImage
          item={itemsData[2]}
          elId="trending1"
          priceTag={t("shop")}
          currency="$"
        />
        <GridImage
          item={itemsData[3]}
          elId="trending2"
          priceTag={t("shop")}
          currency="$"
        />
        <GridImage item={itemsData[12]} priceTag={t("shop")} currency="$" />
      </div>
      <DividerLine />
    </Fragment>
  );
}
