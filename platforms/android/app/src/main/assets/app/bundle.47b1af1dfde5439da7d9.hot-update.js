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
                appSettings.setString("data", JSON.stringify(this.games));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCw0QkFBNEIsbUJBQU8sQ0FBQyxtQ0FBaUM7QUFDckUseUJBQXlCLG1CQUFPLENBQUMsa0VBQWtDO0FBQ25FLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLHdEQUE0QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyw0RUFBMEM7QUFDdEUsb0JBQW9CLG1CQUFPLENBQUMsaUZBQXVDO0FBQ25FLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQsYUFBYSxtQkFBTyxDQUFDLCtEQUEwQztBQUMvRCxXQUFXLG1CQUFPLENBQUMsK0RBQTBDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyxpREFBd0I7QUFDOUMsd0JBQXdCLG1CQUFPLENBQUMsOEVBQXdDOztBQUV4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsMEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixnRUFBZ0U7QUFDM0YsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjQ3YjFhZjFkZmRlNTQzOWRhN2Q5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG5jb25zdCBTZWxlY3RlZFBhZ2VTZXJ2aWNlID0gcmVxdWlyZShcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIik7XG5jb25zdCBPYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuY29uc3QgTGFiZWwgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKS5MYWJlbDtcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XG5jb25zdCBTdGFja0xheW91dCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpLlN0YWNrTGF5b3V0O1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmNvbnN0IEZyYW1lID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIikuRnJhbWU7XG5jb25zdCBGaWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIikuRmlsZTtcbmNvbnN0IGZzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIik7XG5jb25zdCBTb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmQta2FrXCIpO1xuY29uc3Qgb2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcblxuZnVuY3Rpb24gY3JlYXRlVmlld01vZGVsKCkge1xuICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJpbnRyby1wYWdlXCIpO1xuXG4gICAgY29uc3Qgdmlld01vZGVsID0gT2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICAgICAgZ2FtZXM6IG5ldyBBcnJheSgpLFxuICAgICAgICBvbkxvYWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIC8vcHJldmVudHMgY3Jhc2ggb24gZmlyc3QgbG9hZFxuXHRcdFx0aWYodHlwZW9mKGdsb2JhbC5nYW1lcykgPT09IHR5cGVvZih7fSkgJiYgT2JqZWN0LmtleXMoZ2xvYmFsLmdhbWVzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nYW1lcykpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5nYW1lcyA9IGdsb2JhbC5nYW1lczsgLy9yZXN0b3JlIGdhbWUgaGlzdG9yeVxuICAgICAgICB9LFxuICAgICAgICBvblN0YXJ0VHV0b3JpYWw6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJtYWluLXBhZ2UvbWFpbi1wYWdlXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICB0dXRvcmlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2FtZXM6IHRoaXMuZ2FtZXNcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TdGFydEdhbWU6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJtYWluLXBhZ2UvbWFpbi1wYWdlXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICB0dXRvcmlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGdhbWVzOiB0aGlzLmdhbWVzXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2NvcmVCb2FyZDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcblx0XHRcdFx0bW9kdWxlTmFtZTogXCJzY29yZS1wYWdlL3Njb3JlLXBhZ2VcIixcblx0XHRcdFx0Y29udGV4dDoge1xuXHRcdFx0XHRcdGdhbWVzOiB0aGlzLmdhbWVzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5leHBvcnRzLmNyZWF0ZVZpZXdNb2RlbCA9IGNyZWF0ZVZpZXdNb2RlbDsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=