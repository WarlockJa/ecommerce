import styles from "../../../app/[lng]/shop/page.module.scss";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import DividerLine from "../dividers/DividerLine";
import { TFunction } from "i18next";
import { ItemType } from "@/index";

export default function SectionFriendsFamily({
  t,
  itemsData,
}: {
  t: TFunction<string, undefined>;
  itemsData: ItemType[];
}) {
  return (
    <Fragment>
      <h1>{t("section-friendsfamily-header")}</h1>
      <DividerThiccRed />
      <p>{t("section-friendsfamily-p")}</p>
      <div className={styles.largeImageGrid}>
        <GridImage
          item={itemsData[5]}
          elId="trending4"
          priceTag={t("shop")}
          currency="$"
        />
        <GridImage item={itemsData[11]} priceTag={t("shop")} currency="$" />
      </div>
      <DividerLine id="gifts" />
    </Fragment>
  );
}
