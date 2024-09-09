<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const productId = ref<number | null>(null);

const submitForm = async () => {
    if (!productId.value) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    try {
        const response = await axios.delete(`http://localhost:8077/api/product/${productId.value}`);

        console.log('Продукт удалён:', response.data);
        alert('Продукт успешно удалён!');

        productId.value = null;
    } catch (error) {
        console.error('Ошибка при удалении продукта:', error);
        alert('Не удалось удалить продукт.');
    }
}

</script>

<template>
    <div class="max-w-md bg-zinc-300 mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Добавить новый продукт</h2>

        <form @submit.prevent="submitForm">
            <!-- id продукта -->
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium">id продукта</label>
                <input v-model="productId" type="number" id="id"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0" required />
            </div>

            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Удалить продукт
            </button>
        </form>
    </div>
</template>