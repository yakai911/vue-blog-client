const fs=require('fs')
const path =require('path')

const loadTackingPath=path.resolve(__dirname,'../node_modules/@vue/apollo-composable/dist/util/loadingTracking.js')

fs.writFileSync(
    loadTackingPath,
    fs.readFileSync(loadTackingPath,'utf-8').replace(/\.\$root/m,'.root'/)
)

const useQueryPath=path.resolve(
    __dirname,
    '../node_modules/@vue/apollo-composable/dist/useQuery.js'
)

fs.writeFileSync(
    useQueryPath,
    fs
    .readFileSync(useQueryPath,'utf-8')
    .replace(/(^.*onServerPrefetch)/m,'$1=()=>{},$1')
    .replace(/(.*require\("vue"\);)/m,'')
    .replace(/^.*(nextTick)/m,'vue_demi_1.$1')
)