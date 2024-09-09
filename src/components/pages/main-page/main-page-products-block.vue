<script lang="ts">
import axios, { type AxiosResponse } from 'axios';
import MainPageProduct from './main-page-product.vue';

export default {
    components: {
        MainPageProduct
    },
    data() {
        return {
            info: [] // Массив для хранения продуктов
        };
    },
    async mounted() {
        try {
            const response: AxiosResponse = await axios.get('http://localhost:8077/api/product');
            console.log(response.data);
            this.info = response.data; // Сохраняем данные в массив
        } catch (error) {
            console.error('Ошибка при запросе:', error);
        }
    }
};
</script>

<template>
    <div class="grid grid-cols-4 w-[90%] h-auto mt-8 mb-8 bg-zinc-300 gap-4 p-4">
        
            <div v-if="info.length" v-for="(product, index) in info" :key="index">
                <MainPageProduct :product="product" />
            </div>
        
        <div v-else>
            Загрузка...
        </div>
    </div>
</template>