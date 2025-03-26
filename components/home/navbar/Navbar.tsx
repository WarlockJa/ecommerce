import styles from "./page.module.scss";
import Link from "next/link";
import LangaugeSwitch from "@/components/home/navbar/LangaugeSwitch";
import Cart from "@/components/home/navbar/Cart";
import { TFunction } from "i18next";
import { LiteralLanguages } from "@/index";

export default function Navbar({
  t,
  lng,
}: {
  t: TFunction<string, undefined>;
  lng: LiteralLanguages;
}) {
  return (
    <header className={styles.navbar}>
      {/* next/Link component adds "index" to the url on root route change, for whatever reason, and also doesn't go to the top of the page */}
      <a href="/" className={styles.logo}>
        BOTTLÔ
      </a>
      <nav>
        <Link href="/shop">{t("nav-products")}</Link>
        <Link href="/feedback">{t("nav-feedback")}</Link>
        <LangaugeSwitch lng={lng} />
        <Cart lng={lng} />
      </nav>
    </header>
  );
}
