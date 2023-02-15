'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import { languages } from '@/app/i18n/settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { usePathname } from 'next/navigation'
import { useState } from 'react';

const handleClick = (langSwitchFunction: Function) => {
    langSwitchFunction(styles.navbarLangMenuListHidden)
}

export default function LangaugeSwitch(props: { lng: string }) {
    const [activeLangMenu, setActiveLangMenu] = useState(styles.navbarLangMenuList)
    const { lng } = props
    const pathName = usePathname()

    return (
        <div className={styles.navbarLangMenu}>
            <div className={styles.navbarLangMenuHeader}>
                {lng && lng.toUpperCase()}<FontAwesomeIcon icon={faGlobe as IconProp} />
            </div>
            <ul className={activeLangMenu}>
                <div className={styles.navbarLangMenuListHeader}></div>
                {languages.map((lang, index) => {
                    return <li key={'language' + index.toString()}><Link onClick={() => handleClick(setActiveLangMenu)} prefetch={false} href={pathName ? pathName.replace(lng, lang) : `/${lang}`}>{lang.toUpperCase()}</Link></li>
                })}
            </ul>
        </div>
    )
}
