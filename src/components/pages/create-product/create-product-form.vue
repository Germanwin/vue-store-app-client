<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

// Рефы для полей формы
const productName = ref('');
const productDescription = ref('');
const productProducer = ref('');
const productPrice = ref<number | null>(null);

// Функция для отправки данных на сервер
const submitForm = async () => {
    if (!productName.value || !productPrice.value) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:8077/api/product', {
            name: productName.value,
            description: productDescription.value,
            producer: productProducer.value,
            price: productPrice.value,
        });

        console.log('Продукт создан:', response.data);
        alert('Продукт успешно добавлен!');
        // Сброс формы после успешного добавления
        productName.value = '';
        productDescription.value = '';
        productProducer.value = '';
        productPrice.value = null;
    } catch (error) {
        console.error('Ошибка при добавлении продукта:', error);
        alert('Не удалось добавить продукт.');
    }
};
</script>

<template>
    <div class="max-w-md bg-zinc-300 mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Добавить новый продукт</h2>

        <form @submit.prevent="submitForm">
            <!-- Название продукта -->
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium">Название продукта</label>
                <input v-model="productName" type="text" id="name"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0" required />
            </div>

            <!-- Описание продукта -->
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-medium">Описание продукта</label>
                <textarea v-model="productDescription" id="description"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0"></textarea>
            </div>

            <!-- Производитель продукта -->
            <div class="mb-4">
                <label for="producer" class="block text-gray-700 font-medium">Производитель</label>
                <input v-model="productProducer" type="text" id="producer"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0" />
            </div>

            <!-- Цена продукта -->
            <div class="mb-4">
                <label for="price" class="block text-gray-700 font-medium">Цена</label>
                <input v-model="productPrice" type="number" id="price"
                    class="bg-zinc-300 w-full p-2 mt-1 outline-0 border border-gray-400 rounded-md" required />
            </div>

            <!-- Кнопка отправки -->
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Добавить продукт
            </button>
        </form>
    </div>
</template>