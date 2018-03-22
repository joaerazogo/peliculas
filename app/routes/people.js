import Route from '@ember/routing/route';

export default Route.extend({
    model(){
      var salariototal = 0;
      for (var i = 0; i < 5; i++) {
        salariototal = salariototal + 10;
      }
      return{
        salariototal,
        people:[
          {
            id: 'cr1',
            name:'Cristian',
            isFemale:false,
            sexo:'M',
            salario: 1800000,
            password: 'cr11'
          },
          {
            id: 'ml1',
            name:'Melissa',
            isFemale:true,
            sexo:'F',
            salario: 1600000,
            password: 'ml66'
          },
          {
            id: 'jp1',
            name:'Juan',
            isFemale:false,
            sexo:'F',
            salario: 1700000,
            password: 'jp12'
          },
          {
            id: 'pe1',
            name:'Pedro',
            isFemale:false,
            sexo:'M',
            salario: 1500000,
            password: 'pe11'
          },
          {
            id: 'ad1',
            name:'Andrea',
            isFemale:true,
            sexo:'F',
            salario: 1870000,
            password: 'adr1'
          },
          {
            id: 'sa1',
            name:'Sandra',
            isFemale:true,
            sexo:'F',
            salario: 1300000,
            password: 'san123'
          },
        ],
      };
    }
});
