<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label for="">
        Show dark modals?
        <input type="checkbox" v-model="showDarkModals" />
      </label>
    </div>
    <button @click="showModal = true">Show modals</button>
    <component :is="showDarkModals ? ModalDark : Modal" v-model="showModal" title="Title with prop">
      <template #title>This is a modal.</template>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        molestias fugiat eaque quis possimus esse deleniti praesentium. Vel ad
        illo tenetur corporis a culpa inventore quasi quisquam, debitis modi
        eum?
      </p>
    </component>
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
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";
import { ref } from "vue";

const showDarkModals = ref(false);
const showModal = ref(false);
</script>
