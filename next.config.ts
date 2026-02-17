import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	images: {
		dangerouslyAllowSVG: true,
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '*',
			},
			{
				protocol: 'https',
				hostname: 'apex-api-strapi.onrender.com',
			},
		],
	},
}

export default nextConfig
