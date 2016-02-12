'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', '$http', '$interval', function ($scope, $timeout, $http, $interval) {

	  $scope.sjcPrice = "http://www.sjc.com.vn/xml/tygiavang.xml";


	  var startInterval = $interval(function(){
		  console.warn('Get New Price...');

		  $http({
			  method: 'GET',
			  url: $scope.sjcPrice
		  }).then(function successCallback(response) {
			  console.info('Get successfully!');

			  console.log(response);

		  }, function errorCallback(response) {


		  }, function finallyCallback(response) {


		  });
	  }, 3000);


	  $scope.line = {
		  labels: ['T1', 'T2', 'March', 'April', 'May', 'June', 'July'],
		  series: ['Series A', 'Series B'],
		  data: [
			  [65, 59, 80, 81, 56, 55, 40],
			  [28, 48, 40, 19, 86, 27, 90]
		  ],
		  onClick: function (points, evt) {
			  console.log(points, evt);
		  }
	  };






    $scope.bar = {
	    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
		series: ['Series A', 'Series B'],

		data: [
		   [65, 59, 80, 81, 56, 55, 40],
		   [28, 48, 40, 19, 86, 27, 90]
		]
    	
    };

    $scope.donut = {
    	labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data: [300, 500, 100]
    };

    $scope.radar = {
    	labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

    	data:[
    	    [65, 59, 90, 81, 56, 55, 40],
    	    [28, 48, 40, 19, 96, 27, 100]
    	]
    };

    $scope.pie = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data : [300, 500, 100]
    };

    $scope.polar = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120]
    };

    $scope.dynamic = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120],
    	type : 'PolarArea',

    	toggle : function () 
    	{
    		this.type = this.type === 'PolarArea' ?
    	    'Pie' : 'PolarArea';
		}
    };
}]);