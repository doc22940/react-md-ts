const webpack = require('webpack');
const { resolve, join } = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: [
            join(__dirname, "src"),
            'node_modules',
        ],
    },

    context: resolve(__dirname, 'src'),

    entry: [
        './style.scss',
        './index.tsx' // the entry point of our app
    ],

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                'react',
                            ],
                        }
                    },
                    'ts-loader',
                ],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },

    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        noInfo: true,
        port: 3000,
        publicPath: '/',
    }
};