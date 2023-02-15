import { useStore } from "@/src/store"

export default function LocalStorageWrite() {
    localStorage.setItem('ecom-cart', JSON.stringify(useStore.getState()))
}
