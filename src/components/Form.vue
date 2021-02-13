<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4 items-center mx-5 lg:mx-40">
        <Description />
        <div class="flex flex-col lg:flex-row justify-center px-0 lg:px-0">
            <div class="lg:mr-2 font-mono">
                <span class="block font-semibold mb-2">Banyak Peserta : {{ countPeople }}</span>
                <textarea v-model="data" name="data" id="data" cols="30" rows="10"
                    class="rounded-lg w-full lg:w-auto bg-white p-5 border shadow-lg focus:outline-none focus:ring"
                    placeholder="Nama-nama anggota tim, dipisah dengan baris baru"></textarea>
            </div>
            <div class="mt-5 lg:mt-0 lg:ml-5">
                <div class="mb-5 font-mono">
                    <label for="team" class="block font-semibold mb-2">Banyak Tim :</label>
                    <input v-model="team" type="number" name="team" id="team"
                     class="w-full lg:w-auto p-3 shadow-lg rounded-lg bg-white border focus:outline-none focus:ring">
                </div>
                <div class="grid grid-cols-2 gap-4 font-mono">
                    <button @click="createTeam()"
                        class="transition-all duration-300 ease-in-out animate-pulse p-3 w-full lg:w-auto shadow-lg rounded-lg bg-blue-500 text-white font-semibold outline-none focus:outline-none focus:ring hover:shadow-none hover:bg-blue-800"
                    >Acak</button>
                    <button @click="() => {teams = null; data = null; team = 0;}"
                        class="transition-all duration-300 ease-in-out p-3 w-full lg:w-auto shadow-lg rounded-lg bg-red-500 text-white font-semibold outline-none focus:outline-none focus:ring hover:shadow-none hover:bg-red-800"
                    >Bersihkan</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="teams" class="mt-10 px-2 lg:px-10">
        <div class="text-center font-semibold text-3xl uppercase mb-5">Hasil</div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4 justify-center mb-10">
            <template v-for="(item, index) in teams" :key="index">
                <Card :data="item" :index="index" />
            </template>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Description from '@/components/Description.vue'
export default {
    components: {
        Card, Description
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

            const hasil = this.chunkArray(randomOrder, Math.abs(this.team))
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