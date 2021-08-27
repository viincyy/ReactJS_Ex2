<template>
    <AddTodo />
    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todoProps="todo"
        @item-completed="markComplete"
        @delete-item="deleteItem"
    />
</template>

<script>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';

export default {
    name: 'Todos',
    components: { TodoItem, AddTodo },
    setup() {
        const todos = ref([
            {
                id: 1,
                title: 'Viec 1',
                completed: false,
            },
            {
                id: 2,
                title: 'Viec 2',
                completed: false,
            },
            {
                id: 3,
                title: 'Viec 3',
                completed: false,
            },
        ]);

        const markComplete = (id) => {
            todos.value = todos.value.map((todo) => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            });
        };

        const deleteItem = (id) => {
            todos.value = todos.value.filter((todo) => todo.id !== id);
        };
        return {
            todos,
            markComplete,
            deleteItem,
        };
    },
};
</script>

<style></style>
