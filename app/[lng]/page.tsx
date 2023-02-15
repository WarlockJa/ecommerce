import styles from './page.module.scss'
import Image from 'next/image'
import HeroPageImage from '../../public/images/Maurício_Mascaro_Man_Drinking_Water.jpg'
import Testimonials from '@/components/home/Testimonials'
import Trending from '@/components/home/Trending'
import DividerLine from '@/components/home/dividers/DividerLine'
import Link from 'next/link'
import { useTranslation } from '../i18n'
import { paramsType } from '@/index'

export default async function Home({ params: { lng } }: paramsType) {
  const { t } = await useTranslation(lng, 'hero')
  return (
    <div className={styles.home}>
      <div className={styles.heroImageOverlay}>
        <div className={styles.heroImageOverlayTitle}>&ldquo;{t('quote')}&rdquo;</div>
        <div className={styles.heroImageOverlayShopSection}>
          <Link className={styles.heroImageOverlayShopLink} href='/shop'>{t('shoplink')}</Link>
        </div>
        <div className={styles.heroImageOverlayCredentials}>
          <Link href='https://www.pexels.com/@maumascaro/'>{t('credentials')}</Link>
        </div>
      </div>
      <Image
        className={styles.heroImage}
        src={HeroPageImage}
        width={1920}
        height={1280}
        alt={t('credentials')}
        priority
      />
      {/* @ts-expect-error Server Component */}
      <Testimonials lng={lng} />
      <DividerLine />
      {/* @ts-expect-error Server Component */}
      <Trending lng={lng} />
    </div>
  )
}
