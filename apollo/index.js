import apolloClient from "./ApolloClient";
import Vue from "vue";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;
