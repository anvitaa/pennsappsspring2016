// Routes
Router.configure({
  layoutTemplate: 'home'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/login');

Router.route('/notYetMember');

Router.route('/discussion');
