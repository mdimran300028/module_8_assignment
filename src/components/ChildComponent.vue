<script setup>
defineProps(['message'])
const emit = defineEmits(['update:message'])
const messageEmitted = ()=>{
  emit('update:message','Emitted Message From Child Component!!!')
}
</script>

<template>
<div class="card">
  <div class="card-header">
    <h5 class="mb-0 fw-bold">Child Component</h5>
  </div>
  <div class="card-body">{{message}}</div>
  <div class="card-footer">
    <button class="btn btn-primary" @click="messageEmitted">Click Me</button>
  </div>
</div>
</template>

<style scoped>

</style>
