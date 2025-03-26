import { useStore } from "@/src/store";
import Link from "next/link";
import styles from "../../../app/[lng]/terms_privacy/page.module.scss";
import DividerLine from "../dividers/DividerLine";
import DividerThiccRed from "../dividers/DividerThiccRed";
import { TFunction } from "i18next";

export default function Acknowledgements({
  t,
}: {
  t: TFunction<string, undefined>;
}) {
  const ItemsData = useStore.getState().items;

  const parseAuthor = (authorString: string) => {
    return authorString
      ? authorString
          .split(" ")
          .reduce((result, item, index) => (index > 1 ? result + item : ""), "")
      : "";
  };

  return (
    <section className={styles.tcSection}>
      <h1>{t("title")}</h1>
      <p>{t("p")}</p>
      <DividerThiccRed />
      <ul className={styles.acknowledgementsList}>
        <li className={styles.acknowledgementsItem}>
          <div>Maurício Mascaro</div>
          <div>
            <Link href="https://www.pexels.com/@maumascaro/">
              https://www.pexels.com/@maumascaro/
            </Link>
          </div>
        </li>
        {ItemsData.map((item, index) => {
          return (
            <li
              className={styles.acknowledgementsItem}
              key={"acknowledgements" + index}
            >
              <div>{parseAuthor(item.credentials)}</div>
              <div>
                <Link href={item.credHref}>{item.credHref}</Link>
              </div>
            </li>
          );
        })}
        <li className={styles.acknowledgementsItem}>
          <div>{t("translator")}</div>
          <div>
            <Link href="https://chat.openai.com/chat">OpenAI</Link>
          </div>
        </li>
      </ul>
      <DividerLine />
    </section>
  );
}
