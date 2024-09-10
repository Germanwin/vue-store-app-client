<script setup lang="ts">
import InputForm from '@/components/input-form/input-form.vue'; // Импортируем компонент для инпутов
import { useProductAddStore } from '@/stores/create-product-store'; // Импортируем store

// Инициализация store
const productAddStore = useProductAddStore();
</script>

<template>
    <div class="max-w-md bg-zinc-300 mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Добавить новый продукт</h2>

        <form @submit.prevent="productAddStore.submitForm">
            <!-- Название продукта -->
            <InputForm v-model="productAddStore.productName" title="Название продукта" />

            <!-- Описание продукта -->
            <InputForm v-model="productAddStore.productDescription" title="Описание продукта" />

            <!-- Производитель продукта -->
            <InputForm v-model="productAddStore.productProducer" title="Производитель продукта" />

            <!-- Цена продукта -->
            <InputForm v-model="productAddStore.productPrice" title="Цена продукта" />

            <!-- Кнопка отправки -->
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Добавить продукт
            </button>
        </form>
    </div>
</template>