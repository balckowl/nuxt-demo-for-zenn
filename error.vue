<script setup>
const error = useError();
</script>

<template>
    <div class="container mx-auto">
        <div v-if="error.statusCode===404">404</div>
        <div v-else>エラーが発生</div>
    </div>
</template>
