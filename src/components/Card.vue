<template>
    <div class="rounded-lg shadow-lg bg-white lg">
        <div class="text-xl font-semibold bg-blue-500 text-white text-center rounded-t-lg py-3 uppercase">Team {{index + 1}}</div>
        <ul class="p-5">
            <li v-for="(item, index) in data" :key="index" class="bg-gray-200 px-3 py-2 rounded mb-2 font-semibold">{{ index + 1 }}. {{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'data', 'index' ]
}
</script>

<style>

</style>