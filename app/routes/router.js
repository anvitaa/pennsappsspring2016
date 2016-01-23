
// Routes
Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', {
  name: 'home',
  template: 'home'
});
// Router.route('/register');
 Router.route('/login');

Router.route('/discussion', {
  name: 'discussion',
  template: 'discussion'
});
