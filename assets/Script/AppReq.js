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
        cc.log('\n');
        var l = this.getComponentInChildren(cc.Label); 
        cc.log(l.string);

        sdkbox.PluginGameroom.appRequest('hello, try this js demo.', '', '', '', '', '', 20, '', 'hello');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
