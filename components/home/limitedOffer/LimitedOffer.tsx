import { TFunction } from "i18next";
import styles from "./page.module.scss";

export default function LimitedOffer({
  t,
}: {
  t: TFunction<string, undefined>;
}) {
  return (
    <section className={styles.limitedOffer}>
      {t("offer")}{" "}
      <span className={styles.shopLink}>
        <a href="/shop#gifts">{t("shoplink")}</a>
      </span>
    </section>
  );
}
