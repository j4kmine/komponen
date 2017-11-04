// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    // if( ionic.Platform.isAndroid() ) {
    //    admobid = { // for Android
    //    banner: 'ca-app-pub-3940256099942544/6300978111' // Change this to your Ad Unit Id for
     
    //    };
    //    if(AdMob){
    //          AdMob.createBanner( {
    //           adId:admobid.banner,
    //           position:AdMob.AD_POSITION.BOTTOM_CENTER,
    //           autoShow:true
    //        });
    //    }
    
    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
  .state('app.color', {
      url: '/color',
      views: {
        'menuContent': {
          templateUrl: 'templates/color.html'
        }
      }
    })
  .state('app.button', {
      url: '/button',
      views: {
        'menuContent': {
          templateUrl: 'templates/button.html'
        }
      }
    })
   .state('app.form', {
      url: '/form',
      views: {
        'menuContent': {
          templateUrl: 'templates/form.html'
        }
      }
    })
    .state('app.toggle', {
      url: '/toggle',
      views: {
        'menuContent': {
          templateUrl: 'templates/toggle.html'
        }
      }
    })
     .state('app.grid', {
      url: '/grid',
      views: {
        'menuContent': {
          templateUrl: 'templates/grid.html'
        }
      }
    })
    .state('app.icon', {
      url: '/icon',
      views: {
        'menuContent': {
          templateUrl: 'templates/icon.html'
        }
      }
    })
    .state('app.padding', {
      url: '/padding',
      views: {
        'menuContent': {
          templateUrl: 'templates/padding.html'
        }
      }
    })
  .state('app.list', {
      url: '/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/list.html'
        }
      }
    })
  .state('app.cards', {
      url: '/cards',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.actionsheet', {
      url: '/actionsheet',
      views: {
        'menuContent': {
          templateUrl: 'templates/actionsheet.html',
          controller: 'ActionSheetCtrl'
        }
      }
    })
     .state('app.formadvance', {
      url: '/formadvance',
      views: {
        'menuContent': {
          templateUrl: 'templates/formadvance.html',
          controller: 'FormCtrl'
        }
      }
    })
      .state('app.event', {
      url: '/event',
      views: {
        'menuContent': {
          templateUrl: 'templates/event.html',
          controller: 'EventCtrl'
        }
      }
    })
       .state('app.modal', {
      url: '/modal',
      views: {
        'menuContent': {
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl'
        }
      }
    })
     .state('app.popover', {
      url: '/popover',
      views: {
        'menuContent': {
          templateUrl: 'templates/popover.html',
          controller: 'PopoverCtrl'
        }
      }
    })
      .state('app.popup', {
      url: '/popup',
      views: {
        'menuContent': {
          templateUrl: 'templates/popup.html',
          controller: 'popupCtrl'
        }
      }
    })
    .state('app.scroll', {
      url: '/scroll',
      views: {
        'menuContent': {
          templateUrl: 'templates/scroll.html',
          controller: 'scrollCtrl'
        }
      }
    })
    .state('app.infinitsecroll', {
      url: '/infinitsecroll',
      views: {
        'menuContent': {
          templateUrl: 'templates/infinitescroll.html',
          controller: 'infiniteScrollCtrl'
        }
      }
    })
    .state('app.slidebox', {
      url: '/slidebox',
      views: {
        'menuContent': {
          templateUrl: 'templates/slidebox.html',
          controller: 'slideboxCtrl'
        }
      }
    })
    .state('app.listadvance', {
      url: '/listadvance',
      views: {
        'menuContent': {
          templateUrl: 'templates/listadvance.html',
          controller: 'ListAdvanceCtrl'
        }
      }
    })
    .state('app.loading', {
      url: '/loading',
      views: {
        'menuContent': {
          templateUrl: 'templates/loading.html',
          controller: 'LoadingCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
