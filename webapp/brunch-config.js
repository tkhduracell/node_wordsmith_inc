// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^app\/js/,
      'js/vendor.js': /^node_modules/
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': /^app\/css/,
      'css/vendor.css': /^node_modules/
    }
  }
}

exports.plugins = {
  babel: {
    presets: ['latest']
  }
}

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
}
