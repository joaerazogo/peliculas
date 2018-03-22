import Controller from '@ember/controller';
import { inject } from '@ember/service';
import {computed, set, get} from '@ember/object';
export default Controller.extend({
  loginuser: Ember.inject.service(),
  actions: {
  login(){
    let {userName, password} = this.getProperties('userName', 'password');
    var i = 0;
    var arruser = new Array(5);
    var arrpass = new Array(5);
    this.get('model.people').forEach((person) =>{
      arruser[i] = get(person, 'name');
      arrpass[i] = get(person, 'password');
      i++;
    });
    this.get('loginuser').autenticate(userName, password, arruser, arrpass).then(()=>{
      this.transitionToRoute('about');
    }, (err) =>{
      alert('bad login' + err.responseText);
    });
  }
},
transitionToPreviousRoute(){
  var previousTransition = this.get('previousTransition');
  if (previousTransition) {
    this.set('previousTransition', null);
    previousTransition.retry();
  } else {
    // Default back to homepage
    this.transitionToRoute('index');
  }
}

});
