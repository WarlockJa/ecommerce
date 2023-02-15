import styles from '../../../app/[lng]/shop/page.module.scss'
import { AnchorTagProps } from '@/index'
import MyButton from '@/components/utils/MyButton'

export default function AnchorTag(props: AnchorTagProps) {
    const { href, priceTag } = props
    return (
        // next/link tag doesn't work with anchor tags. Issue raised
        <MyButton href={href} className={styles.itemShopSectionLink}>
            <p>{priceTag}</p>
        </MyButton>
    )
}
