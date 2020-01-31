module.exports = {
  name: 'blueeye-platform',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/blueeye-platform',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
