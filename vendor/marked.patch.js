var _ = require('underscore');

module.exports = function(marked) {
  marked.setOptions({
    gfm: true,
    tables: true,
    sanitize: true,
    smartLists: true
  });
}
