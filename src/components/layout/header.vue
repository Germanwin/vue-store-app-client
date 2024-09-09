<script setup lang="ts">
import { useMenuStore } from '@/stores/headerMenuStore';
import HeaderMenuButton from './header/header-menu-button.vue';
import HeaderMenu from './header/header-menu.vue';
import { ref, onMounted, onUnmounted } from 'vue';

// Подключаем хранилище
const menuStore = useMenuStore();

// Ссылка на контейнер меню
const menuRef = ref<HTMLElement | null>(null);

// Функция для обработки клика вне меню
const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
        menuStore.isMenuOpen = false;
    }
};

// При монтировании компонента добавляем обработчик кликов
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

// При размонтировании компонента удаляем обработчик
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <div ref="menuRef" class="relative w-full h-10 flex flex-row justify-between items-center px-6 bg-zinc-300">
        <!-- Кнопка меню -->
        <HeaderMenuButton @click="menuStore.toggleMenu" />

        <!-- Выпадающее меню -->
        <HeaderMenu />
    </div>
</template>