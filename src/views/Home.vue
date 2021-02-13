<template>
  <div class="align-center border-t-4 border-blue-500">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container min-h-screen py-10">     
        <h1 class="text-3xl lg:text-6xl text-gray-700 font-mono font-semibold mb-0 lg:mb-32 text-center"><span class="font-bold text-blue-500">🌀Random</span> Team Generator</h1>   
        <Form />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
      Form
  }
}
</script>
