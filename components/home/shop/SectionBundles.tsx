import styles from '../../../app/[lng]/shop/page.module.scss'
import { useTranslation } from "@/app/i18n";
import { LanguagePropsType } from "@/index";
import { useStore } from "@/src/store";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import DividerLine from '../dividers/DividerLine';

export default async function SectionBundles(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'shop-section-bundles')
    const ItemsData = useStore.getState().items

    return (
        <Fragment>
            <h1>{t('section-bundles-header')}</h1>
            <DividerThiccRed />
            <p>{t('section-bundles-p')}</p>
            <div className={styles.largeImageGrid}>
                <GridImage
                    item = {ItemsData[16]}
                    priceTag={t('shop')}
                    currency='$'
                />
            </div>
            <div className={styles.smallImageGrid}>
                <GridImage
                    item = {ItemsData[6]}
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[1]}
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[4]}
                    elId='trending3'
                    priceTag={t('shop')}
                    currency='$'
                />
            </div>
            <DividerLine />
        </Fragment>
    )
}
