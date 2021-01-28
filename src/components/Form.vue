<template>
    <div class="flex justify-center">
        <div class="mr-5">
            <textarea name="" id="" cols="30" rows="10"
                class="rounded-lg bg-white p-5 border shadow-lg focus:outline-none focus:ring"
                placeholder="List name to generate"></textarea>
        </div>
        <div class="ml-5">
            <div class="mb-5">
                <label for="group" class="block font-semibold mb-2">Group :</label>
                <input type="number" name="group" id="group"
                 class="w-auto p-3 shadow-lg rounded-lg bg-white border focus:outline-none focus:ring">
            </div>
             <button
                class="transition-all duration-300 ease-in-out p-3 shadow-lg rounded-lg bg-white font-semibold outline-none focus:outline-none focus:ring hover:shadow-none hover:bg-gray-100"
            >Generate</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>