var view = function() {

    var fullscreen = function(elem) {
        var $elem = $(elem);
        if (0 == $elem.length) {
            return 'error';
        }
            
        var attrs = {
            width: $elem.parent().width(),
            height: $elem.parent().height()
        }
        $(elem).attr(attrs);
        return attrs;
    };

    var canvas = function(id) {
        var canvas = document.getElementById(id);
        var context = canvas.getContext("2d");
        return context;
    }

    return {
        fullscreen: fullscreen,
        canvas: canvas
    };

}();
