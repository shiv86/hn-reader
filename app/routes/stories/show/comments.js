import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    highlight: {
      replace: true
    }
  },

  model: function() {
    var story = this.modelFor('stories.show');

    if (story.get('isInternal') && story.get('body')) {
      return Ember.A([story]);
    } else {
      return story.get('comments');
    }
  }
});
