/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com'],
    },
    env: {
        UserPoolId: process.env.UserPoolId,
        ClientId: process.env.ClientId,
    },
}

module.exports = nextConfig