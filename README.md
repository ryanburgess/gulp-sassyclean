# Gulp Sassyclean

[![npm version](https://badge.fury.io/js/gulp-sassyclean.svg)](http://badge.fury.io/js/gulp-sassyclean) [![npm](https://img.shields.io/npm/dm/gulp-sassyclean.svg)](https://github.com/ryanburgess/gulp-sassyclean) [![Build Status](https://travis-ci.org/ryanburgess/gulp-sassyclean.svg?branch=master)](https://travis-ci.org/ryanburgess/gulp-sassyclean)

![SassyClean logo](https://raw.github.com/ryanburgess/gulp-sassyclean/master/sassyclean.png)

Gulp SassyClean scans a project for partials that are never imported. SassyClean provides the option to automatically delete the unused partials or display the file name as a console log.

## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

` npm install gulp-sassyclean --save-dev `

Then, add it to your `gulpfile.js`:

```js
var sassyclean = require('gulp-sassyclean');

gulp.task('sassyclean', function () {
  return gulp.src(['./sass/*.scss'])
    .pipe(sassyclean({
      directory: 'modules',
      remove: false
    }));
});
```

### Options

#### directory
Type: `String`
Default value: `'modules'`

The directory option provides the ability to set a directory that contain Sass modules.

#### remove
Type: `Boolean`
Default value: `false`

The ablity to automatically delete unused file reference from the project.

## Related
* [Grunt SassyClean](https://github.com/ryanburgess/grunt-sassyclean)
* [Sassy Sass](https://github.com/ryanburgess/sassysass)

## Contributing
1. Fork it
2. Run `npm install`
3. Run Gulp watch `gulp`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)
