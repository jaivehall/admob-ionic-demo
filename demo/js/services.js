angular.module('app.services', [])
.factory('AdMob', function ($window){
	var _admob;
	var _admobid;
	var _opt;

	var _interstitialReady;
	var _bannerReady;

return {
   	init: function(){
   		console.log("AdMob init");

   		_admob = $window.AdMob;

		if(_admob){

		   	// Register AdMob events
		   	// new events, with variable to differentiate: adNetwork, adType, adEvent
		   	document.addEventListener('onAdFailLoad', function(data){
				console.log('error: ' + data.error +
				', reason: ' + data.reason +
				', adNetwork:' + data.adNetwork +
				', adType:' + data.adType +
				', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
			});
		   	document.addEventListener('onAdLoaded', function(data){
				console.log('onAdLoaded: ' + JSON.stringify(data));
		   	});

			document.addEventListener('onAdPresent', function(data){
				console.log('onAdPresent: ' + JSON.stringify(data));
		   	});
		   	document.addEventListener('onAdLeaveApp', function(data){
		    	console.log('onAdLeaveApp: ' + JSON.stringify(data));
		   	});
		   	document.addEventListener('onAdDismiss', function(data){
		   		_interstitialReady = false;
		    	console.log('onAdDismiss: ' + JSON.stringify(data));
		   	});

		   	_opt = {
				// bannerId: admobid.banner,
				// interstitialId: admobid.interstitial,
				// adSize: 'SMART_BANNER',
				// width: integer, // valid when set adSize 'CUSTOM'
				// height: integer, // valid when set adSize 'CUSTOM'
				position: _admob.AD_POSITION.BOTTOM_CENTER,
				// offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
				bgColor: 'black', // color name, or '#RRGGBB'
				// x: integer,     // valid when set position to 0 / POS_XY
				// y: integer,     // valid when set position to 0 / POS_XY
				isTesting: true, // set to true, to receiving test ad for testing purpose
				// autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
		   	};

		   	_admobid = {};

			if(ionic.Platform.isAndroid()) {
				_admobid = { // for Android
					banner: 'ca-app-pub-6869992474017983/9375997553',
					interstitial: 'ca-app-pub-6869992474017983/1657046752'
				};
			}

		   	if(ionic.Platform.isIOS()){
		    	_admobid = { // for iOS
					banner: 'ca-app-pub-4803471214797648/1352675016',
					interstitial: 'ca-app-pub-4803471214797648/7259607815'
		    	};
		   	}

		   	_admob.setOptions(_opt);

		   	
		   	this.prepareInterstitial(false);
			this.prepareBanner( false );

		} else {
		   console.log("No AdMob?");
		}
   	},
   	prepareBanner: function(bShow){
   		if( !_admob ) return false;

   		_admob.createBanner({
	        adId: _admobid.banner,
	        position: _admob.AD_POSITION.BOTTOM_CENTER,
	        autoShow: bShow,
	        //adSize:'SMART_BANNER',
	        success: function(){
	        	_bannerReady = true;
	        	console.log('banner ready');
	        },
	        error: function(){
	          console.log('failed to create banner');
	        }
       	})
       	return true;
   	},
   	showBanner: function(position) {
   		if( !_bannerReady ){
   			console.log('banner not ready');
   			return this.prepareBanner(true);
   		}

   		if( position == undefined ) position = _admob.AD_POSITION.BOTTOM_CENTER;
     	_admob.showBanner(position);

     	return true;
   	},
   	prepareInterstitial: function(bShow){
   		if( !_admob ) return false;
   		_admob.prepareInterstitial({
		    adId: _admobid.interstitial,
		    autoShow: bShow,
		    success: function(){
		    	_interstitialReady = true;
		    	console.log('interstitial prepared');
		    },
		    error: function(){
		    	console.log('failed to prepare interstitial');
		    }
	   	})

	   	return true;
   	},
   	showInterstitial: function() {
   		if( !_interstitialReady ){
   			console.log('interstitial not ready');
   			return this.prepareInterstitial(true);
   		}

       	_admob.showInterstitial();

       	return true;
   	},
   	removeAds: function() {
    	if(! _admob ) return;
       	_admob.removeBanner();
       	_bannerReady = false;
   	}
}})
