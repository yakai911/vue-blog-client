<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/Blog">博客</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>

      <span>{{ users[0].name }}</span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import listUser from "../graphql/listUser.query.gql";

export default {
  name: "App",
  setup() {
    const { result } = useQuery(listUser);
    const users = useResult(result, null, (data) => data.users);

    return { users };
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
