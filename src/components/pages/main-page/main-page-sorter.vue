<template>
    <div class="absolute flex justify-between mt-16 top-0">
        <select v-model="sortKey" class="p-2 hover:border hover:border-zinc-300 outline-0 rounded cursor-pointer">
            <option class="cursor-pointer" value="name">Имя</option>
            <option class="cursor-pointer" value="price">Цена</option>
        </select>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useSorterStore } from '@/stores/sorter';

export default {
    setup() {
        const store = useSorterStore();

        // Вычисляемое свойство для выбранного ключа сортировки
        const sortKey = computed({
            get: () => store.sortKey,
            set: (value: 'name' | 'price') => store.sortKey = value
        });

        // Функция для применения сортировки
        const applySort = () => {
            // Просто изменение ключа сортировки обновляет отсортированный список
        };

        return {
            sortKey,
            applySort
        };
    }
};
</script>