import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';
export default Controller.extend({
  actions:{
    addnumber(){
      let {minNumber, maxNumber} = this.getProperties('minNumber', 'maxNumber');
      var suma = 0;
      if ((minNumber >=-1000 && minNumber <=1000) && (maxNumber >=-1000 && maxNumber <=1000)) {
          const suma = parseInt(minNumber) + parseInt(maxNumber);
          set(this.get('model'), 'sum', suma);
          set(this.get('model'), 'message', true);
        //this.transitionToRoute('index');
      }else{
          set(this.get('model'), 'message', false);
          //this.transitionToRoute('index');
      }
    },
  },
});
