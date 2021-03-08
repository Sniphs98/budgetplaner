module.exports = {
    outputDir: '../public',
    devServer: {
        port: 3000,
        proxy: 'http://localhost:8080'
    }
}
