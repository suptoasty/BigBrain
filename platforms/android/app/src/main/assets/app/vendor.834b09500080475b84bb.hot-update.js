webpackHotUpdate("vendor",{

/***/ "../node_modules/nativescript-tooltip/tooltip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var app = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
var ToolTip = (function () {
    function ToolTip(view, config) {
        var id = Math.floor((Math.random() * 1000) + 1);
        this.builder = new it.sephiroth.android.library.tooltip.Tooltip.Builder(id);
        var pos;
        switch (config.position) {
            case "left":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.LEFT;
                break;
            case "right":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.RIGHT;
                break;
            case "bottom":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.BOTTOM;
                break;
            case "top":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.TOP;
                break;
            default:
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.CENTER;
                break;
        }
        if (config.viewType && config.viewType === "native") {
            this.builder.anchor(view, pos);
        }
        else {
            this.builder.anchor(view.android, pos);
        }
        this.builder.text(config.text);
        if (config.duration) {
            this.builder.closePolicy(new it.sephiroth.android.library.tooltip.Tooltip.ClosePolicy()
                .insidePolicy(true, false)
                .outsidePolicy(true, false), config.duration);
        }
        else {
            this.builder.closePolicy(new it.sephiroth.android.library.tooltip.Tooltip.ClosePolicy()
                .insidePolicy(true, false)
                .outsidePolicy(true, false), java.lang.Integer.MAX_VALUE);
        }
        if (config.fadeDuration) {
            this.builder.fadeDuration(config.fadeDuration);
        }
        this.builder.fitToScreen(false);
        if (config.width) {
            this.builder.maxWidth(config.width);
        }
        if (config.delay) {
            this.builder.showDelay(config.delay);
        }
        this.builder.withOverlay(false);
        if (config.hideArrow) {
            this.builder.toggleArrow(false);
        }
        else {
            this.builder.toggleArrow(true);
        }
        if (config.style) {
            this.builder.withStyleId(ToolTip.getResource("style", config.style));
        }
        this.tip = it.sephiroth.android.library.tooltip.Tooltip.make(app.android.foregroundActivity, this.builder.build());
    }
    ToolTip.prototype.show = function () {
        this.tip.show();
    };
    ToolTip.prototype.hide = function () {
        this.tip.hide();
    };
    ToolTip.getResource = function (type, name) {
        return app.android.context.getResources().getIdentifier(name, type, app.android.context.getPackageName());
    };
    return ToolTip;
}());
exports.ToolTip = ToolTip;
//# sourceMappingURL=tooltip.android.js.map; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("/home/jason/BigBrain/node_modules/nativescript-tooltip/tooltip.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "/home/jason/BigBrain/node_modules/nativescript-tooltip/tooltip.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC10b29sdGlwL3Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOENBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxVQUFVLG1CQUFPLENBQUMsK0RBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsNEZBQTRGO0FBQ3ZILEtBQUs7QUFDTCxDIiwiZmlsZSI6InZlbmRvci44MzRiMDk1MDAwODA0NzViODRiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXBwID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xudmFyIFRvb2xUaXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvb2xUaXAodmlldywgY29uZmlnKSB7XG4gICAgICAgIHZhciBpZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEpO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgaXQuc2VwaGlyb3RoLmFuZHJvaWQubGlicmFyeS50b29sdGlwLlRvb2x0aXAuQnVpbGRlcihpZCk7XG4gICAgICAgIHZhciBwb3M7XG4gICAgICAgIHN3aXRjaCAoY29uZmlnLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHBvcyA9IGl0LnNlcGhpcm90aC5hbmRyb2lkLmxpYnJhcnkudG9vbHRpcC5Ub29sdGlwLkdyYXZpdHkuTEVGVDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHBvcyA9IGl0LnNlcGhpcm90aC5hbmRyb2lkLmxpYnJhcnkudG9vbHRpcC5Ub29sdGlwLkdyYXZpdHkuUklHSFQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgcG9zID0gaXQuc2VwaGlyb3RoLmFuZHJvaWQubGlicmFyeS50b29sdGlwLlRvb2x0aXAuR3Jhdml0eS5CT1RUT007XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgICAgICAgcG9zID0gaXQuc2VwaGlyb3RoLmFuZHJvaWQubGlicmFyeS50b29sdGlwLlRvb2x0aXAuR3Jhdml0eS5UT1A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHBvcyA9IGl0LnNlcGhpcm90aC5hbmRyb2lkLmxpYnJhcnkudG9vbHRpcC5Ub29sdGlwLkdyYXZpdHkuQ0VOVEVSO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcudmlld1R5cGUgJiYgY29uZmlnLnZpZXdUeXBlID09PSBcIm5hdGl2ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYW5jaG9yKHZpZXcsIHBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIuYW5jaG9yKHZpZXcuYW5kcm9pZCwgcG9zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1aWxkZXIudGV4dChjb25maWcudGV4dCk7XG4gICAgICAgIGlmIChjb25maWcuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5jbG9zZVBvbGljeShuZXcgaXQuc2VwaGlyb3RoLmFuZHJvaWQubGlicmFyeS50b29sdGlwLlRvb2x0aXAuQ2xvc2VQb2xpY3koKVxuICAgICAgICAgICAgICAgIC5pbnNpZGVQb2xpY3kodHJ1ZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLm91dHNpZGVQb2xpY3kodHJ1ZSwgZmFsc2UpLCBjb25maWcuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmNsb3NlUG9saWN5KG5ldyBpdC5zZXBoaXJvdGguYW5kcm9pZC5saWJyYXJ5LnRvb2x0aXAuVG9vbHRpcC5DbG9zZVBvbGljeSgpXG4gICAgICAgICAgICAgICAgLmluc2lkZVBvbGljeSh0cnVlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAub3V0c2lkZVBvbGljeSh0cnVlLCBmYWxzZSksIGphdmEubGFuZy5JbnRlZ2VyLk1BWF9WQUxVRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5mYWRlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5mYWRlRHVyYXRpb24oY29uZmlnLmZhZGVEdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWlsZGVyLmZpdFRvU2NyZWVuKGZhbHNlKTtcbiAgICAgICAgaWYgKGNvbmZpZy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyLm1heFdpZHRoKGNvbmZpZy53aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5kZWxheSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyLnNob3dEZWxheShjb25maWcuZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVpbGRlci53aXRoT3ZlcmxheShmYWxzZSk7XG4gICAgICAgIGlmIChjb25maWcuaGlkZUFycm93KSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkZXIudG9nZ2xlQXJyb3coZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWlsZGVyLnRvZ2dsZUFycm93KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuc3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci53aXRoU3R5bGVJZChUb29sVGlwLmdldFJlc291cmNlKFwic3R5bGVcIiwgY29uZmlnLnN0eWxlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aXAgPSBpdC5zZXBoaXJvdGguYW5kcm9pZC5saWJyYXJ5LnRvb2x0aXAuVG9vbHRpcC5tYWtlKGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eSwgdGhpcy5idWlsZGVyLmJ1aWxkKCkpO1xuICAgIH1cbiAgICBUb29sVGlwLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpcC5zaG93KCk7XG4gICAgfTtcbiAgICBUb29sVGlwLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpcC5oaWRlKCk7XG4gICAgfTtcbiAgICBUb29sVGlwLmdldFJlc291cmNlID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGFwcC5hbmRyb2lkLmNvbnRleHQuZ2V0UmVzb3VyY2VzKCkuZ2V0SWRlbnRpZmllcihuYW1lLCB0eXBlLCBhcHAuYW5kcm9pZC5jb250ZXh0LmdldFBhY2thZ2VOYW1lKCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFRvb2xUaXA7XG59KCkpO1xuZXhwb3J0cy5Ub29sVGlwID0gVG9vbFRpcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvb2x0aXAuYW5kcm9pZC5qcy5tYXA7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi9ob21lL2phc29uL0JpZ0JyYWluL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdG9vbHRpcC90b29sdGlwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi9ob21lL2phc29uL0JpZ0JyYWluL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtdG9vbHRpcC90b29sdGlwLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=