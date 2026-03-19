<script setup>
import { ref } from 'vue'

const task = ref('')
const emit = defineEmits(['add-task'])
const addTask = () => {
    if(!task.value) return

    emit('add-task', task.value)
    task.value = ''
}
</script>

<template>
     <div id="task-input" class="mt-8 mb-4 text-center mt-18">
                <h1 class="pb-2 text-[45px] text-[#191919] font-bold">My Tasks</h1>
                <form id="task-form" class="mt-5 mb-5 flex gap-0">
                    <label for="description"></label>
                    <input v-model="task" class="bg-white outline-none border-none rounded-tl rounded-bl w-[400px] h-[50px] px-2.5 py-0.5 shadow-[0_7px_15px_rgba(240,240,240,1)] text-[15px] cursor-text placeholder:text-gray-400" type="text" name="description" id="description" placeholder="Type your task here...">
                    <input @click="addTask" class="bg-[#191919] text-[#fafafa] border-none rounded-tr rounded-br w-20 h-[50px] px-1.5 text-[15px] cursor-pointer hover:bg-gray-400 transition" type="submit" value="+ Add">
                </form>
            </div>
</template>