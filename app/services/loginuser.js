import Service from '@ember/service';
import {computed, set, get} from '@ember/object';

export default Service.extend({

  currentUser:null,
  autenticate(userName, password, arruser, arrpass){
      return new Promise((resolve, reject)=>{
        for (var i = 0; i < arruser.length; i++) {
          if (userName === arruser[i] && password === arrpass[i]) {
            alert('dsdoisdois');
            resolve()
            break;
          }else {
            alert("user no authenticated")
            break;
          }
        }

      })
  },
});
