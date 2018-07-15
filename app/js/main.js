var windowWidth = document.body.clientWidth;


var func = {
    'initTest':function () {
        console.log('inited '+windowWidth)
    },
    'loadTest':function () {
        console.log('loaded '+windowWidth)
    },
    'resizeTest':function () {
        console.log('resized '+windowWidth)
    },
};

var app = {
    'init': function(){
        func.initTest();
    },
    'load': function(){
        func.loadTest();
    },
    'resize': function(){
        func.resizeTest();
    }
};

$(function(){
    app.init();
    $(window).on('load',function(){app.load();});
    $(window).on('resize',function(){app.resize();});
});