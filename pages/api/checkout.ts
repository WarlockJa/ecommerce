import { StripeItemsType, DbItemToStripeConversionType, ItemType } from "@/index";
import type { NextApiRequest, NextApiResponse } from "next";
import ItemsEn from './items_en.json'
import ItemsKl from './items_kl.json'
import ItemsRu from './items_ru.json'
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

export default async function getItemsData(
    req: NextApiRequest,
    res: NextApiResponse 
) {
    const storeItems: StripeItemsType = req.body.map((item: DbItemToStripeConversionType ) => {
        let itemDBData: ItemType[]
        switch (item.lng) {
            case 'kl':
                itemDBData = ItemsKl.items.filter(dbItem => dbItem.id === item.id)
                break;
            case 'ru':
                itemDBData = ItemsRu.items.filter(dbItem => dbItem.id === item.id)
                break;
            default:
                itemDBData = ItemsEn.items.filter(dbItem => dbItem.id === item.id)
                break;
        }
        return {
            price_data: {
                currency: item.currency,
                unit_amount: Math.round(itemDBData[0].price * 100),
                product_data: {
                    name: itemDBData[0].title
                }
            },
            quantity: item.amount
        }
    })

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: storeItems,
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/shop`
        })
        res.status(200).json({ url: session.url });
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}
