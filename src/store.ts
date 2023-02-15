import { create } from "zustand";
import { ItemType, CartItemType } from "..";

export const useStore = create<{
    items: ItemType[];
    cartItems: CartItemType[];
    cartTotal: number;
    cartEmpty: boolean;
}>((set) => ({
    items: [],
    cartItems: [],
    cartTotal: 0,
    cartEmpty: true
}))