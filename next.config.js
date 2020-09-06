const withBundleAnalyzer = require('@next/bundle-analyzer')
const withImages = require('next-images')

module.exports = withImages({
    env: {
        LOCAL_ADDRESS: 'http://localhost:3000',
        API_ADDRESS: 'https://lucioadmin.pettzonafrica.com',
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://lucioadmin.pettzonafrica.com/api/:path*',
            },
        ]
    },
    async(phase, defaultConfig) {
        return withBundleAnalyzer(defaultConfig)
    },
})
