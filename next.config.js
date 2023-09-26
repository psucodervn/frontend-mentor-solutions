const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = (process.env.GITHUB_REPOSITORY || '').replace(/.*?\//, '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubActions ? 'export' : 'standalone',
  assetPrefix: isGithubActions ? `/${repo}/` : undefined,
  basePath: isGithubActions ? `/${repo}` : undefined,
}

module.exports = nextConfig
