<template>
    <div class="flex relative flex-col gap-4 bg-white p-4 border rounded shadow-md h-[400px] text-ellipsis">
        <h2 class="truncate text-ellipsis text-xl font-bold text-center">{{ product.name }}</h2>
        <p class="text-gray-600 text-center">{{ product.description }}</p>
        <p><strong>Producer:</strong> {{ product.producer }}</p>
        <p><strong>Price:</strong> ${{ product.price }}</p>
        <div class="absolute bottom-0 mb-4 flex flex-col gap-y-4">
            <router-link :to="{ path: `/update_product/${product.id}` }">
                <button class="bg-blue-500 text-white p-2 rounded">Изменить</button>
            </router-link>

            <p class="text-gray-600">id: {{ product.id }}</p>
        </div>

    </div>
</template>

<script lang="ts">
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>