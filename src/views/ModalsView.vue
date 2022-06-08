<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modals</button>
    <Modals v-if="showModal"></Modals>
  </div>
</template>

<!--
<script>
//options api
import Modals from "@/components/Modal.vue";
export default {
  components: {
    Modals,
  },
};
</script>
 -->
<script setup>
//imports
import Modals from "@/components/Modal.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>
