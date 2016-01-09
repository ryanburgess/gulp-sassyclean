var mapStream = require('map-stream');
var assign = require('object-assign');
var fs = require('fs-extra');
var fileArr = [];
var ouput = '';
var directory;
var remove;

var gulpsassyclean = function (options) {
  var defaultOpt = {
    directory: 'modules',
    remove: false
  };

  var opts = assign({}, options);

  if(opts.directory === undefined) {
    directory = defaultOpt.directory;
  }else {
    directory = opts.directory;
  }

  if(opts.remove === undefined) {
    remove = options.remove;
  }else {
    remove = opts.remove;
  }

  return mapStream(function (file, cb) {

    var fullFilePath = file.path;
    //var fileName = fullFilePath.substring(fullFilePath.lastIndexOf('/') + 1, fullFilePath.length);
    var filePath = fullFilePath.substring(0, fullFilePath.lastIndexOf('/') + 1);

    var files = fs.readdirSync(filePath + directory + '/');
    for (var i in files) {
      if(files[i].indexOf('.scss') !== -1) {
        var name = files[i];
        name = name.replace('_', '').replace('.scss', '');
        // push unused files to an array
        fileArr.push(name);
      }
    }

    fs.readFile(fullFilePath, 'utf8', function (err, data) {
      if (err) {
        return err;
      }

      // loop through the unused files array
      var num = 0;
      fileArr.forEach(function(entry) {
        if(data.indexOf('@import "' + directory + '/' + entry + '";') === -1) {
          ouput += '_' + entry + '.scss\n';
          num++;
          if(remove === true) {
            fs.unlink(filePath + directory + '/_' + entry + '.scss', function (err) {
              if (err) {
                throw err;
              }
            });
          }
        }
      });
      if(remove === true && num !== 0) {
        console.log('\nSassyClean: ' + num + ' unused Sass modules have been removed\n');
      }else {
        console.log('\nSassyClean: there is currently ' + num + ' unused ' + directory + '\n');
      }
      console.log(ouput);
    });

    cb(null, file);
  });
};

// Export the plugin main function
module.exports = gulpsassyclean;