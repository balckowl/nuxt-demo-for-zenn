<script setup lang="ts">
const { data: posts } = await useFetch("/api/blog")
</script>

<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-3">
            <div v-for="(post, index) in posts" :key="post.id" class="border py-[30px] px-[40px] rounded-lg">
                <NuxtLink :to="`/blogs/${ post.id }`">
                    <h3>{{ post.title }}</h3>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
