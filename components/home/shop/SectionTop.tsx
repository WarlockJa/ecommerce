import styles from '../../../app/[lng]/shop/page.module.scss'
import { useTranslation } from "@/app/i18n";
import { LanguagePropsType } from "@/index";
import { useStore } from "@/src/store";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import DividerLine from '../dividers/DividerLine';

export default async function SectionTop(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'shop-section-top')
    const ItemsData = useStore.getState().items

    return (
        <Fragment>
            <h1>{t('section-top-header')}</h1>
            <DividerThiccRed />
            <p>{t('section-top-p')}</p>
            <div className={styles.largeImageGrid}>
                <GridImage
                    item = {ItemsData[14]}
                    priceTag={t('shop')}
                    currency='$'
                    />
                <GridImage
                    item = {ItemsData[0]}
                    priceTag={t('shop')}
                    currency='$'
                />
            </div>
            <div className={styles.smallImageGrid}>
                <GridImage
                    item = {ItemsData[2]}
                    elId='trending1'
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[3]}
                    elId='trending2'
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[12]}
                    priceTag={t('shop')}
                    currency='$'
                />
            </div>
            <DividerLine />
        </Fragment>
    )
}
