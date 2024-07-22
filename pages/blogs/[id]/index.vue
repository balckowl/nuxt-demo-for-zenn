<script setup lang="ts">
const route = useRoute()
const { params } = route

const { data } = await useFetch(`/api/blog/${params.id}`)

if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<template>
    <div class="container mx-auto">
        <Head>
            <Title>Dojo | {{ data?.title }}</Title>
            <Meta name="description" :content="data?.content"/>
        </Head>
        <h2 class="font-bold text-[30px] mb-[10px]">{{ data?.title }}</h2>
        <p>{{ data?.content }}</p>
    </div>
</template>
