exports.config = {
	specs: ['./tpm/index.spec.js'],
	capabilities: {
		browserName: 'chrome'
	},
	baseUrl: 'http://127.0.0.1:8080/',
	framework: 'jasmine',
};