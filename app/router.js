import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('people', function() {
    this.route('person', {path: ':id'});
  });
  this.route('login');
  this.route('addnumbers');
});

export default Router;
