(function () {
		"use strict";

		angular.module('restaurant')
			.controller('InfoController', InfoController);

		InfoController.$inject = ['MenuService'];

		function InfoController(MenuService) {
			var info = this;

			info.userData = {};
			info.itemSelected = {};
			info.reg = false;
			info.regMsg;
			info.validate = function () {

				info.userData = MenuService.getUserPreference();
				if (Object.keys(info.userData).length === 0) {
					info.reg = true;

					return info.reg;
				}
				var dummy = MenuService.getShortItem(info.userData.favorite);

				dummy.then(function (res) {

					info.itemSelected = res;
					return info.itemSelected;
				});


			};



		};

	}

)();
