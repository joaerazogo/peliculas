import Component from '@ember/component';
import $ from 'jquery';
import RSVP from 'rsvp';

export default Component.extend({
  didInsertElement(){
    this._super(...arguments);
    const person = this.get('person');
    this.$('.person-detail').css(
        'background-color',
        this.getColorBySexo(person.sexo)
      );
  },
  getColorBySexo(sexo){
    if (sexo == 'M') {
      return '#33b012';
    } else if(sexo == 'F'){
      return '#b213ad';
    }
  },
});
