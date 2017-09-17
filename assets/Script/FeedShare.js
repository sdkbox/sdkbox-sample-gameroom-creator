cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.node.on('click', this.callback, this);
    },

    callback: function (event) {
        sdkbox.PluginGameroom.log('\n');
        var l = this.getComponentInChildren(cc.Label); 
        sdkbox.PluginGameroom.log(l.string);

        sdkbox.PluginGameroom.feedShare(
				'',
				'https://www.facebook.com',
				'Testing Link Name',
				'Testing Link Caption',
				'Testing Link Description',
				'http://www.pamperedpetz.net/wp-content/uploads/2015/09/Puppy1.jpg',
				''
		);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
