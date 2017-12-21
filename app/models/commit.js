var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  initialize: function(attributes, options) {
    _.bindAll.apply(_, [this].concat(_.functions(this)));

    this.repo = attributes.repo;
  },

  url: function() {
    return this.repo.url() + '/commits/' + this.get('sha');
  }
});
