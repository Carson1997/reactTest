const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './src/index.html'),
	filename: 'index.html'
});

module.exports = {
	mode: 'development',
	plugins: [
		htmlPlugin
	],
	module: { // 第三方模块配置规则
		rules: [{
				test: /\.js|jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},

		],
	},
	resolve:{
		extensions:['.js','.jsx','.json'] ,//可以省略不写
		alias:{
			'@':path.join(__dirname,'./src'),//@代表src这一层
		}
	}
}
