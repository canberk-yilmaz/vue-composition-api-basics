<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modals</button>
    <teleport to=".modals-container">
      <div v-if="showModal" class="modal">
        <h1>This is a modal</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          molestias fugiat eaque quis possimus esse deleniti praesentium. Vel ad
          illo tenetur corporis a culpa inventore quasi quisquam, debitis modi
          eum?
        </p>
        <button @click="showModal = false">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
//imports

import { ref } from "vue";

const showModal = ref(false);
</script>

<style scoped>
.modal {
  background: beige;
  padding: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
