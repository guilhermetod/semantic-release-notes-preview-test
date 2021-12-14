const { releaseRules } = require('./tools/utils/release-rules');

module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits', releaseRules: releaseRules.map(({ type, release }) => ({ type, release })) }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits',
      presetConfig: {
        types: releaseRules.map(({ type, section }) => ({ type, section, hidden: false })),
      } }],
    ['@semantic-release/npm', { npmPublish: false }],
    ['@semantic-release/git'],
    '@semantic-release/github',
  ],
};
