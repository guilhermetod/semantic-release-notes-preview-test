const { commitConvention } = require('./tools/utils/commit-convention');

module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits', commitConvention }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
    '@semantic-release/npm',
    // eslint-disable-next-line no-template-curly-in-string
    ['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}' }],
    '@semantic-release/github',
  ],
};
