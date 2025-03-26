import Link from "next/link";
import styles from "../../../app/[lng]/terms_privacy/page.module.scss";
import DividerLine from "../dividers/DividerLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import DividerThiccRed from "../dividers/DividerThiccRed";
import Image from "next/image";
import WarlockJa from "../../../public/images/warlockja.webp";
import { TFunction } from "i18next";

export default function About({ t }: { t: TFunction<string, undefined> }) {
  return (
    <section className={styles.tcSection}>
      <h1>{t("title")}</h1>
      <DividerThiccRed />
      <ul>
        <li>{t("disclaimer")}</li>
        <li>
          {t("links")}{" "}
          <div>
            <Link href="https://github.com/WarlockJa/ecommerce" target="_blank">
              <FontAwesomeIcon className={styles.faIcon} icon={faGithub} />
            </Link>
          </div>
        </li>
        <li>
          {t("author")}
          <div className={styles.linkWrapper}>
            <Link
              className={styles.link}
              href="https://warlockja.com"
              target="_blank"
            >
              https://warlockja.com
            </Link>
            <Image
              className={styles.linkImage}
              src={WarlockJa}
              alt="https://warlockja.com"
            ></Image>
          </div>
        </li>
      </ul>
      <DividerLine />
    </section>
  );
}
