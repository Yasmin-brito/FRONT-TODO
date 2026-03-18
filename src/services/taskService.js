import api from "./axios/api"

export default {

    // GET - listar todas
    async getAll() {
        const response = await api.get("/tasks");
        return response.data;
    },

    // GET por ID
    async getById(id) {
        const response = await api.get(`/tasks/${id}`);
        return response.data;
    },

    // POST - criar
    async create(task) {
        const response = await api.post("/tasks", task);
        return response.data;
    },

    // PUT - atualizar tudo
    async update(id, task) {
        const response = await api.put(`/tasks/${id}`, task);
        return response.data;
    },

    // PATCH - atualizar parcial
    async patch(id, data) {
        const response = await api.patch(`/tasks/${id}`, data);
        return response.data;
    },

    // DELETE
    async remove(id) {
        await api.delete(`/tasks/${id}`);
    }
};