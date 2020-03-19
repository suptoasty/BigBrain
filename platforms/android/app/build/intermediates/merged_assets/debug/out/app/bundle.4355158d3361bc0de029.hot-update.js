webpackHotUpdate("bundle",{

/***/ "./intro-page/intro-page-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
const SelectedPageService = __webpack_require__("./shared/selected-page-service.js");
const ObservableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");
const Label = __webpack_require__("../node_modules/@nativescript/core/ui/label/label.js").Label;
const Button = __webpack_require__("../node_modules/@nativescript/core/ui/button/button.js").Button;
const StackLayout = __webpack_require__("../node_modules/@nativescript/core/ui/layouts/stack-layout/stack-layout.js").StackLayout;
const appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
const Frame = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js").Frame;
const File = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js").File;
const fs = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js");
const Sound = __webpack_require__("../node_modules/nativescript-sound-kak/sound.js");
const observableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;

function createViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("intro-page");

    const viewModel = ObservableModule.fromObject({
        games: new Array(),
        onLoad: function(args) {
            //prevents crash on first load
			if(typeof(global.games) === typeof({}) && Object.keys(global.games).length == 0) {
				global.games = new Array();
			}
			this.games = global.games; //restore game history
        },
        onStartTutorial: function(args) {
            Frame.topmost().navigate({
                moduleName: "main-page/main-page",
                context: {
                    tutorial: true,
                    games: this.games
                }
			});
        },
        onStartGame: function(args) {
            Frame.topmost().navigate({
                moduleName: "main-page/main-page",
                context: {
                    tutorial: false,
                    games: this.games
                }
			});
        },
        onScoreBoard: function(args) {
            Frame.topmost().navigate({
				moduleName: "score-page/score-page",
				context: {
					games: this.games
				}
			});
        }
    });

    return viewModel;
}

exports.createViewModel = createViewModel; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./intro-page/intro-page-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./intro-page/intro-page-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCw0QkFBNEIsbUJBQU8sQ0FBQyxtQ0FBaUM7QUFDckUseUJBQXlCLG1CQUFPLENBQUMsa0VBQWtDO0FBQ25FLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLHdEQUE0QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyw0RUFBMEM7QUFDdEUsb0JBQW9CLG1CQUFPLENBQUMsaUZBQXVDO0FBQ25FLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQsYUFBYSxtQkFBTyxDQUFDLCtEQUEwQztBQUMvRCxXQUFXLG1CQUFPLENBQUMsK0RBQTBDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyxpREFBd0I7QUFDOUMsd0JBQXdCLG1CQUFPLENBQUMsOEVBQXdDOztBQUV4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLDBDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsZ0VBQWdFO0FBQzNGLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS40MzU1MTU4ZDMzNjFiYzBkZTAyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xuY29uc3QgU2VsZWN0ZWRQYWdlU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xuY29uc3QgT2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5jb25zdCBGcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpLkZyYW1lO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuY29uc3QgU291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kLWtha1wiKTtcbmNvbnN0IG9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcbiAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiaW50cm8tcGFnZVwiKTtcblxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IE9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgICAgIGdhbWVzOiBuZXcgQXJyYXkoKSxcbiAgICAgICAgb25Mb2FkOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAvL3ByZXZlbnRzIGNyYXNoIG9uIGZpcnN0IGxvYWRcblx0XHRcdGlmKHR5cGVvZihnbG9iYWwuZ2FtZXMpID09PSB0eXBlb2Yoe30pICYmIE9iamVjdC5rZXlzKGdsb2JhbC5nYW1lcykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0Z2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmdhbWVzID0gZ2xvYmFsLmdhbWVzOyAvL3Jlc3RvcmUgZ2FtZSBoaXN0b3J5XG4gICAgICAgIH0sXG4gICAgICAgIG9uU3RhcnRUdXRvcmlhbDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiBcIm1haW4tcGFnZS9tYWluLXBhZ2VcIixcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR1dG9yaWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnYW1lczogdGhpcy5nYW1lc1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblN0YXJ0R2FtZTogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiBcIm1haW4tcGFnZS9tYWluLXBhZ2VcIixcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR1dG9yaWFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2FtZXM6IHRoaXMuZ2FtZXNcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TY29yZUJvYXJkOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuXHRcdFx0XHRtb2R1bGVOYW1lOiBcInNjb3JlLXBhZ2Uvc2NvcmUtcGFnZVwiLFxuXHRcdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdFx0Z2FtZXM6IHRoaXMuZ2FtZXNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2aWV3TW9kZWw7XG59XG5cbmV4cG9ydHMuY3JlYXRlVmlld01vZGVsID0gY3JlYXRlVmlld01vZGVsOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==