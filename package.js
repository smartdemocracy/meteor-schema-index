Package.describe({
  name: "antoniopresto:schema-index",
  summary: "Control some MongoDB indexing with schema options",
  version: "1.1.0",
  git: "https://github.com/smartdemocracy/meteor-schema-index.git"
});

Package.onUse(function(api) {
  api.use([
    'antoniopresto:collection2-core@1.2.0',
    'underscore@1.0.0',
    'minimongo@1.0.0',
    'check@1.0.0',
  ]);

  api.addFiles([
    'lib/indexing.js'
  ]);
});

Package.onTest(function(api) {
  api.use([
    'antoniopresto:schema-index',
    'tinytest@1.0.0',
    'underscore@1.0.0',
    'random@1.0.0',
    'mongo@1.0.0',
    'antoniopresto:simple-schema',
  ]);

  api.addFiles([
    'tests/indexing.js'
  ]);
});
