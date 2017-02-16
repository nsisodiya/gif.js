module.exports = {
    entry: "./src/main.js",
    output: {
        publicPath: "/dist/",
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 250000000000,
                },
            },
        ]
    }
}