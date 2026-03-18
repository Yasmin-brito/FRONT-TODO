<script setup>
import { ref } from 'vue'
import taskService from "../services/taskService"

const tasks = ref([''])

const onMounted = (async () => {
    tasks.value = await taskService.getAll();
});

</script>

<template>
    <body class="min-h-screen bg-gray-50">
        <div id="task-body" class="flex flex-col items-center mt-16">
            <div id="task-input" class="mt-8 mb-4 text-center">
                <h1 class="pb-2 text-[45px] text-[#191919] font-bold">My Tasks</h1>
                <form id="task-form" class="mt-5 mb-5 flex gap-0">
                    <label for="description"></label>
                    <input class="bg-white outline-none border-none rounded-md w-[400px] h-[45px] px-2.5 py-0.5 shadow-[0_7px_15px_rgba(240,240,240,1)] text-[15px] cursor-text placeholder:text-gray-400" type="text" name="description" id="description" placeholder="Type your task here...">
                    <input class="bg-[#191919] text-[#fafafa] border-none rounded-md w-20 h-[45px] px-1.5 text-[15px] cursor-pointer hover:bg-gray-400 transition" type="submit" value="+ Add">
                </form>
            </div>
            <div id="task-body-list" class="w-[502px] h-[50px]">
                <ul id="task-list" class="w-[502px] flex gap-2 justify-start list-none pl-0.5">
                    <li class="inline text-gray-500 cursor-pointer">All |</li>
                    <li class="inline text-gray-500 cursor-pointer">Active |</li>
                    <li class="inline text-gray-500 cursor-pointer">Completed</li>
                </ul>
            </div>
            <div id="task-body-result" class="h-[360px] mx-auto">
                <ul id="task-body-result-list" class="list-none pl-0 pt-0.5">
                    <li v-for="task in tasks" :key="task.id" class="flex bg-white outline-none h-[50px] w-full items-center justify-center mb-1.5 pt-1.5 pl-4 pb-1.5 rounded-md">
                        <input type="checkbox" id="task1" class="hidden" />
                        <label for="task1" class="flex cursor-pointer gap-2.5">
                            <div class="inline-flex items-center">
                                <label class="flex items-center cursor-pointer relative" for="check-2">
                                    <input type="checkbox"
                                    class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                    id="check-2" />
                                    <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                            </div>
                        </label>
                        <span>{{ task.name }}</span>
                        <button class="ml-auto mr-1 bg-transparent border-none outline-none cursor-pointer text-inherit text-[18px]">✏️</button>
                        <button class="mr-1 bg-transparent border-none outline-none cursor-pointer text-inherit text-[18px]">🗑️</button>
                    </li>
                </ul>
            </div>
        </div>
    </body>
</template>
