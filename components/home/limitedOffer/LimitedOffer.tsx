import styles from './page.module.scss'
import { useTranslation } from '@/app/i18n'
import { LanguagePropsType } from '@/index'

export default async function LimitedOffer(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'limitedOffer')
    return (
        <section className={styles.limitedOffer}>{t('offer')} <span className={styles.shopLink}><a href='/shop#gifts'>{t('shoplink')}</a></span></section>
    )
}
