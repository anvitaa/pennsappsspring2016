if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.register.events({
    'submit form': function(event){
       event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });

    }
  });

  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
    }
  });

  Template.home.events({
    'submit form': function(event){
      event.preventDefault();
      var first = $('[name=firstname]').val();
      var last = $('[name=lastname]').val();
      var status = $('[name=status]').val();
      var data = {
        first: first,
        last: last,
        status: status
      }
      console.log("Inside submit form", Meteor.user());
      Meteor.users.update(Meteor.userId(), {$set: {profile: data}});     
    }
  })

  // Meteor.loginWithPassword(email, password, function(error){
  //   if(error){
  //       console.log(error.reason);
  //   } else {
  //       Router.go("home");
  //   }
  // });

  // Template.navigation.events({
  //   'click .logout': function(event){
  //       event.preventDefault();
  //       Meteor.logout();
  //       Router.go('login');
  //   }
  // });

  Template.user.helpers({
  firstName: function() {
    var user = Meteor.user();
    if (user.profile) {
      return user.profile.first;
    } else {
      return "unknown user";
    }
  }
  });

  Template.user.helpers({
  status: function() {
    var user = Meteor.user();
    if (user.profile) {
      return user.profile.status;
    } else {
      return "Unknown Status";
    }
  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}