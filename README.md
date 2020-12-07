1.vue3 要配合 apollo 使用，首先下载 yarn add @apollo/client graphql  
2.试图 yarn serve 发现报错提示 apollo 缺少依赖 react,只能 yarn add react  
3.然后在 main.js 设置 apolloClient,由于@apollo/client 是版本 3,所以不需要再单独下载 gql/cacheInmemory 等，都在@apollo/client 里，直接 import  
4.然后 yarn add vue-apollo,yarn add @vue/apollo-composable
