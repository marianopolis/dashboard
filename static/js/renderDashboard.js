function createBootstrapRow(question, answer){
	return `<div class="row">${createBootstrapCard(question, answer)}</div>`
}

function createBootstrapCard(question, answer){
	return `<div class="card" style="width: 18rem;">
			  <div class="card-body">
			    <h5 class="card-title">${question}</h5>
			    <p class="card-text">${answer}</p>
			  </div>
			</div>`;
}


function renderList(data){
	var htmlString = "";
	for (const item of data){
		if (item.Display==="TRUE"){
				console.log(item.Question);
				console.log(item.Answer);
				htmlString += createBootstrapRow(item.Question, item.Answer);
			}		
	}
	return htmlString;
}


var app = angular.module("dashboardApp", ["ngSanitize"]);


app.controller("dashboardController", function($scope, $http)
		{

			$http.get("api/get_questions").then(function(response) {

				renderList(response.data.data);

				$scope.message = renderList(response.data.data);
				console.log(response);
			})

		}
	);
