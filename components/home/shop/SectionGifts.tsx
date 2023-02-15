import styles from '../../../app/[lng]/shop/page.module.scss'
import { useTranslation } from "@/app/i18n";
import { LanguagePropsType } from "@/index";
import { useStore } from "@/src/store";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import DividerLine from '../dividers/DividerLine';

export default async function SectionGifts(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'shop-section-gifts')
    const ItemsData = useStore.getState().items

    return (
        <Fragment>
            <h1>{t('section-gifts-header')}</h1>
            <p>{t('section-gifts-p')}</p>
            <DividerThiccRed />
            <div className={styles.smallImageGrid}>
                <GridImage
                    item = {ItemsData[7]}
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[9]}
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[8]}
                    priceTag={t('shop')}
                    currency='$'
                />
            </div>
            <div className={styles.largeImageGrid}>
                <GridImage
                    item = {ItemsData[10]}
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[15]}
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[13]}
                    priceTag={t('shop')}
                    currency='$'
                />
            </div>
        </Fragment>
    )
}
