<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostGrid",
  props: {
    posts: Array,
  },
};
</script>

<style></style>
