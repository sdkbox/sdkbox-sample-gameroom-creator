cc.Class({
    extends: cc.Component,

    properties: {
        appID: '313416692430467',
        testAppID: '523164037733626', 
    },

    // use this for initialization
    onLoad: function () {
        sdkbox.PluginGameroom.init(this.appID);
        sdkbox.PluginGameroom.setListener({
			onLoginAccessTokenMsg: function (handle) {
				sdkbox.PluginGameroom.log('============');
				sdkbox.PluginGameroom.log('onLoginAccessTokenMsg');
				sdkbox.PluginGameroom.log(JSON.stringify(handle, null, 2));
				if (handle.isValidToken) {
					sdkbox.PluginGameroom.log('login successful');
				}
				else {
					sdkbox.PlugoinGameroom.log('login failed');
				}
			},
			onFeedShareMsg: function (handle) {
				sdkbox.PluginGameroom.log('============');
				sdkbox.PluginGameroom.log('onFeedShareMsg');
				sdkbox.PluginGameroom.log('shared post id = ' + handle.postID);
				
			},
			onPurchaseIAPMsg: function (handle) {
				sdkbox.PluginGameroom.log('============');
				sdkbox.PluginGameroom.log('onPurchaseIAPMsg');
				sdkbox.PluginGameroom.log('payment ID = '+ handle.paymentID);
				sdkbox.PluginGameroom.log('amount = ' + handle.amount);
				sdkbox.PluginGameroom.log('curency = ' + handle.currency);
				sdkbox.PluginGameroom.log('purchase time = ' + handle.purchaseTime);
				sdkbox.PluginGameroom.log('product ID = ' + handle.productID);
				sdkbox.PluginGameroom.log('purchase token = ' + handle.purchaseToken);
				sdkbox.PluginGameroom.log('quantity = ' + handle.quantity);
				sdkbox.PluginGameroom.log('request id = ' + handle.requestID);
				sdkbox.PluginGameroom.log('status = ' + handle.status);
				sdkbox.PluginGameroom.log('signed req = ' + handle.signedReq);
				sdkbox.PluginGameroom.log('error code = ' + handle.errorCode);
				sdkbox.PluginGameroom.log('error msg = ' + handle.errorMsg);
				
			}, 
			onHasLicenseMsg: function (handle) {
				sdkbox.PluginGameroom.log('============');
				sdkbox.PluginGameroom.log('onHasLicenseMsg');
				sdkbox.PluginGameroom.log('has license = ' + handle.hasLicense);
			},
			onAppRequestMsg: function (handle) {
				sdkbox.PluginGameroom.log('============');
				sdkbox.PluginGameroom.log('onAppRequestMsg');
				sdkbox.PluginGameroom.log('objectID = ' + handle.objectID);
				sdkbox.PluginGameroom.log('to user: ' + handle.toUser);
			}
		});
    },

    // called every frame
    update: function (dt) {

    },

    showText: function (msg) {
        this.info.string = msg;
    }
});
