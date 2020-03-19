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
                console.log("MISS MARY!?");
                // appSettings.setString("data", JSON.stringify(this.games));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFtQixtQkFBTyxDQUFDLGtFQUFrQztBQUM3RCw0QkFBNEIsbUJBQU8sQ0FBQyxtQ0FBaUM7QUFDckUseUJBQXlCLG1CQUFPLENBQUMsa0VBQWtDO0FBQ25FLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLHdEQUE0QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyw0RUFBMEM7QUFDdEUsb0JBQW9CLG1CQUFPLENBQUMsaUZBQXVDO0FBQ25FLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQsYUFBYSxtQkFBTyxDQUFDLCtEQUEwQztBQUMvRCxXQUFXLG1CQUFPLENBQUMsK0RBQTBDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyxpREFBd0I7QUFDOUMsd0JBQXdCLG1CQUFPLENBQUMsOEVBQXdDOztBQUV4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSwwQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLGdFQUFnRTtBQUMzRixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuMjAxMjUyYTI4ZmU0MDNmMTU0ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiKTtcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5jb25zdCBMYWJlbCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIpLkxhYmVsO1xuY29uc3QgQnV0dG9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpLkJ1dHRvbjtcbmNvbnN0IFN0YWNrTGF5b3V0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIikuU3RhY2tMYXlvdXQ7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuY29uc3QgRnJhbWUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKS5GcmFtZTtcbmNvbnN0IEZpbGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKS5GaWxlO1xuY29uc3QgZnMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTtcbmNvbnN0IFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZC1rYWtcIik7XG5jb25zdCBvYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5mdW5jdGlvbiBjcmVhdGVWaWV3TW9kZWwoKSB7XG4gICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcImludHJvLXBhZ2VcIik7XG5cbiAgICBjb25zdCB2aWV3TW9kZWwgPSBPYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgICAgICBnYW1lczogbmV3IEFycmF5KCksXG4gICAgICAgIG9uTG9hZDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgLy9wcmV2ZW50cyBjcmFzaCBvbiBmaXJzdCBsb2FkXG5cdFx0XHRpZih0eXBlb2YoZ2xvYmFsLmdhbWVzKSA9PT0gdHlwZW9mKHt9KSAmJiBPYmplY3Qua2V5cyhnbG9iYWwuZ2FtZXMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNSVNTIE1BUlkhP1wiKTtcbiAgICAgICAgICAgICAgICAvLyBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2FtZXMpKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZ2FtZXMgPSBnbG9iYWwuZ2FtZXM7IC8vcmVzdG9yZSBnYW1lIGhpc3RvcnlcbiAgICAgICAgfSxcbiAgICAgICAgb25TdGFydFR1dG9yaWFsOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFpbi1wYWdlL21haW4tcGFnZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHV0b3JpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdhbWVzOiB0aGlzLmdhbWVzXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU3RhcnRHYW1lOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFpbi1wYWdlL21haW4tcGFnZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHV0b3JpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBnYW1lczogdGhpcy5nYW1lc1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblNjb3JlQm9hcmQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG5cdFx0XHRcdG1vZHVsZU5hbWU6IFwic2NvcmUtcGFnZS9zY29yZS1wYWdlXCIsXG5cdFx0XHRcdGNvbnRleHQ6IHtcblx0XHRcdFx0XHRnYW1lczogdGhpcy5nYW1lc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9