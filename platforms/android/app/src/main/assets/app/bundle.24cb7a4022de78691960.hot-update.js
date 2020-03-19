webpackHotUpdate("bundle",{

/***/ "./main-page/main-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
const createViewModel = __webpack_require__("./main-page/main-view-model.js").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

    const data = page.navigationContext;
    page.bindingContext.set("tutorial", data.tutorial);
    page.bindingContext.set("games", data.games);

}

exports.onNavigatingTo = onNavigatingTo;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page/main-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-page/main-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UvbWFpbi1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQVksbUJBQU8sQ0FBQywrREFBOEI7QUFDbEQsd0JBQXdCLG1CQUFPLENBQUMsZ0NBQW1COztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFtRDtBQUM5RSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuMjRjYjdhNDAyMmRlNzg2OTE5NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vbWFpbi12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcblxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IGNyZWF0ZVZpZXdNb2RlbCgpO1xuXG4gICAgY29uc3QgZGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dC5zZXQoXCJ0dXRvcmlhbFwiLCBkYXRhLnR1dG9yaWFsKTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0LnNldChcImdhbWVzXCIsIGRhdGEuZ2FtZXMpO1xuXG59XG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlL21haW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9