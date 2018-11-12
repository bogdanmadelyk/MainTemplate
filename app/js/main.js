var func = {
    initTest: function () {
        console.log('inited');
    },

    loadTest: function () {
        console.log('loaded');
    },

    resizeTest: function () {
        console.log('resized');
    },

    scrollTest: function() {
        console.log('scrolled');
    }
};

var app = {
    init: function() {
        func.initTest();
    },

    load: function() {
        func.loadTest();
    },

    resize: function() {
        func.resizeTest();
    },

    scroll: function() {
        func.scrollTest();
    }
};

$(function(){
    app.init();

    $(window).on('load', function() { 
        app.load(); 
    });

    $(window).on('resize', function() { 
        app.resize(); 
    });
    
    $(window).on('scroll', function() { 
        app.scroll(); 
    })
});