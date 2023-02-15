'use client'
import styles from './page.module.scss'
import DividerLine from '@/components/home/dividers/DividerLine'
import DividerThiccRed from '@/components/home/dividers/DividerThiccRed'
import Link from 'next/link'
import { useTranslation } from '@/app/i18n/client'
import { paramsType } from '@/index'

export default function page({ params: { lng } }:paramsType) {
    // cart cleanup on return from Stripe
    if (typeof window !== "undefined") localStorage.removeItem('ecom-cart')

    const { t } = useTranslation(lng, 'purchase-success')

    return (
        <div className={styles.purchaseSuccess}>
            <h1>{t('header')}</h1>
            <p>{t('flavour-text')}</p>
            <DividerThiccRed />
            <DividerLine />
            <p>{t('disclaimer')} <Link className={styles.Link} href='/feedback'>{t('link')}</Link></p>
        </div>
    )
}
