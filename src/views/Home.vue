<script setup>

const person = {
  name:'Idris Ahmad', mobile:'01303321259', email: 'md.imran300028@gmail.com'
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 py-2">
        <h1 class="text-center fw-bold">Module-8 : Assignment</h1>
        <table class="table table-bordered table-sm">
          <tr>
            <th colspan="3"><h5 class="fw-bold text-center">Student Information</h5></th>
          </tr>
          <tr v-for="(value,key) in person" :key="key">
            <th class="text-capitalize">{{key}}</th> <th>:</th> <td>{{value}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
