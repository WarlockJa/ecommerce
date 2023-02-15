import styles from '../../../app/[lng]/shop/page.module.scss'
import { useTranslation } from "@/app/i18n";
import { LanguagePropsType } from "@/index";
import { useStore } from "@/src/store";
import { Fragment } from "react";
import DividerThiccRed from "../dividers/DividerThiccRed";
import GridImage from "./GridImage";
import DividerLine from '../dividers/DividerLine';

export default async function SectionFriendsFamily(props: LanguagePropsType) {
    const { lng } = props
    const { t } = await useTranslation(lng, 'shop-section-friendsfamily')
    const ItemsData = useStore.getState().items

    return (
        <Fragment>
            <h1>{t('section-friendsfamily-header')}</h1>
            <DividerThiccRed />
            <p>{t('section-friendsfamily-p')}</p>
            <div className={styles.largeImageGrid}>
                <GridImage
                    item = {ItemsData[5]}
                    elId='trending4'
                    priceTag={t('shop')}
                    currency='$'
                />
                <GridImage
                    item = {ItemsData[11]}
                    priceTag={t('shop')}
                    currency='$'
                />
            </div>
            <DividerLine id='gifts' />
        </Fragment>
    )
}
