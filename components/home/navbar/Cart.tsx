'use client';
import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartArrowDown, faTimes } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Fragment, useState } from 'react';
import MyButton from '@/components/utils/MyButton';
import { useStore } from '@/src/store';
import CartItem from './CartItem';
import DividerLine from '../dividers/DividerLine';
import { CartItemType, LanguagePropsType, LiteralLanguages } from '@/index';
import { useTranslation } from '@/app/i18n/client';
import { useScrollbarWidth } from '@/components/utils/useScrollbarWidth';


// handling purchase via Stripe API
const handleCheckout = ({ cartItems, lng }:{cartItems: CartItemType[], lng: LiteralLanguages }) => {
    // sending id and amount to stripe API. Price will be fetched by the API for security purposes
    const itemsToCheckout = cartItems.filter(item => item.amount !== 0).map(item => ({ id: item.id, amount: item.amount, currency: 'usd', lng: lng }))
    if(itemsToCheckout.length !== 0) {
        // sending data to Stripe API if any data present
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemsToCheckout)
        }).then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
        }).catch(e => {
            console.error(e.error)
        })
    }
}

const handleCartShownSwitch = (props: { cartShown: boolean, setCartShown: (state: boolean) => void, scrollbarWidth: number }) => {
    const { cartShown, setCartShown, scrollbarWidth } = props
    // a terrible hack but I see no other way to affect SSR. I need an adult...
    // changing styling for the page to remove scrolling when cart overlay is open
    if(cartShown) {
        window.document.body.style.overflowY = ''
        window.document.body.style.paddingRight = ''
    } else {
        window.document.body.style.overflowY = 'hidden'
        window.document.body.style.paddingRight = `${scrollbarWidth}px`
    }
    
    setCartShown(!cartShown)
}

export default function Cart(props: LanguagePropsType) {
    // flag for showing shopping cart
    const [cartShown, setCartShown] = useState(false)

    // inline styling to hide cart
    const shopHiddenStyle = cartShown ? {} : { transform: 'translateX(100vw)' }

    // getting data from the store
    const cartItems = useStore((state) => state.cartItems)
    const cartTotal = useStore((state) => state.cartTotal)
    const cartEmpty = useStore((state) => state.cartEmpty)

    // getting scrollbar width for the browser
    const scrollbarWidth = useScrollbarWidth()

    const { lng } = props
    const { t } = useTranslation(lng, 'cart')

    // overwriting MyButton inline css to use scss
    const defaultButtonStyle = {}

    return (
        <>
            <MyButton
                className={styles.cartButton}
                title={t('cart-title-open')}
                onClick={() => handleCartShownSwitch({cartShown, setCartShown, scrollbarWidth})}
            >
                {cartEmpty
                    ? <FontAwesomeIcon icon={faCartArrowDown as IconProp}/>
                    : <FontAwesomeIcon icon={faCartPlus as IconProp}/>
                }
            </MyButton>  
            <section
                className={styles.cartOverlay}
                style={shopHiddenStyle}
            >
                <div style={{}} className={styles.cartBackground} onClick={() => handleCartShownSwitch({cartShown, setCartShown, scrollbarWidth})}></div>
                <div className={styles.cartSection}>
                    <div className={styles.cartHeader}>
                        <p>{t('cart-title')}</p>
                        <MyButton
                            className={styles.cartButton}
                            onClick={() => handleCartShownSwitch({cartShown, setCartShown, scrollbarWidth})}
                            title={t('cart-title-close')}
                        >
                            <FontAwesomeIcon icon={faTimes as IconProp}/>
                        </MyButton>
                    </div>
                    <div className={styles.cartBody}>
                        {cartEmpty ? <Fragment><div className={styles.cartEmpty}>{t('cart-empty')}</div><DividerLine /></Fragment>
                        :cartItems
                            .filter(item => item.amount !== 0)
                            .map((item, index) => {
                            return (
                                <Fragment key={'cartitem'+index}>
                                    <CartItem cartItem={item} lng={lng} />
                                    <DividerLine marginProps={1} />
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className={styles.cartFooter}>
                        <div className={styles.cartTotal}>{t('cart-total')}: {Math.abs(cartTotal).toFixed(2)}$</div>
                        <MyButton style={defaultButtonStyle} className={styles.cartButton} onClick={() => handleCheckout({ cartItems: cartItems, lng: lng })}>{t('cart-buybutton')}</MyButton>
                    </div>
                </div>
            </section>
        </>
    )
}
