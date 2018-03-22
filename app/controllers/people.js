import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  actions:{
    incrementSalary(percent = 0.1){
      this.get('model.people').forEach((person) =>{
        const currentSalary = get(person, 'salario');
        const newSalary = currentSalary*(1+percent);
        set(person, 'salario', newSalary);
      });
    },
  },
    totalSalary: computed('model.people.@each.salary', function(){
      return this.get('model.people ').reduce(
        (sumSalary, person) => sumSalary +  person.salary,
        0,
      );
    }),
});
