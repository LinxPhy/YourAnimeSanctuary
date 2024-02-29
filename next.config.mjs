/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'firebasestorage.googleapis.com',
        //     },
        //     {
        //         protocol: 'https',
        //         hostname: 'cdn.myanimelist.net'
        //     }
        // ]
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            }
        ]
    }

};

export default nextConfig;
