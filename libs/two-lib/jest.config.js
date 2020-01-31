module.exports = {
  name: 'two-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/two-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
