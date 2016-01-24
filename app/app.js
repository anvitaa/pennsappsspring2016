if (Meteor.isClient) {
  Messages = new Mongo.Collection('messages');

  Template.register.events({
    'submit form': function(event){
      event.preventDefault();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      Accounts.createUser({            
        email: email,
        password: password
      });
      Router.go('home');
    }

  });

  Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.logout();
    }
  });

  // Template.discussion.events({
  //   'click .question': function(event){
  //       event.preventDefault();
  //       $('.hide').toggle();
  //       $(this).toggle();
  //       $('.password').eq(0).toggle();
  //       //});

  //       $('.hide').click(function (){
  //         $('.show').toggle();
  //         $(this).toggle();
  //         $('.password').eq(0).toggle();
  //       });


  //     }

  // });
  
  Template.editprof.events({
    'submit form': function(event){
      event.preventDefault();
      var first = $('[name=firstname]').val();
      var last = $('[name=lastname]').val();
      var stat = $('[name=stat]').val();
      var data = {
        first: first,
        last: last,
        stat: stat
      }
      Meteor.users.update(Meteor.userId(), {$set: {profile: data}});     
    }
  })

  Template.user.helpers({
    firstName: function() {
      var user = Meteor.user();
      if (user.profile) {
        return user.profile.first;
      } else {
        return "Unknown user.";
      }
    }
  });

  Template.user.helpers({
    lastName: function() {
      var user = Meteor.user();
      if (user.profile) {
        return user.profile.last;
      } else {
        return "Unknown status.";
      }
    }
  });

  Template.user.helpers({
    stat: function() {
      var user = Meteor.user();
      if (user.profile) {
        return user.profile.stat;
      } else {
        return "Unknown status.";
      }
    }
  });

  Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
  });


  Template.login.events({
    'submit form': function(event){
      event.preventDefault();
      var email = $('[name=loginemail]').val();
      var password = $('[name=loginpassword]').val();
      Meteor.loginWithPassword(email, password, function(error){
        if(error){
          console.log(error.reason);
        } else {
          Router.go("home");
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

