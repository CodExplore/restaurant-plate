(function () {
	"use strict";

	angular.module('restaurant')
		.controller('RegistrationController', RegistrationController);

	RegistrationController.$inject = ['MenuService'];

	function RegistrationController(MenuService) {
		var reg = this;
		reg.favoriteinvalidity = false;

		reg.submit = function (favorite) {
			reg.completed = true;

			return reg.user.menu = MenuService.getShortItem(favorite.toUpperCase()).then(function (response) {
				if (response.status !== 500) {
					reg.favoriteinvalidity = false;
					reg.final = MenuService.setUserPreference(reg.user);
					console.log(reg.final);
					return reg.final;
				}

				if (response.status === 500) {
					reg.favoriteinvalidity = true;
				}
			}, function (response) {
				if (response.status === 500) {
					reg.favoriteinvalidity = true;
				}
			});
		};


	}

})();
