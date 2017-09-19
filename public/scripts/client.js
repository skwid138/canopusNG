console.log('js');

// angular module
var myApp = angular.module('myApp', []);

// controller for this app
myApp.controller('ReviewController', function ($http) {
    console.log('NG');
    // hold the controller in a var
    var vm = this;
    // array for all bands
    vm.bands = [];
    // add band
    vm.addBand = function () {
        console.log('in addBand:', vm.bandIn);
        vm.bands.push(vm.bandIn);
        console.log(vm.bands);
        //$http
        $http({
            method: 'GET',
            url: '/bands'
        }).then(function (response){
            console.log('back from server with: ', response);
            //ng-repeat the response 
            vm.bands = response.data;
        }); // end http
    }; //end addBand
}); //end review controller

/// - giphy API:  http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';

myApp.controller('ApiController', function($http) {
    var vm = this;

 // get images from giphy
    vm.getImages = function( ) {
        console.log('in getImages');
        var searchUrl = vm.searchIn;
        $http({
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/search?q=' + searchUrl + '&api_key=dc6zaTOxFJmzC'
        }).then(function (response) {
            console.log('back from Api Call with: ', response);
            vm.images = response.data.data;
            console.log('vm.images', vm.images);
            
            });
    };
}); // end ApiController