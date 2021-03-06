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

        sdkbox.PluginGameroom.logAppEvent('test_event_1', { 'key1': 'val1', 'key2': 'val2' });
        sdkbox.PluginGameroom.logAppEventWithValueToSum('test_event_2', { 'key3': 'val3', 'key4': 'val4' }, 10.24);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
