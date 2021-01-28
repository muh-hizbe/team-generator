<template>
  <div class="align-center py-10 border-t-4 border-blue-500">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
        <h1 class="text-6xl text-gray-700 text-center font-semibold mb-10">Random Team Generator</h1>
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
