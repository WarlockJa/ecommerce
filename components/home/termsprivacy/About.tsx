import { useTranslation } from "@/app/i18n"
import { LanguagePropsType } from "@/index"
import Link from "next/link"
import styles from '../../../app/[lng]/terms_privacy/page.module.scss'
import DividerLine from "../dividers/DividerLine"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import DividerThiccRed from "../dividers/DividerThiccRed"
import Image from "next/image"
import WarlockJa from '../../../public/images/warlockja.webp'

export default async function About(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'about')

    return (
        <section className={styles.tcSection}>
            <h1>{t('title')}</h1>
            <DividerThiccRed />
            <ul>
                <li>{t('disclaimer')}</li>
                <li>{t('links')} <div><Link href='https://github.com/WarlockJa/ecommerce' target='_blank'><FontAwesomeIcon className={styles.faIcon} icon={faGithub}/></Link></div></li>
                <li>{t('author')} 
                    <div className={styles.linkWrapper}>
                        <Link className={styles.link} href='https://warlockja.ru' target='_blank'>https://warlockja.ru</Link>
                        <Image className={styles.linkImage} src={WarlockJa} alt='https://warlockja.ru'></Image>
                    </div>
                </li>
            </ul>
            <DividerLine />
        </section>
    )
}
