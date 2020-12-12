<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/Blog">博客</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>

      <ul className="log-ul" v-if="isAuth">
        <li>
          <router-link to="/Login">
            退出登录
          </router-link>
        </li>
      </ul>

      <ul className="log-ul" v-else>
        <li>
          <router-link to="/Login">登录</router-link>
        </li>
        <li>
          <router-link to="/SignUp">注册</router-link>
        </li>
      </ul>
      <span v-if="user">{{ user.name }}</span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import currentUser from "../graphql/currentUser.query.gql";

export default {
  name: "App",
  setup() {
    const isAuth = ref(false);
    const route = useRoute();
    const { result } = useQuery(currentUser);
    const user = useResult(result, null, (data) => data.currentUser);

    return { user, route, isAuth };
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

#nav {
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    112.71deg,
    #121417 107.91%,
    #152331 50.9%,
    #2d1c3b -7.06%
  );

  & span {
    color: white;
    margin-right: 50px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;

    & li {
      margin-left: 45px;

      & a {
        color: white;
        font-size: 20px;
        font-weight: 500;
      }
      & a.router-link-exact-active {
        color: #d6e1ef;
      }
    }
  }
}

#nav a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
