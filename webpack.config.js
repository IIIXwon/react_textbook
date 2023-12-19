module.export = {
    entry: '.jsx/app.jsx',
    output: {
        path: __dirname+ + 'dist',
        filename: 'bundle.js'
    },
    devtools: '#sorcemap',
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
            }
        ]
    }
}