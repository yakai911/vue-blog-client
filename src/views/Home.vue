<template>
  <div class="home">
    <post-grid :posts="posts" />
  </div>
</template>

<script>
import PostGrid from "../components/PostGrid";

export default {
  name: "Home",
  components: { PostGrid },
  data() {
    return {
      token: "",
      isAuth: false,
      posts: [
        { title: "是如何", author: "塞缪尔·贝克特" },
        { title: "等待戈多", author: "塞缪尔·贝克特" },
        { title: "马龙之死", author: "塞缪尔·贝克特" },
      ],
    };
  },
  created() {
    this.$watch("token", () => {
      this.isAuth = !this.isAuth;
    });
  },
  methods: {
    displayName() {},
  },
};
</script>
