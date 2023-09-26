const isGithubActions = process.env.GITHUB_ACTIONS || false

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : 'standalone',
}

module.exports = nextConfig
