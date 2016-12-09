angular.module('ctrl-home', [])
.controller('HomeCtrl', function($scope, $state, $ionicPopup, AdMob) {
	console.log('Home controller');

	$scope.showBanner = function(){
		//console.log(frm);
		var done = AdMob.showBanner();
		if( !done ){
			$ionicPopup.show({
                title: "AdMob is not ready",
                buttons: [
                    {
                        text: 'Got it!',
                        type: 'button-positive',
                        onTap: function (e) {
                        }
                    }
                ]
            })
		}
	}
	$scope.removeBanner = function(){
		AdMob.removeAds();
	}
	$scope.showInterstitial = function(){
		
		var done = AdMob.showInterstitial();
		if( !done ){
			$ionicPopup.show({
                title: "AdMob is not ready",
                buttons: [
                    {
                        text: 'Got it!',
                        type: 'button-positive',
                        onTap: function (e) {
                        }
                    }
                ]
            })
		}
	}
})