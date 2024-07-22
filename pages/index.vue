<script setup lang="ts">
const { data } = await useFetch("/api/hello")
</script>

<template>
    <div class="container mx-auto">
        <h1>{{ data.hello }}</h1>
    </div>
</template>
