var app = angular.module('fontTester', []);

app.controller('mainController', function($scope) {
	
	$scope.elements = {
		Default:{
			font:'Calibri',
			weight:'300',
			style:'normal',
			color:'#000',
			cssClasses:'.fontBox'
		},
		Headers:{
			font:'',
			weight:'',
			style:'inherit',
			color:'inherit',
			cssClasses:'.fontBox h1, .fontBox h2, .fontBox h3'
		},
		H1:{
			font:'',
			weight:'',
			style:'inherit',
			color:'inherit',
			cssClasses:'.fontBox h1'
		},
		H2:{
			font:'',
			weight:'',
			style:'inherit',
			color:'inherit',
			cssClasses:'.fontBox h2'
		},
		H3:{
			font:'',
			weight:'',
			style:'inherit',
			color:'inherit',
			cssClasses:'.fontBox h3'
		},
		Links:{
			font:'',
			weight:'',
			style:'inherit',
			color:'inherit',
			cssClasses:'.fontBox a'
		}
	};
	
  $scope.fontNames = new Array(
		"",
		"Arial",
		"Calibri",
		"Helvetica",
		"Georgia",
		"Times New Roman"
	);
	
  $scope.fontWeights = new Array(
		"",
		"100",
		"200",
		"300",
		"400",
		"500",
		"600",
		"700",
		"800",
		"900"
	);
});