'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import MyButton from '@/components/utils/MyButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { CartChangePropsType, CartPropsType } from '@/index'
import { useStore } from '@/src/store'
import LocalStorageWrite from '@/components/utils/LocalStorageWrite'

const handleChangeAmount = (props: CartChangePropsType) => {
    const { amountToChange, itemId, cartItems, cartTotal } = props
    // preparing new cartItems
    const currentItems = cartItems
    // preparing new cartTotal
    let newCartTotal = cartTotal

    // finding index of the item in the list of cartItems
    const itemIndex = currentItems.findIndex(item => item.id === itemId)

    // handling item delete command
    if(amountToChange === 0) {
        // subtracting price of removed items from cartTotal
        // newCartTotal = (Math.round((cartTotal - currentItems[itemIndex].amount * currentItems[itemIndex].price) * 100) / 100)
        newCartTotal = cartTotal - currentItems[itemIndex].amount * currentItems[itemIndex].price
        // setting items count to zero
        currentItems[itemIndex].amount = 0
    } else {
        // changing amount according to passed delta
        currentItems[itemIndex].amount += amountToChange
        // calculating new cartTotal
        newCartTotal = amountToChange > 0 ? cartTotal + currentItems[itemIndex].price : cartTotal - currentItems[itemIndex].price
    }
    // wirting results in the shop state
    useStore.setState((state) => ({
        ...state,
        cartItems: currentItems,
        cartTotal: newCartTotal,
        cartEmpty: newCartTotal === 0 ? true : false
    }))

    // adding persistent data
    LocalStorageWrite()
}

export default function CartItem(props: CartPropsType) {
    const { cartItem } = props
    const { cartItems, cartTotal } = useStore()
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImageContainer}>
                <Image
                    className={styles.image}
                    src={cartItem.image}
                    alt={cartItem.title}
                    width={cartItem.width}
                    height={cartItem.height}
                ></Image>
                <MyButton className={styles.cartItemRemoveIcon} onClick={() => handleChangeAmount({ amountToChange: 0, itemId: cartItem.id, cartItems: cartItems, cartTotal: cartTotal })} >
                    <FontAwesomeIcon icon={faTrash as IconProp}/>
                </MyButton>
            </div>
            <div className={styles.cartItemDescription}>{cartItem.title}</div>
            <div className={styles.cartItemQuantity}>
                <MyButton onClick={() => handleChangeAmount({ amountToChange: -1, itemId: cartItem.id, cartItems: cartItems, cartTotal: cartTotal })} disabled={cartItem.amount === 1} >
                    <FontAwesomeIcon icon={faMinus as IconProp}/>
                </MyButton>
                <div>{cartItem.amount}</div>
                <MyButton onClick={() => handleChangeAmount({ amountToChange: 1, itemId: cartItem.id, cartItems: cartItems, cartTotal: cartTotal })} disabled={cartItem.amount === 100}>
                    <FontAwesomeIcon icon={faPlus as IconProp}/>
                </MyButton>
                <div className={styles.cartItemPrice}>{cartItem.price}$</div>
            </div>
        </div>
    )
}
