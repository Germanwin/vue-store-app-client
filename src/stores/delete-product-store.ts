import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useProductDeleteStore = defineStore("product_delete", () => {
  // Поле для ID продукта
  const productId = ref<number | null>(null);

  // Функция для сброса ID после удаления
  const resetForm = () => {
    productId.value = null;
  };

  // Функция для удаления продукта с сервера
  const submitForm = async () => {
    if (!productId.value) {
      alert("Пожалуйста, заполните ID продукта.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8077/api/product/${productId.value}`
      );
      console.log("Продукт удалён:", response.data);
      alert("Продукт успешно удалён!");
      resetForm(); // Сброс поля ID после успешного удаления
    } catch (error) {
      console.error("Ошибка при удалении продукта:", error);
      alert("Не удалось удалить продукт.");
    }
  };

  return {
    productId,
    submitForm,
    resetForm,
  };
});
