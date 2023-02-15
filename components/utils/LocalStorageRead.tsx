'use client'
import { LocalStoreDataType } from "@/index";

export default function LocalStorageRead() {
    const storedData = localStorage.getItem('ecom-cart')
    return storedData ? JSON.parse(storedData) as LocalStoreDataType : undefined
}
