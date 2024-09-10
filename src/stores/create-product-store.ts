import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useProductAddStore = defineStore("product_add", () => {
  // Поля формы
  const productName = ref("");
  const productDescription = ref("");
  const productProducer = ref("");
  const productPrice = ref<number | null>(null);

  // Функция для сброса формы
  const resetForm = () => {
    productName.value = "";
    productDescription.value = "";
    productProducer.value = "";
    productPrice.value = null;
  };

  // Функция для отправки данных на сервер
  const submitForm = async () => {
    if (!productName.value || !productPrice.value) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    try {
      const response = await axios.post("https://vue-store-app-server-production.up.railway.app/api/product", {
        name: productName.value,
        description: productDescription.value,
        producer: productProducer.value,
        price: productPrice.value,
      });

      console.log("Продукт создан:", response.data);
      alert("Продукт успешно добавлен!");
      resetForm(); // Сброс формы после успешного добавления
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
      alert("Не удалось добавить продукт.");
    }
  };

  return {
    productName,
    productDescription,
    productProducer,
    productPrice,
    submitForm,
    resetForm,
  };
});
