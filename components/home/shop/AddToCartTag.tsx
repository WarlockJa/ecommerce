'use client'
import styles from '../../../app/[lng]/shop/page.module.scss'
import { useStore } from '@/src/store'
import LocalStorageWrite from '@/components/utils/LocalStorageWrite';
import { AddToCartPropsType } from '@/index';
import MyButton from '@/components/utils/MyButton';

// adding item to the cart and updating store info
const handleAddToCart = (id: number) => {
    const currentItems = useStore.getState()

    const itemIndex = currentItems.cartItems.findIndex(item => item.id === id)

    currentItems.cartItems[itemIndex].amount += 1
    currentItems.cartTotal += currentItems.cartItems[itemIndex].price
    
    useStore.setState({ ...currentItems, cartEmpty: false })
    // adding persistent data
    LocalStorageWrite()
}

export default function AddToCartTag(props: AddToCartPropsType) {
    const { id, price, priceTag, currency } = props

    return (
        <MyButton className={styles.itemShopSectionLink} onClick={() => handleAddToCart(id)}>
            <div className={styles.itemShopMyButtonWrapper}>
                <p>{priceTag}</p>
                <p>{price.toFixed(2)}{currency}</p>
            </div>
        </MyButton>
    )
}
