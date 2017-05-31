/*******************************
          Clean Task
*******************************/

var
  del    = require('del'),
  config = require('./config/user'),
  tasks  = require('./config/tasks')
;

// cleans distribution files
module.exports = function(callback) {
  var paths = [];
  if (config.paths.clean instanceof Array) {
    paths = paths.concat(config.paths.clean);
  } else {
    paths.push(config.paths.clean);
  }
  return del(paths, tasks.settings.del, callback);
};
