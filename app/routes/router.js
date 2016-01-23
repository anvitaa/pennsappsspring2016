// Routes
Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});


Router.route('/discussion', {
  name: 'discussion',
  template: 'discussion'
});

Router.route('/resources', {
  name: 'resources',
  template: 'resources'
});
