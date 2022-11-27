const isGithubActions = process.env.GITHUB_ACTIONS || false

//default values
let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}`
  basePath = `/${repo}`

  module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
  }

}
else {
    //export undefined if not on ci
    module.exports = {
        assetPrefix: undefined,
        basePath: undefined,
      }
}
