import Route from '@ember/routing/route';

export default Route.extend({
    model({id}){
      const people = this.modelFor('people').people;
      const person = people.findBy('id', id);
      if(!person){
        this.transitionTo('people');
      }else {
        return {
          name: person.name,
          title:person.isFemale ? 'Miss.' : 'Mr.',
        };
      }
    }
});
