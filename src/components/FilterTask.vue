<script setup>
import { ref, watch } from 'vue'

const status = ref('')
const emit = defineEmits(['status'])

watch(status, (value) => {
    emit('status', value)
})

</script>

<template>
    <div id="task-body-list" class="w-[492px] h-[50px] ">
                <ul id="task-list" class="w-[502px] flex gap-2 justify-start list-none pl-5">
                    <li class="inline text-gray-700 cursor-pointer transition-opacity duration-300 hover:opacity-40">
                        <input @click="status=''" class="cursor-pointer" :class="{ 'font-bold' : status === ''}" type="button" value="All |">
                    </li>
                    <li class="inline text-gray-700 cursor-pointer transition-opacity duration-300 hover:opacity-40">
                        <input @click="status='Pending'" class="cursor-pointer"  :class="{ 'font-bold': status === 'Pending' }" type="button" value="Pending |">
                    </li>
                    <li class="inline text-gray-700 transition-opacity duration-300 hover:opacity-40">
                        <input @click="status='Completed'" class="cursor-pointer" :class="{ 'font-bold': status === 'Completed' }" type="button" value="Completed">
                    </li>
                </ul>
            </div>
</template>