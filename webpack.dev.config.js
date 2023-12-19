const webpack = require('webpack')

module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        './uncontroll/js/content.jsx'
    ],
    output: {
        publicPath: "dist/",
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}