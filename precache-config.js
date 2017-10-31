var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [],
    stripePrefix: 'dist',
    root: 'dist/',
    plugins:[
        new SWPrecacheWebpackPlugin({
            cacheId: 'ng-pwa',
            filename: 'service-worker.js',
            staticFileGlobs: [
                'dist/index.html',
                'dist/**.js',
                'dist/**.css'
            ],

        })
    ],
    stripePrefix: 'dist/assets',
    mergeStaticsConfig: true
};