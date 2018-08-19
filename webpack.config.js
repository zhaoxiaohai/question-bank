const argv = require('yargs-parser')(process.argv.silce(2))
const webpackMerge = require('webpack-merge');
const mode = argv.mode || 'development'