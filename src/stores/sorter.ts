import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface Product {
  id: number;
  name: string;
  description: string;
  producer: string;
  price: number;
}

export const useSorterStore = defineStore("sorter", () => {
  const info = ref<Product[]>([]);
  const sortKey = ref<"name" | "price">("name");

  const sortedProducts = computed(() => {
    return info.value.slice().sort((a, b) => {
      if (sortKey.value === "price") {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  });

  return {
    info,
    sortKey,
    sortedProducts,
  };
});
