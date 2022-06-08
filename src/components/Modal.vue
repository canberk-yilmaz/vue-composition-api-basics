<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        molestias fugiat eaque quis possimus esse deleniti praesentium. Vel ad
        illo tenetur corporis a culpa inventore quasi quisquam, debitis modi
        eum?
      </p>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

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
