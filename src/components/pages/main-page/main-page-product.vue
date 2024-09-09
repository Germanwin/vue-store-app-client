<template>
    <div class="flex flex-col gap-4 bg-white p-4 border rounded shadow-md h-[400px] text-ellipsis">
        <h2 class="truncate text-ellipsis text-xl font-bold text-center">{{ product.name }}</h2>
        <p class="text-gray-600 text-center">{{ product.description }}</p>
        <p><strong>Producer:</strong> {{ product.producer }}</p>
        <p><strong>Price:</strong> ${{ product.price }}</p>
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