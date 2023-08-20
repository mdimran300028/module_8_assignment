<script setup>
import ParentComponent from "../components/ParentComponent.vue";
import {reactive} from "vue";

const data = reactive({
  message:'Hello Ostad'
})

</script>

<template>
  <div class="container py-2">
    <div class="row">
      <div class="col-12">
        <ParentComponent v-model:message="data.message"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
