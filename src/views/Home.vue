<template>
  <div class="home">
    <!-- <post-grid :posts="posts" /> -->
    <register />
  </div>
</template>

<script>
import PostGrid from "../components/PostGrid";
import Register from "../components/Register";

export default {
  name: "Home",
  components: { PostGrid, Register },
  data() {
    return {
      posts: [
        { index: 0, title: "等待戈多", body: "等待戈多，迪迪和戈戈" },
        { index: 1, title: "是如何", body: "等待戈多，迪迪和戈戈" },
        { index: 2, title: "瓦特", body: "等待戈多，迪迪和戈戈" },
        { index: 3, title: "马龙之死", body: "等待戈多，迪迪和戈戈" },
      ],
    };
  },
};
</script>
