<script setup>
import { ref, onMounted, computed } from 'vue'
import taskService from "../services/taskService"
import { Icon } from '@iconify/vue';
import InputTask from '../components/InputTask.vue';
import FilterTask from '../components/FilterTask.vue';
import EmptyState from '../components/EmptyState.vue';

const tasks = ref([])
const filterStatus = ref('')

const filteredTask = computed(() => {
    let output = tasks.value
    console.log(filterStatus.value)
    if(filterStatus.value === 'Pending'){
        return output.filter(o => o.status === "PENDENTE");
    } else if(filterStatus.value === 'Completed'){
        return output.filter(o => o.status === "CONCLUIDO");
    }
    return output;
});

const loadTasks = (async () => {
    tasks.value = await taskService.getAll();
});
onMounted(loadTasks)

async function createTask(task) {
    if(!task) return

    try{
        const newTask = await taskService.create({
            description: task
        });
    } catch(error){
        console.log(error)
    }
    
    tasks.value.push(newTask);
}

const onStatus = (status) => {
    filterStatus.value = status
}

const done = (task) => {
    if(!(task.status === "CONCLUIDO")){
        task.status = "CONCLUIDO"
    } else {
        task.status = "PENDENTE"
    }
}

const emptyStateMessage = computed(() => {
    let output = 'Nenhuma tarefa cadastrada'

    if(filterStatus.value){
        return 'Nenhum resultado para esse filtro'
    }

    return output
})

</script>

<template>
    <body class="min-h-screen bg-gray-50">
        <div id="task-body" class="flex flex-col items-center">
            <!-- Input tasks -->
           <InputTask @add-task="createTask"/>
            <!-- Filtro de tasks -->
            <FilterTask @status="onStatus"/>
            <!-- Lista de tasks -->
            <div id="task-body-result" class="h-[360px] mx-auto">
                <ul id="task-body-result-list" class="list-none pl-0 pt-0.5">
                    <li v-for="task in filteredTask" :key="task.id" class="flex bg-white h-[50px] items-center mb-1.5 pl-4 rounded-md w-[492px]">
                        <input 
                            type="checkbox"
                            :id="'task-'+ task.id"
                            class="sr-only"
                            v-model="task.completed"
                            @change="done(task)"
                        />

                        <label 
                            :for="'task-'+ task.id"
                            class="flex items-center gap-2.5 cursor-pointer"
                        >
                            <div 
                                class="w-6 h-6 border-2 rounded flex items-center justify-center transition-all"
                                :class="task.completed ? 'bg-slate-800 border-slate-800' : 'border-slate-600'"
                            >
                                <Icon 
                                    v-if="task.completed" 
                                    icon="lucide:check" 
                                    class="text-white text-lg"
                                />
                            </div>

                            <span :class="task.completed ? 'line-through' : null ">{{ task.description }}</span>
                        </label>

                        <button class="ml-auto mr-1">
                            <Icon icon="lucide:pencil" class="text-slate-600 text-2xl" />
                        </button>

                        <button class="mr-4 ml-2">
                            <Icon icon="lucide:trash-2" class="text-slate-600 text-2xl" />
                        </button>
                    </li>
                </ul>
            </div>
            <!-- EmptyState -->
            <EmptyState v-if="!filteredTask.length" :message="emptyStateMessage" />
            {{ tasks }}
        </div>
    </body>
</template>