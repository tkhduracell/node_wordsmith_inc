// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^app\/js/,
      'js/vendor.js': /^app\/node_modules/
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': /^app\/css/,
      'css/vendor.css': /^app\/node_modules/
    }
  }
}

exports.plugins = {
  babel: {
    presets: ['latest']
  }
}
