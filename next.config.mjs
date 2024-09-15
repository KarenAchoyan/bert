/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['127.0.0.1'], // Allow images from localhost
    },
    env: {
        API_URL: "http://127.0.0.1:8000/api",
        IMAGE_URL: "http://127.0.0.1:8000/storage/",
        IMAGE_URL2: "http://127.0.0.1:8000/",
    },
};

export default nextConfig;
