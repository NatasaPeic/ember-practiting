import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        id: 1,
        title: "Groceries"
      },
      {
        id: 2,
        title: "To do list"
      },
      {
        id: 3,
        title: "Marsupials"
      }
    ];
  }
});
