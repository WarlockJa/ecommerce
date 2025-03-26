import { ItemType } from "@/index";
import { useStore } from "@/src/store";

export default async function getStoreItems(): Promise<ItemType[]> {
  return new Promise(async (resolve) => {
    let triesCounter = 3;
    let itemsData = useStore.getState().items;
    while (triesCounter > 0 && itemsData.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      triesCounter++;
      itemsData = useStore.getState().items;
    }

    resolve(itemsData);
  });
}
