<script setup>
defineProps(['message'])
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h5 class="mb-0 fw-bold">Parent Component</h5>
    </div>
    <div class="card-body">
      <ChildComponent :message="message"/>
    </div>
  </div>
</template>

<style scoped>

</style>
