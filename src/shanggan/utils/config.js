const devServer = 'https://beta-m.genshuixue.com'
const proServer = 'https://m.genshuixue.com'

let path = null;
// es6 版本
if (NODE_ENV === 'dev') {
    path = devServer;
} else if (NODE_ENV === 'production') {
    path = proServer;
}
const config = {
    // 服务地址
    SERVER_HOST: path,
};

export default config;
