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

Router.route('/members', {
  name: 'members',
  template: 'members'
});

Router.route('/register', {
	name: 'notYetMember',
	template: 'notYetMember'
});

Router.route('/members', {
  name: 'members',
  template: 'members'
});

Router.route('/faq', {
  name: 'faq',
  template: 'faq'
});

Router.route('/profile', {
  name: 'editprof',
  template: 'editprof'
});