import { createApp, provide, render, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

// const query = gql`
//   {
//     users {
//       id
//       name
//       email
//     }
//   }
// `;

// apolloClient.query({ query }).then((res) => console.log(res.data));

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render() {
    return h(App);
  },
})
  .use(store)
  .use(router)
  .mount("#app");
