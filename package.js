Package.describe({
  name: 'patrickml:swal',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A Wrapper for Sweet Alerts 2 for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/patrickml/swal',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(
    [
      'lib/client/sweetalert2.css',
      'lib/client/sweetalert2.min.js'
    ],
    'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('patrickml:swal');
  api.addFiles('swal-tests.js');
});
