import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	images: {
		dangerouslyAllowSVG: true,
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'apex-api-strapi.onrender.com'
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337'
			}
		]
	}
}

export default nextConfig
