angular.module('F1FeederApp.controllers').

  /* Drivers controller */
  controller('draganddropController', function($scope) {

  var tmpList = [];
  $scope.selectedDropboxItem="Source ";
  $scope.targetDropboxItem="Select Value";

  $scope.subjects = [];
  $scope.targets = [];

  $scope.logButtons1 = false;
  $scope.logButtons2 = false;
  
  $scope.rawScreens = [{
      title: "FirstList",
      items: [{
        title: 'Apple'
      }, {
        title: 'Banana'
      }, {
        title: 'Oranges'
      }, {
        title: 'Watermelon'
      }, {
        title: 'Grape'
      }, {
        title: 'Muskmelon'
      }]
    },
    {
      title: "SecondList",
      items: [{
        title: 'Facebook'
      }, {
        title: 'Youtube'
      }, {
        title: 'Gmail'
      }, {
        title: 'Google+'
      }, {
        title: 'Twitter'
      }, {
        title: 'Yahoo Mail'
      }]
    }
  ];

  angular.forEach($scope.rawScreens, function(value, key) {
     $scope.subjects.push(value.title);
     $scope.targets.push(value.title);
  });

  $scope.selectedArray = function(selectedItem, arrayOfJsonObjects) {
    var array = [];
    for (var i = 0; i < arrayOfJsonObjects.length; i++) {
      if(arrayOfJsonObjects[i].title === selectedItem) {
        for (var j = 0; j < arrayOfJsonObjects[i].items.length; j++) {
          array.push(arrayOfJsonObjects[i].items[j]);
        };
      }
    };
    return array
  }

  $scope.selectAction = function() {
    console.log($scope.selectedDropboxItem);
  };

  $scope.dropboxitemselected = function () {
      // $scope.selectedDropboxItem = item;
      // alert($scope.selectedDropboxItem);
      console.log($scope.selectedDropboxItem);
      $scope.list1 = $scope.selectedArray($scope.selectedDropboxItem, $scope.rawScreens);
      $scope.OriginalList1 = angular.copy($scope.list1);
      $scope.logButtons1 = true;
  }

  $scope.targetselected = function () {
      // $scope.targetDropboxItem = item;
      // alert($scope.selectedDropboxItem);
      $scope.list2 = $scope.selectedArray($scope.targetDropboxItem, $scope.rawScreens);
      $scope.OriginalList2 = angular.copy($scope.list2);
      $scope.logButtons2 = true;
  }
  
  $scope.sortingLog = [];
  
  $scope.sortableOptions = {
    placeholder: "app",
    connectWith: ".apps-container"
  };

  // $scope.itemsChanged = function(newList, originalList) {
  //   var array = [];
  //   for(var i=0; i<originalList.length; i++) {
  //     console.log(originalList[i].title);
  //     for(var j=0; j<newList.length; j++) {
  //       if(originalList[i].title === newList[j].title){
  //         break;
  //       }
  //       array.push(newList[j].title);
  //     }
  //   }
  //   return array;
  // }

  $scope.clearModels = function(){
    $scope.list1 = $scope.OriginalList1;
    $scope.list2 = $scope.OriginalList2;
    $scope.sortingLog = [];
  }

  $scope.logButtons = function(){
    return $scope.logButtons1 && $scope.logButtons2;
  }

  $scope.logModels = function () {
    $scope.sortingLog = [];
    for (var i = 0; i < $scope.rawScreens.length; i++) {
      var logEntry = $scope.rawScreens[i].items.map(function (x) {
        return x.title;
      }).join(', ');
      logEntry = $scope.rawScreens[i].title + ': ' + logEntry;
      $scope.sortingLog.push(logEntry);
    }
    // // difference between two lists
    $scope.sortingLog.push($scope.list1);
    $scope.sortingLog.push($scope.list2);
    // console.log($scope.itemsChanged($scope.list1, $scope.OriginalList1));
  };
});