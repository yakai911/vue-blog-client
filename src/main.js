import { createApp, provide, render, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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
