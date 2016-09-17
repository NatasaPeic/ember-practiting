import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    // console.log(params);
    let lists = [
    // return [
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

    for (let i = 0; i < lists.length; i++) {
      if(lists[i].id.toString() === params.list_id){
        console.log(lists[i]);
        return lists[i];
      }
    }



  }
});
