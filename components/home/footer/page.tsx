import Link from 'next/link'
import styles from './page.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from '@/app/i18n'
import { LanguagePropsType } from '@/index'

export default async function Footer(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'footer')
    const currentYear = new Date().getFullYear()
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footerShop}>
                <Link href='/shop'>{t('shoplink')}</Link>
            </div>
            <div className={styles.footerFeedback}>
                <Link href='/feedback'>{t('sendfeedback')}</Link>
            </div>
            <div className={styles.footerCopyright}>© {currentYear} {t('rights')}</div>
            <div className={styles.footerSocials}>
                <Link href="https://www.facebook.com/Bottlô" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link href="https://www.youtube.com/c/Bottlô" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link>
                <Link href="https://www.instagram.com/Bottlô" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href="https://twitter.com/Bottlô?lang=en" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link>
            </div>
            <div className={styles.footerLegal}>
                <Link href="/terms_privacy">{t('terms')}</Link>
            </div>
        </footer>
    )
}
