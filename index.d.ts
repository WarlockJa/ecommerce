// literals
type LiteralLanguages = 'en' | 'ru' | 'kl'

type LiteralCurrency = "$" | "€" | "£" | "¥" | "₽"

type LiteralCurrencyLetterCodes = 'usd' | 'eur' | 'gbp' | 'jpy' | 'rub'

// api fetched item data
export type ItemType = {
    id: number;
    image: string;
    width: number;
    height: number;
    price: number;
    title: string;
    description: string;
    credentials: string;
    credHref: string;
}

// client side item type
export type CartItemType = {
    id: number;
    image: string;
    width: number;
    height: number;
    price: number;
    title: string;
    description: string;
    amount: number;
}

// data from the api fetch
export type ShopDataType = {
    items: ItemType[];
    info?: {
      project?: string;
      function?: string
    }
}

// local store data
export type LocalStoreDataType = {
    items: ItemType[];
    cartItems: CartItemType[];
    cartTotal: number;
}

// data passed to the GridImage component
export type ImagePropsType = {
    item: ItemType;
    priceTag: string;
    href?: string;
    elId?: string;
    currency: LiteralCurrency
}

// components language props
type LanguagePropsType = {
    lng: LiteralLanguages;
}

// language parameter from i18n pseudo-context(?)
export type paramsType = {
    params: {
      lng: LiteralLanguages;
    }
}

// anchor tag props for a grid image with a transition to shop
type AnchorTagProps = {
    href: string;
    priceTag: string;
}

// cart data types
type CartPropsType = {
    cartItem: CartItemType;
    lng: LiteralLanguages;
}

type CartChangePropsType = {
    amountToChange: -1 | 0 | 1;
    itemId: number;
    cartItems: CartItemType[];
    cartTotal: number;
}

type AddToCartPropsType = {
    id: number;
    priceTag: string;
    price: number;
    currency: LiteralCurrency;
}

type StripeItemsType = {
    price_data: {
        currency: LiteralCurrencyLetterCodes;
        product_data: {
            name: string;
        },
        unit_amount: number;
    },
    quantity: number;
}

type DbItemToStripeConversionType = {
    id: number;
    amount: number;
    currency: LiteralCurrencyLetterCodes;
    lng: LiteralLanguages;
}