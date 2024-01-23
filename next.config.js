/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true, // Enable layers experiment
        };

        config.module.rules.push({
            test: /\.wasm$/,
            type: 'webassembly/async',
        });

        return config;
    },
}

module.exports = nextConfig;