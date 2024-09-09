<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <RouterLink :to="path">
        <li class="p-2 hover:bg-gray-100 cursor-pointer">
            {{ title }}

        </li>
    </RouterLink>

</template>