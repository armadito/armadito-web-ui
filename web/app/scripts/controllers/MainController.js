/***

Copyright (C) 2015, 2016 Teclib'

This file is part of Armadito gui.

Armadito gui is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Armadito gui is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Armadito gui.  If not, see <http://www.gnu.org/licenses/>.

***/

'use strict';

/**
 * @ngdoc function
 * @name armaditoApp.controller:MainController
 * @description
 * # MainController
 * Controller of the armaditoApp
 */

//global.scan_in_progress = 0;

angular.module('armaditoApp')
  .controller('MainController',
  			[ '$rootScope', '$scope', '$state','$uibModal', '$translate', 'toastr',
  	function ( $rootScope,   $scope,   $state,  $uibModal,   $translate,   toastr) {

  	$scope.buttons = [
  			{
  				button : {
		  			isActive : true,
		  			tittle : 'information_view.Status',
		  			icon : "fa fa-tachometer fa-2x",
		  			view : 'Main.Information',
		  			backgroundColor: 'generalActive'
		  		}
	  		},
	  		{
	  			button : {
		  			isActive : false,
		  			tittle : 'analyse_view.Scan',
		  			icon : 'fa fa-search fa-2x',
		  			view : 'Main.Scan',
		  			backgroundColor: 'analyseActive'
		  		}
	  		},
	  		{
	  			button : {
		  			isActive : false,
		  			tittle : 'history_view.History',
		  			icon : 'fa fa-newspaper-o fa-2x',
		  			view : 'Main.Journal',
		  			backgroundColor:  'journalActive'
		  		}
	  		}
	];

	$rootScope.$on('$stateChangeStart',
		function(event, toState, toParams, fromState, fromParams)
        {
		    if(toState.url === '/Parameters'){
		    	for (var i = 0; i < $scope.buttons.length; i++) {
		    		$scope.buttons[i].button.isActive = false;
		    		$scope.buttonParameters = true;
		    	}
		    }else{
		    	$scope.buttonParameters = false;
		    }
		}
    );

	$scope.activeButton = function (button)
    {
		for (var i = 0; i < $scope.buttons.length; i++) {
			$scope.buttons[i].button.isActive = false;
		};
		button.isActive = true;
	};

  	$scope.refresh = function ()
    {
  		$state.go('Main.Information');
  	};

  	$scope.refresh();

  }]);
