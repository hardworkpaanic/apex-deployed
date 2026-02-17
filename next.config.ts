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
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337',
			},
		],
	},
}

export default nextConfig
