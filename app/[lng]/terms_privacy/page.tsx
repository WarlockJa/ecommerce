import About from '@/components/home/termsprivacy/About'
import Acknowledgements from '@/components/home/termsprivacy/Acknowledgements'
import { paramsType } from '@/index'
import styles from './page.module.scss'

export default function TermsPrivacy({params: { lng } }: paramsType) {
  return (
    <section className={styles.termsConditions}>
      {/* @ts-expect-error Server Component */}
      <About lng={lng} />
      {/* @ts-expect-error Server Component */}
      <Acknowledgements lng={lng} />
    </section>
  )
}
