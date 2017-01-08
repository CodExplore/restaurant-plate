(function () {
	"use strict";

	angular.module('common')
		.service('MenuService', MenuService);


	MenuService.$inject = ['$http', 'ApiPath'];

	function MenuService($http, ApiPath) {
		var service = this;
		var userData = {};

		service.getCategories = function () {
			return $http.get(ApiPath + '/categories.json').then(function (response) {
				return response.data;
			});
		};

		service.getShortItem = function (itemNum) {
			var itemNums = itemNum.toUpperCase();

			return $http.get(ApiPath + '/menu_items/' + itemNums + '.json').then(function (response) {
				return response.data;
			}, function (response) {
				console.log("SUCCESS");
				return response;
			});

		};


		service.getMenuItems = function (category) {
			var config = {};
			if (category) {
				config.params = {
					'category': category
				};
			}

			return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
				return response.data;
			});
		};

		service.setUserPreference = function (reguser) {

			userData.firstName = reguser.firstname;
			userData.lastName = reguser.lastname;
			userData.email = reguser.email;
			userData.phone = reguser.phone;
			userData.favorite = reguser.favorite;

			return "Your information has been saved";
		};

		service.getUserPreference = function () {
			return userData;
		};

	}



})();
