<script setup lang="ts">
import { useProductDeleteStore } from '@/stores/delete-product-store'; // Импортируем store

// Инициализация store
const productDeleteStore = useProductDeleteStore();
</script>

<template>
    <div class="max-w-md bg-zinc-300 mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Удалить продукт</h2>

        <form @submit.prevent="productDeleteStore.submitForm">
            <!-- id продукта -->
            <div class="mb-4">
                <label for="id" class="block text-gray-700 font-medium">id продукта</label>
                <input v-model="productDeleteStore.productId" type="number" id="id"
                    class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0" required />
            </div>

            <button type="submit" class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                Удалить продукт
            </button>
        </form>
    </div>
</template>