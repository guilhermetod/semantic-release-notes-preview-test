const releaseRules = [
  { type: 'Build', release: 'patch', section: 'Other Changes' },
  { type: 'Chore', release: false, section: 'Other Changes' },
  { type: 'CI', release: false, section: 'Other Changes' },
  { type: 'Docs', release: false, section: 'Other Changes' },
  { type: 'Feat', release: 'minor', section: 'Features' },
  { type: 'Fix', release: 'patch', section: 'Bug fixes' },
  { type: 'Perf', release: 'patch', section: 'Other Changes' },
  { type: 'Refactor', release: 'patch', section: 'Other Changes' },
  { type: 'Revert', release: 'patch', section: 'Other Changes' },
  { type: 'Style', release: false, section: 'Other Changes' },
  { type: 'Test', release: false, section: 'Other Changes' },
];

module.exports = { releaseRules };
