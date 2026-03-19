<script setup>
    const props = defineProps(['message'])
</script>

<template>
        <div class="bg-gray-100 rounded-lg shadow p-6">
            <div class="text-center py-10">
                <p class="text-gray-500 m-0">{{props.message}}</p>
            </div>
        </div>
</template>