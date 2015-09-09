var app = angular.module('fontTester', ['ngSanitize']);

app.controller('mainController', function($scope, $http) {

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
	
	$scope.defaultFonts = new Array(
		"",
		"Arial",
		"Book Antiqua",
		"Calibri",
		"Courier New",
		"Comic Sans MS",
		"Georgia",
		"Helvetica",
		"Impact",
		"Lucida Sans Unicode",
		"Lucida Console",
		"Tahoma",
		"Times New Roman",
		"Trebuchet MS",
		"Verdana"
	);

	$http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD9tqdunkVudBtg7-CjATL-CQEE2uvwNbI').
	then(function(response) {
		$scope.fontItems = response.data.items;
	}, function(response) {
		$scope.fontList = response.status;
	});
	
	$scope.getUrl = function(fontName){
		var apiUrl = [];
		apiUrl.push('https://fonts.googleapis.com/css?family=');
		apiUrl.push(fontName.replace(/ /g, '+'));
		var url = apiUrl.join('');
		return url;
	}
	
	$scope.showEditor = false;
	$scope.showEditIcon = false;

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
	$scope.fillerText = "<h1>Esse enim quam vellet iniquus.</h1>\n\n"
	+"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facillimum id quidem est, <a href='http://loripsum.net/' target='_blank'>Hoc tu nunc in illo probas.</a>. Nisi enim id faceret, cur Plato Aegyptum peragravit, ut a sacerdotibus barbaris numeros et caelestia acciperet? Omnes enim iucundum motum, quo sensus hilaretur. Quae animi affectio suum cuique tribuens atque hanc, quam dico. Sed ille, ut dixi, vitiose. Duo enim genera quae erant, fecit tria. </p>\n\n"
	+"<h2>Quod quidem iam fit etiam in Academia.</h2>\n\n"
	+"<p>Sed mehercule pergrata mihi oratio tua. Non laboro, inquit, de nomine. Huius <a href='http://loripsum.net/' target='_blank'>Consequentia exquirere</a> sequens idem faciam. Oculorum, inquit Plato, est in nobis sensus acerrimus, quibus sapientiam non cernimus. Et nemo nimium beatus est; Simus igitur contenti his. De hominibus dici non necesse est. Itaque contra est, ac dicitis; </p>\n\n"
	+"<p>De hominibus dici non necesse est. Et quidem saepe quaerimus verbum Latinum par Graeco et quod idem valeat; Haec quo modo conveniant, non sane intellego. Quia, si mala sunt, is, qui erit in iis, beatus non erit.</p>\n\n"
	+"<h3>Negat esse eam, inquit, se expetendam.</h3>\n\n"
	+"<p>Qua ex cognitione facilior facta est investigatio rerum occultissimarum. Sed ego in hoc resisto; Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. At multis malis affectus. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. </p>"
});
