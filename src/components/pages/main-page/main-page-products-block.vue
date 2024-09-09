<script lang="ts">
import { onMounted } from 'vue';
import axios, { type AxiosResponse } from 'axios';
import MainPageProduct from './main-page-product.vue';
import { useSorterStore, type Product } from '@/stores/sorter';
import MainPageSorter from './main-page-sorter.vue';

export default {
    components: {
        MainPageProduct,
        MainPageSorter
    },
    setup() {
        const store = useSorterStore();

        // Функция для загрузки данных
        const fetchProducts = async () => {
            try {
                const response: AxiosResponse<Product[]> = await axios.get('http://localhost:8077/api/product');
                store.info = response.data; // Сохраняем данные в store
            } catch (error) {
                console.error('Ошибка при запросе:', error);
            }
        };

        // Загружаем данные при монтировании
        onMounted(fetchProducts);

        return {
            store
        };
    }
};
</script>

<template>
    <div class="flex flex-col items-center pt-20">
        <!-- Элементы управления сортировкой -->
        <MainPageSorter />

        <div class="grid grid-cols-4 w-[90%] h-auto mt-8 mb-8 bg-zinc-300 gap-4 p-4">
            <div v-if="store.sortedProducts.length" v-for="(product, index) in store.sortedProducts" :key="index">
                <MainPageProduct :product="product" />
            </div>
            <div v-else>
                Загрузка...
            </div>
        </div>
    </div>
</template>