<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const productId = route.params.id as string;

const product = ref({
    id: null,
    name: '',
    description: '',
    producer: '',
    price: null,
});

const fetchProduct = async () => {
    try {
        const response = await axios.get(`http://localhost:8077/api/product/${productId}`);
        product.value = response.data;
    } catch (error) {
        console.error('Ошибка при загрузке данных продукта:', error);
    }
};

onMounted(fetchProduct)

// Функция для отправки данных на сервер
const updateProduct = async () => {
    try {
        await axios.put(`http://localhost:8077/api/product`, product.value);
        alert('Продукт успешно обновлён!');
    } catch (error) {
        console.error('Ошибка при обновлении продукта:', error);
        alert('Не удалось обновить продукт.');
    }
};
</script>

<template>
    <div class="max-w-md bg-zinc-300 mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Обновить продукт</h2>

        <form @submit.prevent="updateProduct">
            <!-- Цена продукта -->
            <div class="mb-4">
                <p class="w-full p-2 mt-1 text-gray-700 rounded-md">
                    id: {{ product.id }}
                </p>
            </div>

            <!-- Название продукта -->
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium">Название продукта</label>
                <input v-model="product.name" type="text" id="name"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0" required />
            </div>

            <!-- Описание продукта -->
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-medium">Описание продукта</label>
                <textarea v-model="product.description" id="description"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0"></textarea>
            </div>

            <!-- Производитель продукта -->
            <div class="mb-4">
                <label for="producer" class="block text-gray-700 font-medium">Производитель</label>
                <input v-model="product.producer" type="text" id="producer"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0" />
            </div>

            <!-- Цена продукта -->
            <div class="mb-4">
                <label for="price" class="block text-gray-700 font-medium">Цена</label>
                <input v-model="product.price" type="number" id="price"
                    class="bg-zinc-300 w-full p-2 mt-1 outline-0 border border-gray-400 rounded-md" required />
            </div>

            <!-- Кнопка отправки -->
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Обновить продукт
            </button>
        </form>
    </div>
</template>