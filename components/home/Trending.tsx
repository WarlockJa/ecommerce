import styles from '../../app/[lng]/shop/page.module.scss';
import DividerThiccRed from './dividers/DividerThiccRed';
import { useTranslation } from '@/app/i18n';
import GridImage from './shop/GridImage';
import { useStore } from '@/src/store';
import { LanguagePropsType } from '@/index';

export default async function Trending(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'trending')

    const ItemsData = useStore.getState().items
    return (
        <section className={styles.shop}>
            <h1>{t('trendingheader')}</h1>
            <DividerThiccRed />
            <div className={styles.smallImageGrid}>
                <GridImage
                    item = {ItemsData[2]}
                    priceTag={t('pricetag')}
                    href='/shop#trending1'
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[3]}
                    priceTag={t('pricetag')}
                    href='/shop#trending2'
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[4]}
                    priceTag={t('pricetag')}
                    href='/shop#trending3'
                    currency='$'
                />
            </div>
            <div className={styles.largeImageGrid}>
                <GridImage
                    item = {ItemsData[5]}
                    priceTag={t('pricetag')}
                    href='/shop#trending4'
                    currency='$'
                />
            </div>
        </section>
    )
}
