var assign = require('object-assign');
var fs = require('fs-extra');
var path = require('path');
var dir = path.dirname();
var fileArr = [];
var ouput = '';

var options = {
  directory: ['modules'],
  remove: false
};
var gulpsassyclean = function (options) {
  var opts = assign({}, options);
  if(opts.directory === undefined){
    directory = options.directory;
  }

  if(opts.remove === undefined){
    remove = options.remove;
  }
};

// Export the plugin main function
module.exports = gulpsassyclean;