import styles from './page.module.scss';
import { paramsType } from '@/index';
import SectionTop from '@/components/home/shop/SectionTop';
import SectionBundles from '@/components/home/shop/SectionBundles';
import SectionFriendsFamily from '@/components/home/shop/SectionFriendsFamily';
import SectionGifts from '@/components/home/shop/SectionGifts';

export default async function Shop({ params: { lng } }: paramsType) {

    // we move structure into components because pages do not honour await fetch in layout and cause waterfalls

    return (
        <section className={styles.shop}>
            {/* @ts-expect-error Server Component */}
            <SectionTop lng={lng} />
            {/* @ts-expect-error Server Component */}
            <SectionBundles lng={lng} />
            {/* @ts-expect-error Server Component */}
            <SectionFriendsFamily lng={lng} />
            {/* @ts-expect-error Server Component */}
            <SectionGifts lng={lng} />
        </section>
    )
}
