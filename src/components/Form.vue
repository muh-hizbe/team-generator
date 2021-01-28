<template>
    <div class="flex justify-center">
        <div class="mr-5">
            <span class="block font-semibold mb-2">Banyak Peserta : {{ countPeople }}</span>
            <textarea v-model="data" name="data" id="data" cols="30" rows="10"
                class="rounded-lg bg-white p-5 border shadow-lg focus:outline-none focus:ring"
                placeholder="List of people"></textarea>
        </div>
        <div class="ml-5">
            <div class="mb-5">
                <label for="team" class="block font-semibold mb-2">Banyak Team :</label>
                <input v-model="team" type="number" name="team" id="team"
                 class="w-auto p-3 shadow-lg rounded-lg bg-white border focus:outline-none focus:ring">
            </div>
            <button @click="createTeam()"
                class="transition-all duration-300 ease-in-out p-3 shadow-lg rounded-lg bg-white font-semibold outline-none focus:outline-none focus:ring hover:shadow-none hover:bg-gray-100 mr-2"
            >Generate</button>
            <button @click="() => {teams = null; data = null; team = 0;}"
                class="transition-all duration-300 ease-in-out p-3 shadow-lg rounded-lg bg-red-500 text-white font-semibold outline-none focus:outline-none focus:ring hover:shadow-none hover:bg-gray-100 hover:text-red-500"
            >Clear</button>
        </div>
    </div>
    <div v-if="teams" class="mt-10 px-10">
        <div class="text-center font-semibold text-3xl uppercase mb-5">Hasil</div>
        <div class="grid grid-cols-4 gap-4 justify-center mb-10">
            <template v-for="(item, index) in teams" :key="index">
                <Card :data="item" :index="index" />
            </template>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    components: {
        Card
    },

    data() {
        return {
            data: null,
            team: 0,
            teams: null
        }
    },

    computed: {
        countPeople: function () {
            if(this.data == null) {
                return 0
            }
            let array = this.data.split('\n')
            return array.length
        }
    },

    methods: {
        createTeam() {
            const array = this.data.split('\n');
            const randomOrder = array.sort(() => 0.5 - Math.random())

            const hasil = this.chunkArray(randomOrder, this.team)
            this.teams = hasil
            console.log(hasil);
        },

        chunkArray (arr, chunkCount) {
            const chunks = [];
            while (arr.length) {
                const chunkSize = Math.ceil(arr.length / chunkCount--);
                const chunk = arr.slice(0, chunkSize);
                chunks.push(chunk);
                arr = arr.slice(chunkSize);
            }
            return chunks;
        }
    }

}
</script>

<style>

</style>