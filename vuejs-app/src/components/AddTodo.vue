<template>
    <form>
        <input type="text" placeholder="Việc mới..." v-modal="title" />
        <input type="submit" value="Thêm" class="add-btn" />
    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'AddTodo',
    setup() {
        const title = ref('');
        return {
            title,
        };
    },
};
</script>

<style scoped>
form {
    display: flex;
}

input[type='text'] {
    flex: 10;
    padding: 10px;
}

input[type='submit'] {
    flex: 2;
}
</style>
