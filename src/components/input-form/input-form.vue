<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        modelValue: {
            type: [String, Number, null], // Allow both string and number types
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    emits: ['update:modelValue'], // This is necessary for v-model
    setup(props, { emit }) {
        const updateValue = (event: Event) => {
            const target = event.target as HTMLInputElement;
            emit('update:modelValue', target.value);
        };

        return { updateValue };
    },
});
</script>

<template>
    <div class="mb-4">
        <label :for="title" class="block text-gray-700 font-medium">{{ title }}</label>
        <input :id="title" :value="modelValue" @input="updateValue"
            class="bg-zinc-300 w-full p-2 mt-1 border border-gray-400 rounded-md outline-0" required />
    </div>
</template>