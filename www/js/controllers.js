angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('ActionSheetCtrl', function($scope, $ionicActionSheet, $ionicBackdrop, $timeout) {
 $scope.triggerActionSheet = function() {

 var showActionSheet = $ionicActionSheet.show({
 buttons: [
 { text: 'Edit 1' },
 { text: 'Edit 2' }
 ],
 destructiveText: 'Delete',
 titleText: 'Action Sheet',
 cancelText: 'Cancel',
 cancel: function() {

 },
 buttonClicked: function(index) {
 if(index === 0) {

 }
 if(index === 1) {

 }
 },
 destructiveButtonClicked: function() {

 }
 });
 };

 $scope.showBackdrop = function() {
 $ionicBackdrop.retain();
 $timeout(function() {
 $ionicBackdrop.release();
 }, 3000);
 };

})
.controller('FormCtrl', function($scope, $stateParams) {
  $scope.toggleModel = {
   value1 : true,
   value2 : false,
   value3 : false
  };

})
.controller('ModalCtrl', function($scope,  $ionicModal,$ionicHistory) {
 //  $scope.modal = $ionicModal.fromTemplate( '<ion-modal-view>' +
 // ' <ion-header-bar>' +
 // '<h1 class = "title">Modal Title</h1>' +
 // '</ion-header-bar>' +
 // '<ion-content>'+
 // '<button class = "button icon icon-left ion-ios-close-outline"ng-click = "closeModal()">Close Modal</button>' +
 // '</ion-content>' +
 // '</ion-modal-view>', {
 // scope: $scope,
 // animation: 'slide-in-up'
 // })
  $ionicModal.fromTemplateUrl('templates/modal-template.html', {
    scope: $scope
    //focusFirstInput
    //hardwareBackButtonClose
    //backdropClickToClose
  }).then(function(modal) {
    $scope.modal = modal;
  });
   $scope.goBack = function() {
   $ionicHistory.goBack();
   };

  // Trig
   $scope.openModal = function() {
   $scope.modal.show();
   };
   $scope.closeModal = function() {
   $scope.modal.hide();
   };
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
   $scope.modal.remove();
   });
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
   // Execute action
   });
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
   // Execute action
   });

})
.controller('popupCtrl', function($scope, $ionicPopup) {
  // When button is clicked, the popup will be shown...
 $scope.showPopup = function() {
 $scope.data = {}

 // Custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type = "text" ng-model = "data.model">',
     title: 'Title',
     subTitle: 'Subtitle',
     scope: $scope,
       buttons: [
         { text: 'Cancel' }, {
         text: '<b>Save</b>',
         type: 'button-positive',
           onTap: function(e) {
             if (!$scope.data.model) {
             //don't allow the user to close unless he enters model...
             e.preventDefault();
             } else {
                return $scope.data.model;
             }
           }
         }
       ]
   });
   myPopup.then(function(res) {
    console.log('Tapped!', res);
   });
     // When button is clicked, the popup will be shown...
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
        title: 'Title',
        template: 'Are you sure?'
      });
      confirmPopup.then(function(res) {
          if(res) {
          console.log('Sure!');
         } else {
           console.log('Not sure!');
         }  
      });
    };
    $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
      title: 'Title',
      template: 'Alert message'
     });
      alertPopup.then(function(res) {
        // Custom functionality....
      });
    };
    $scope.showPrompt = function() {
      var promptPopup = $ionicPopup.prompt({
      title: 'Title',
      template: 'Template text',
      inputType: 'text',
      inputPlaceholder: 'Placeholder'
    });
    promptPopup.then(function(res) {
      console.log(res);
    });
    };

 };
})
.controller('PopoverCtrl', function($scope, $stateParams, $ionicLoading, $ionicPopover) {
 //  var template = '<ion-popover-view>' + '<ion-header-bar>' +
 // '<h1 class = "title">Popover Title</h1>' +
 // '</ion-header-bar>'+ '<ion-content>' +
 // 'Popover Content!' + '</ion-content>' + '</ion-popover-view>';
 // $scope.popover = $ionicPopover.fromTemplate(template, {
 // scope: $scope
 // });
$ionicPopover.fromTemplateUrl('templates/popovers.html', {
 scope: $scope
 }).then(function(popover) {
 $scope.popover = popover;
 });
 $scope.openPopover = function($event) {
 $scope.popover.show($event);
 };
 $scope.closePopover = function() {
 $scope.popover.hide();
 };
 //Cleanup the popover when we're done with it!
 $scope.$on('$destroy', function() {
 $scope.popover.remove();
 });
  // Execute action on hide popover
 $scope.$on('popover.hidden', function() {
 // Execute action
 });
 // Execute action on remove popover
 $scope.$on('popover.removed', function() {
 // Execute action
 });


})
.controller('EventCtrl', function($scope, $stateParams) {
  $scope.onTouchFunction = function() {
     // Do something...
     alert("reaction");
  }


})
.controller('slideboxCtrl',function($scope,$ionicSlideBoxDelegate){
   $scope.nextSlide = function() {
     $ionicSlideBoxDelegate.next();
    }
})
// .constant('$ionicLoadingConfig', {
//  template: 'Default Loading Template...'
// })
.controller('LoadingCtrl',  function($scope, $ionicLoading) {
  $scope.showLoading = function() {
   $ionicLoading.show({
     template: 'Loading...'
     //templateUrl
     //scope
     //noBackdrop
     //hideOnStateChange
     //delay
     //duration
     });
   };
   $scope.hideLoading = function(){
    $ionicLoading.hide();
   };



})
.controller('scrollCtrl',function($scope){

})
.controller('infiniteScrollCtrl',function($scope, $ionicScrollDelegate){
    $scope.items = [];
    $scope.noMoreItemsAvailable = false;
    $scope.loadMore = function() {
    $scope.items.push({ id: $scope.items.length});
     if ($scope.items.length == 30) {
          $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop();
    };

})
.controller('ListAdvanceCtrl', function($scope, $stateParams) {
 $scope.items = [
 {id: 1},
 {id: 2},
 {id: 3},
 {id: 4}
];
$scope.moveItem = function(item, fromIndex, toIndex) {
 $scope.items.splice(fromIndex, 1);
 $scope.items.splice(toIndex, 0, item);
};


})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
