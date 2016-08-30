var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');
var templates = require('../../dist/templates');

module.exports = Backbone.View.extend({
  className: 'modal modal-conflict overlay',

  template: templates.conflictdialog,

  events: {
    'click .got-it': 'confirm',
    'click .reload': 'reload',
    'click .merge': 'merge',
  },

  initialize: function() {
    this.mergeCallback = this.options.onMerge;
  },

  render: function() {
    var modal = {
      message: this.message
    };
    this.$el.empty().append(_.template(this.template, modal, {
      variable: 'modal'
    }));

    return this;
  },

  reload: function() {
    window.location.reload();
    return false;
  },

  merge: function() {
    this.mergeCallback.apply(this, arguments);
    this.confirm();
    return false;
  },

  confirm: function() {
    var view = this;
    this.$el.fadeOut('fast', function() {
      view.remove();
    });
    return false;
  }
});
