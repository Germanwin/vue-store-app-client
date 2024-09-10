<script lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import InputForm from '@/components/input-form/input-form.vue';
import { useUpdateProductStore } from '@/stores/update-product-store';

export default {
    components: {
        InputForm,
    },
    setup() {
        const route = useRoute();
        const productId = Number(route.params.id);

        const productActionsStore = useUpdateProductStore()
        productActionsStore.productId = productId;

        onMounted(productActionsStore.fetchProduct)

        return {
            productActionsStore
        }
    }
}


</script>

<template>
    <div class="max-w-md bg-zinc-300 mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Обновить продукт</h2>

        <form @submit.prevent="productActionsStore.updateProduct">
            <!-- Display product ID -->
            <div class="mb-4">
                <p class="w-full p-2 mt-1 text-gray-700 rounded-md">
                    id: {{ productActionsStore.product.id }}
                </p>
            </div>

            <!-- Название продукта -->
            <InputForm v-model="productActionsStore.product.name" title="Название продукта" />

            <!-- Описание продукта -->
            <InputForm v-model="productActionsStore.product.description" title="Описание продукта" />

            <!-- Производитель продукта -->
            <InputForm v-model="productActionsStore.product.producer" title="Производитель продукта" />

            <!-- Цена продукта -->
            <InputForm v-model="productActionsStore.product.price" title="Цена продукта" />

            <!-- Кнопка отправки -->
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Обновить продукт
            </button>
        </form>
    </div>
</template>