const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './source/app.js',
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../', 'build')
    }
}