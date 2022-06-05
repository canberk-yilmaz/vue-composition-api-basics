<template>
  <div class="posts">
    <h1>Posts</h1>
    <textarea v-autofocus></textarea>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetails/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { vAutofocus } from "../directives/vAutofocus";

//posts

const posts = ref([
  {
    id: "id1",
    title: "Post 1",
    body: "This is the body of post 1",
  },
  {
    id: "id2",
    title: "Post 2",
    body: "This is the body of post 2",
  },
  {
    id: "id3",
    title: "Post 3",
    body: "This is the body of post 3",
  },
]);
</script>
