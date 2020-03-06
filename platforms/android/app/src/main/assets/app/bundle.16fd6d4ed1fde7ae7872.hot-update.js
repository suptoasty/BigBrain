webpackHotUpdate("bundle",{

/***/ "./score-page/score-page-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("tns-core-modules/data/observable").Observable;
const SelectedPageService = __webpack_require__("./shared/selected-page-service.js");
const ObservableModule = __webpack_require__("tns-core-modules/data/observable");
const Label = __webpack_require__("tns-core-modules/ui/label").Label;
const Button = __webpack_require__("tns-core-modules/ui/button").Button;
const StackLayout = __webpack_require__("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const appSettings = __webpack_require__("tns-core-modules/application-settings");


function createViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("score-page");

    const viewModel = ObservableModule.fromObject({
        scores: {},
        onLoaded: function(args) {
            this.scores = JSON.parse(appSettings.getString("data"));
            this.createScoreBoard(args);
        },
        onClearScoreBoard: function(args) {
            //appSettings.setString("data", JSON.stringify({}));
            global.games = new Array();
            console.log("CJLE");
        },
        createScoreBoard: function(args) {
            let scoreBoard = args.object.getViewById("scoreBoard"); //the score board
            scoreBoard.removeChildren(); //remove previous score board info

            this.scores.forEach(function(board){

                let game = new StackLayout(); //contains the board status
                let isWin = new Label();
                isWin.text = "Winner: "+board.isWin;
                let guessCount = new Label();
                guessCount.text = "Guess Count: "+board.guessCount;
                game.addChild(isWin);
                game.addChild(guessCount);

                board.board.forEach(function(row) {
                    let stack = new StackLayout(); //rows for a single game
                    stack.orientation = "horizontal";
                
                    row.forEach(function(peg){
                        let label = new Label(); //each peg color
                        label.text = peg;
                        stack.addChild(label);
                    });
            
                    game.addChild(stack);
                });

                let separator = new Label();
                separator.text = "_____________________________\n";
                scoreBoard.addChild(game);
                scoreBoard.addChild(separator);
            });
        },
        
    });

    return viewModel;
}

exports.createViewModel = createViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./score-page/score-page-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./score-page/score-page-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFtQixtQkFBTyxDQUFDLGtDQUFrQztBQUM3RCw0QkFBNEIsbUJBQU8sQ0FBQyxtQ0FBaUM7QUFDckUseUJBQXlCLG1CQUFPLENBQUMsa0NBQWtDO0FBQ25FLGNBQWMsbUJBQU8sQ0FBQywyQkFBMkI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDRCQUE0QjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQywwQ0FBMEM7QUFDdEUsb0JBQW9CLG1CQUFPLENBQUMsdUNBQXVDOzs7QUFHbkU7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1FQUFtRTtBQUNuRSx3Q0FBd0M7O0FBRXhDOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLGdFQUFnRTtBQUMzRixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuMTZmZDZkNGVkMWZkZTdhZTc4NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcclxuY29uc3QgU2VsZWN0ZWRQYWdlU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xyXG5jb25zdCBPYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5jb25zdCBMYWJlbCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIpLkxhYmVsO1xyXG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xyXG5jb25zdCBTdGFja0xheW91dCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpLlN0YWNrTGF5b3V0O1xyXG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcclxuICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJzY29yZS1wYWdlXCIpO1xyXG5cclxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IE9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XHJcbiAgICAgICAgc2NvcmVzOiB7fSxcclxuICAgICAgICBvbkxvYWRlZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2NvcmVCb2FyZChhcmdzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xlYXJTY29yZUJvYXJkOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIC8vYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xyXG4gICAgICAgICAgICBnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSkxFXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlU2NvcmVCb2FyZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBsZXQgc2NvcmVCb2FyZCA9IGFyZ3Mub2JqZWN0LmdldFZpZXdCeUlkKFwic2NvcmVCb2FyZFwiKTsgLy90aGUgc2NvcmUgYm9hcmRcclxuICAgICAgICAgICAgc2NvcmVCb2FyZC5yZW1vdmVDaGlsZHJlbigpOyAvL3JlbW92ZSBwcmV2aW91cyBzY29yZSBib2FyZCBpbmZvXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjb3Jlcy5mb3JFYWNoKGZ1bmN0aW9uKGJvYXJkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZSA9IG5ldyBTdGFja0xheW91dCgpOyAvL2NvbnRhaW5zIHRoZSBib2FyZCBzdGF0dXNcclxuICAgICAgICAgICAgICAgIGxldCBpc1dpbiA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgaXNXaW4udGV4dCA9IFwiV2lubmVyOiBcIitib2FyZC5pc1dpbjtcclxuICAgICAgICAgICAgICAgIGxldCBndWVzc0NvdW50ID0gbmV3IExhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICBndWVzc0NvdW50LnRleHQgPSBcIkd1ZXNzIENvdW50OiBcIitib2FyZC5ndWVzc0NvdW50O1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5hZGRDaGlsZChpc1dpbik7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmFkZENoaWxkKGd1ZXNzQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvYXJkLmJvYXJkLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vcm93cyBmb3IgYSBzaW5nbGUgZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbihwZWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTsgLy9lYWNoIHBlZyBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0ID0gcGVnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5hZGRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYWRkQ2hpbGQoc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yLnRleHQgPSBcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXFxuXCI7XHJcbiAgICAgICAgICAgICAgICBzY29yZUJvYXJkLmFkZENoaWxkKGdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZC5hZGRDaGlsZChzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=