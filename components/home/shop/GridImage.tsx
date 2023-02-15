import styles from '../../../app/[lng]/shop/page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ImagePropsType } from '@/index'
import AnchorTag from './AnchorTag'
import AddToCartTag from './AddToCartTag'

export default function GridImage(props: ImagePropsType) {
    // static props
    const { href, priceTag, currency, elId } = props
    // getting fetched item data
    const { image, price, credHref, id, width, height, title, description, credentials  } = props.item

    return (
        <div className={styles.imageContainer}>
            <Image id={elId} className={styles.image} src={image} width={width} height={height} alt={credentials}/>
            <div className={styles.imageOverlay}>
                <p className={styles.itemDescriptionHeader}>{title}</p>
                <p className={styles.itemDescriptionBody}>{description}</p>
                <div className={styles.itemShopSection}>
                    {href ? <AnchorTag href={href} priceTag={priceTag} /> : <AddToCartTag id={id} price={price} priceTag={priceTag} currency={currency} />}
                </div>
                <div className={styles.imageCredentials}>
                    <Link href={credHref} target='_blank'>{credentials}</Link>
                </div>
            </div>
        </div>
    )
}
