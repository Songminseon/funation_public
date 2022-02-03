const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = 
    //  [
    //      {
    //      target:"node",
    //      externals:[nodeExternals()],
    //      entry : './servers/server.js',
    //      output:{
    //          filename:"bundle.js",
    //          path:path.resolve(__dirname, "dist/server")
    //      },

    //      plugins : [
    //          new Dotenv({
    //              path:"./.env",
    //              safe:true,
    //              systemvars:true,
    //              silent:"true",
    //              defaults:false,
    //          })
    //      ]

    //  },
    {
        entry:{
            app:['babel-polyfill','./src/index.js']
        },
        output: {
            path:path.resolve(__dirname, 'dist'),
            filename: 'index_bundle.js',
            publicPath: '/',
        },

        module: {
            rules: [
                {
                    test: /\.js$|jsx/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]

                },
                {
                    test:/\.(eot|woff|ttf)/,
                    use:[
                        {
                            loader:'file-loader'
                        }
                    ]
                },

                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },

        devServer: {
            port:port,
            open:true,
            compress:true,
            contentBase:path.join(__dirname, 'dist'),
            historyApiFallback:true,
            proxy:{
                '/api':{
                    target:'http://localhost:8080',
                },
                '/auth':{
                    target:'http://localhost:8080',
                },
                '/function':{
                    target:'http://localhost:8080',
                },
                '/payments':{
                    target:'http://localhost:8080',
                },
                
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
            }),
            new Dotenv({
                path:"./.env",
                safe:true,
                systemvars:true,
                silent:"true",
                defaults:false,
            }),
            new CopyWebpackPlugin({
                patterns:[{from:'./public', to: './myAssets'}]
            }),
            new ServiceWorkerWebpackPlugin({
                entry:path.join(__dirname, './public/firebase-messaging-sw.js')
            })  

        ],
    }
//  ];
