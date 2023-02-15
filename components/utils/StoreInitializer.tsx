'use client'

import LocalStorageRead from "@/components/utils/LocalStorageRead"
import { ItemType, CartItemType, LocalStoreDataType } from "@/index"
import { useStore } from "@/src/store"
import { useEffect } from "react"

export default function StoreInitializer({ shopItems }: { shopItems: ItemType[] }) {

    useEffect(() => {
        // reading local storage for saved data
        const storedData: LocalStoreDataType | undefined = LocalStorageRead()
        // creating blank template from fetched shop items for the local store
        const cartItems: CartItemType[] = shopItems.map((item) => {
            return({
                id: item.id,
                image: item.image,
                width: item.width,
                height: item.height,
                price: item.price,
                title: item.title,
                description: item.description,
                amount: 0
            })
        })
        // populating local store template with local storage data if present
        if(!storedData) {
            // creating empty object if no data found
            useStore.setState({ cartItems, cartTotal: 0 })
        } else {
            storedData.cartItems.map(item => {
                const cartIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)
                cartItems[cartIndex].amount = item.amount
            })
            
            useStore.setState({ ...storedData, cartItems: cartItems })
        }
    },[])

    return null
}
