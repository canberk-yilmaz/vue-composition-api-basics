<template>
  <div class="posts">
    <h1>Posts</h1>
    <textarea v-autofocus></textarea>

    <ul>
      <li>
        <RouterLink to="/postDetails/id1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetails/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetails/id3">Post 3</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
// imports
import { vAutofocus } from "../directives/vAutofocus";
</script>
