const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const express = require('express');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "production",
	watchOptions: {
	    aggregateTimeout: 300, // After seeing an edit, wait .3 seconds to recompile
	    poll: 100 // Check for edits every 5 seconds
	},
    resolve: {
        extensions: ['.js', '.jsx']
    },
	plugins: [
	    new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html')
		}),
        /*
        new CopyPlugin({
            patterns: [
                {
                    from: './static',
                    to: './dist'
                }
            ]
        })
        */
	],
	context: __dirname,
	entry: './src/main.jsx',
	output: {
	    path: path.resolve( __dirname, 'dist' ),
	    filename: 'main.js',
	},
	module: {
	    rules: [
	        {
	            test: /\.(jsx|js)?$/,
	            use: 'babel-loader',
	        },
	        {
	            test: /\.css$/,
	            use: ['style-loader', 'css-loader'],
	        },
			{
				test: /\.scss$/,
				use: ['style-loader', 'scss-loader']
			},
	        {
	            test: /\.(png|j?g|svg|gif)?$/,
	            use: 'file-loader'
	        }
		]
	},
}