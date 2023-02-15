import type { NextApiRequest, NextApiResponse } from "next";
import ItemsEn from './items_en.json'
import ItemsKl from './items_kl.json'
import ItemsRu from './items_ru.json'

export default function getItemsData(
    req: NextApiRequest,
    res: NextApiResponse 
) {
    const body = JSON.parse(req.body)
    // console.log(body)
    switch (body.lng) {
        case 'kl':
            res.status(200).json(ItemsKl);
            break;
        case 'ru':
            res.status(200).json(ItemsRu);
            break;
        default:
            res.status(200).json(ItemsEn);
            break;
    }
}
