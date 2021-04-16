const path = require('path');
 
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: true
    },
};

