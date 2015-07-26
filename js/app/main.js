/**
 * Learning some basics via: http://www.korenlc.com/backbone-js-tutorial-getting-started-with-backbone/
 */

// defines the namespace
window.Voidtrader = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {}
};

// Screen model
Voidtrader.Models.Screen = Backbone.Model.extend({
  defaults: {
    title: 'Title',
    description: 'Description'
  },
  validate: function(attrs, options){
    if (!attrs.title){
        alert('Your screen must have a title.');
    }
    if (attrs.title.length < 2){
        alert('Your screen\'s title must have more than one letter!');
    }
  }
});

// Screen view
Voidtrader.Views.Screen = Backbone.View.extend({
  tagName: 'li',
  className: 'screen',
  id: 'gamescreen',
  events: {
    //'click .create':   'createScreen',
    'click .edit':   'editScreen',
    'click .delete': 'deleteScreen'
  },
  // createScreen: function(){
  //   // prompts for title
  //   var newScreen = prompt("Screen title:");
  //   // no change if user hits cancel
  //   if (!newScreen)return;
  //   // sets new name to model
  //   this.model.set('name', newScreen);
  // },
  editScreen: function(){
    var newScreen = prompt("New animal title:", this.model.get('title')); // prompts for new title
    if (!newScreen)return;  // no change if user hits cancel
    this.model.set('title', newScreen); // sets new title to model
  },
  deleteScreen: function(){
    this.model.destroy(); // deletes the model when delete button clicked
  },
  newTemplate: _.template($('#gamescreenTemplate').html()), // external template
  initialize: function(){
    this.render(); // render is an optional function that defines the logic for rendering a template
    this.model.on('change', this.render, this); // calls render function once name changed
    this.model.on('destroy', this.remove, this); // calls remove function once model deleted
  },
  remove: function(){
    this.$el.remove(); // removes the HTML element from view when delete button clicked/model deleted
  },
  render: function(){
    // the below line represents the code prior to adding the template
    // this.$el.html(this.model.get('name') + ' is ' + this.model.get('color') + ' and says ' + this.model.get('sound'));
    this.$el.html(this.newTemplate(this.model.toJSON())); // calls the template
  }
});

// Screen collection
Voidtrader.Collections.Screen = Backbone.Collection.extend({
  model: Voidtrader.Models.Screen
});

// adding individual models to collection
// Create the collection
// var screenCollection = new Voidtrader.Collections.Screen();
// To create a collection with values:
var screenCollection = new Voidtrader.Collections.Screen([
  {
    title: 'Start Game',
    description: 'Welcome to Void Trader'
  },
  {
    title: 'Game Credits',
    description: 'Created by Mitchell R.K. Shelton'
  }
]);

// Add the load game screen to the collection
var startScreen = new Voidtrader.Models.Screen({title: 'Load Game', description: 'Load a saved game'});
var startScreenView = new Voidtrader.Views.Screen({model: startScreen});
screenCollection.add(startScreen);

// Add the create character screen to the collection
var creditsScreen = new Voidtrader.Models.Screen({title: 'Create Character', description: 'Create a new character.'});
var creditsScreenView = new Voidtrader.Views.Screen({model: creditsScreen});
screenCollection.add(creditsScreen);

// View for all screens (collection)
Voidtrader.Views.Screens = Backbone.View.extend({ // plural to distinguish as the view for the collection
  tagName: 'ul',
  initialize: function(){
    this.collection;
  },
  render: function(){
    this.collection.each(function(Screen){
      var screenView = new Voidtrader.Views.Screen({model: Screen});
      $(document.body).append(screenView.el);
    });
  }
});

// creates view for collection and renders collection
var screensView = new Voidtrader.Views.Screens({collection: screenCollection});
screensView.render();

// Backbone router
Voidtrader.Router = Backbone.Router.extend({
   // sets the routes
  routes: {
    '':         'index', // /
    'edit/:id': 'edit'   // /#edit/7
  },
  // Define function for each route
  index: function(){
    console.log('index route');
  },
  edit: function(id){
    console.log('edit route with id: ' + id);
  }
});

var newRouter = new Voidtrader.Router;
Backbone.history.start(); // start Backbone history