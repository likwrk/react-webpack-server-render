var path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {
	entry: './lib/main.jsx',

	output: {
		path: '/',
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css'],
	},

	externals: {
		'react': 'React',
		'redux': 'Redux',
		'react-redux': 'ReactRedux',
		'react-dom': 'ReactDOM',
		'react-router': 'ReactRouter'
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, 'lib')],
				// exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

	plugins: [
    new WebpackShellPlugin({
    	onBuildStart:['npm run render'],
    	onBuildEnd:['npm run render']
    })
  ]
}

module.exports = config;
