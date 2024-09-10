import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useSorterStore, type Product } from "./sorter";

export const useUpdateProductStore = defineStore("product_actions", () => {
  const product = ref({
    id: null,
    name: "",
    description: "",
    producer: "",
    price: null,
  });

  const productId = ref<number | null>(null);

  const fetchProduct = async () => {
    try {
      if (productId.value !== null) {
        const response = await axios.get(
          `http://localhost:8077/api/product/${productId.value}`
        );
        product.value = response.data;
      } else {
        console.error("Product ID is null");
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных продукта:", error);
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(`http://localhost:8077/api/product`, product.value);
      alert("Продукт успешно обновлён!");
    } catch (error) {
      console.error("Ошибка при обновлении продукта:", error);
      alert("Не удалось обновить продукт.");
    }
  };

  return { product, productId, fetchProduct, updateProduct };
});
