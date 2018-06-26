module.exports = function () {
	return {
		devServer: {
			stats: 'errors-only',
			port: 9000,
			historyApiFallback: true,
			hot: true,
			//host: '192.168.1.64', // for network share
		}
	};
};