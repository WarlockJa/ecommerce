import About from "@/components/home/termsprivacy/About";
import Acknowledgements from "@/components/home/termsprivacy/Acknowledgements";
import { paramsType } from "@/index";
import styles from "./page.module.scss";
import { useTranslation } from "@/app/i18n";

export default async function TermsPrivacy({ params: { lng } }: paramsType) {
  const [{ t: tAbout }, { t: tAcknowledgements }] = await Promise.all([
    await useTranslation(lng, "about"),
    await useTranslation(lng, "acknowledgements"),
  ]);

  return (
    <section className={styles.termsConditions}>
      <About t={tAbout} />
      <Acknowledgements t={tAcknowledgements} />
    </section>
  );
}
