import axios, { type AxiosResponse } from "axios";
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

  const sorterStore = useSorterStore()

  const fetchProducts = async () => {
    try {
      const response: AxiosResponse<Product[]> = await axios.get(
        "https://vue-store-app-server-production.up.railway.app/api/product"
      );
      sorterStore.info = response.data; // Сохраняем данные в store
    } catch (error) {
      console.error("Ошибка при запросе:", error);
    }
  };

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
    fetchProducts,
  };
});
