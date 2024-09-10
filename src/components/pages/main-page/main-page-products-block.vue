<script lang="ts">
import { onMounted } from 'vue';
import axios, { type AxiosResponse } from 'axios';
import MainPageProduct from './main-page-product.vue';
import { useSorterStore, type Product } from '@/stores/sorter';
import MainPageSorter from './main-page-sorter.vue';
import { useUpdateProductStore } from '@/stores/update-product-store';

export default {
    components: {
        MainPageProduct,
        MainPageSorter
    },
    setup() {
        const sorterStore = useSorterStore()
        const productActionsStore = useUpdateProductStore()

        // Загружаем данные при монтировании
        onMounted(sorterStore.fetchProducts);

        return {
            productActionsStore,
            sorterStore
        };
    }
};
</script>

<template>
    <div class="flex flex-col items-center pt-20">
        <!-- Элементы управления сортировкой -->
        <MainPageSorter />

        <div class="grid grid-cols-4 w-[90%] h-auto mt-8 mb-8 bg-zinc-300 gap-4 p-4">
            <div v-if="sorterStore.sortedProducts.length" v-for="(product, index) in sorterStore.sortedProducts"
                :key="index">
                <MainPageProduct :product="product" />
            </div>
            <div v-else>
                Загрузка...
            </div>
        </div>
    </div>
</template>