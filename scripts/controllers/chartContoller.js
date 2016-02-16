'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', '$http', '$interval', '$window', function ($scope, $timeout, $http, $interval, $window) {

	  $scope.sjcPrice = "http://www.sjc.com.vn/xml/tygiavang.xml";


	  var startInterval = $timeout(function(){


		  $scope.xml = '';
		  $http({
			  method  : 'jsonp',
			  url     : 'http://www.sjc.com.vn/xml/tygiavang.xml',
			  params  : {},  // Query Parameters (GET)
			  transformResponse:function(data) {
				  // convert the data to JSON and provide
				  // it to the success function below
				  var x2js = new X2JS();
				  var json = x2js.xml_str2json( data );
				  return json;
			  }
		  })
		  .then(function successCallback(response) {
				  console.info('Get successfully!');
				  console.dir(response);
				  $scope.xml = data.documentElement.innerHTML;

				}, function errorCallback(response) {
				  console.log('Get Price error');

				  $timeout.cancel(startInterval);

				}, function finallyCallback(response) {
				  console.info('Preparing new session...')
				})




		  //$http (
			//  {
			//	  method: 'jsonp',
			//	  contentType: 'application/xml',
			//	  url: $scope.sjcPrice,
			//	  transformResponse : function(data) {
			//		  return $.parseXML(data);
			//	  }
			//  })
			//  .then(function successCallback(response) {
			//	  console.info('Get successfully!');
          //
			//	  // string -> XML document object
          //
          //
			//	  startInterval();
          //
			//	  console.log(response);
          //
			//  }, function errorCallback(response) {
			//	  console.log('Get Price error');
          //
			//	  $timeout.cancel(startInterval);
          //
			//  }, function finallyCallback(response) {
			//	  console.info('Preparing new session...')
			//  });

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