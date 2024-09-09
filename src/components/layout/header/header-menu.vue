<script setup lang="ts">
import { useMenuStore } from '@/stores/headerMenuStore';
import HeaderMenuOption from './header-menu-option.vue';

// Подключаем хранилище
const menuStore = useMenuStore();
</script>

<template>
    <div v-if="menuStore.isMenuOpen"
        class="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
        <ul>
            <HeaderMenuOption title="make new product" path="/create_product" />
            <HeaderMenuOption title="main page" path="/" />
        </ul>
    </div>
</template>