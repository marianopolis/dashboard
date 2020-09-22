function createBootstrapCard(item){
	return (
		`<div class="card">
			<div class="card-header">
				<span class="badge badge-custom-1"> ${item.Status} </span>
			</div>
			<div class="card-body">
				<h5 class="card-title">${item.Question}</h5>
				<p class="card-text">${item.Answer}</p>
				<p class="font-italic small float-right mt-2">Posted on ${item.Timestamp}</p>
			</div>
		</div>`
	);
}

function createCircle(item) {
	return (
		`
			<img src="static/img/splash.png" class="circle" height="100" width="100">
		`
	)
}

function renderChart(data) {
	var htmlString = "";
	for (const item of data){
		if (item.Display==="TRUE"){
				htmlString += createCircle(item);
			}
	}
	return htmlString;
}

function renderList(data) {
	var htmlString = "";
	for (const item of data){
		if (item.Display==="TRUE"){
				htmlString += createBootstrapCard(item);
			}
	}
	return htmlString;
}


var app = angular.module("dashboardApp", ["ngSanitize"]);


app.controller("dashboardController", function($scope, $http)
		{

			$http.get("api/get_questions").then(function(response) {

				$scope.chart = renderChart(response.data.data);
				$scope.content = renderList(response.data.data);
			})

		}
	);
