webpackHotUpdate("bundle",{

/***/ "./main-page/main-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"onNavigatingTo\"\n    loaded=\"{{ onLoad }}\">\n    <ActionBar title=\"{{ 'Guess Count: ' +  guessCount }}\" icon=\"\"><Label id=\"title\" text=\"{{ 'Guess Count: ' +  guessCount }}\"></Label></ActionBar>\n\n    <ScrollView>\n\n        <StackLayout>\n            <StackLayout id=\"board\">\n                <StackLayout id=\"pegs\" orientation=\"horizontal\">\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                </StackLayout>\n                <Button text=\"Guess\" tap=\"{{ onGuess }}\" id=\"GuessButton\"></Button>\n            </StackLayout>\n            <StackLayout visibility=\"{{ isCheaterModeEnabled ? 'visible' : 'collapse' }}\" id=\"solution\" orientation=\"horizontal\"></StackLayout>\n            <StackLayout  orientation=\"horizontal\">\n                <Button text=\"New Game\" tap=\"{{ onNewGame }}\" id=\"NewGameButton\"></Button>\n                <Button text=\"Score Board\" tap=\"{{ onScorePressed }}\"></Button>\n                <Button text=\"Wanna Cheat?\" tap=\"{{ onToggleCheaterMode }}\" id=\"CheatButton\"></Button>\n            </StackLayout>\n            <StackLayout>\n                <Label text=\"Hint: \"></Label>\n                <StackLayout id=\"hint\"></StackLayout>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n    </Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page/main-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./main-page/main-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxzSUFBc0ksVUFBVSw4QkFBOEIsaUNBQWlDLDBDQUEwQyxpQ0FBaUMsaVBBQWlQLGVBQWUsMkVBQTJFLGVBQWUsMkVBQTJFLGVBQWUsMkVBQTJFLGVBQWUsNkZBQTZGLFdBQVcscUdBQXFHLGlEQUFpRCx1S0FBdUssYUFBYSx3RkFBd0Ysa0JBQWtCLG9FQUFvRSx1QkFBdUIsd1I7QUFDLzVDLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFvRDtBQUMvRSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuNjhjMWEzNjRlYWNmZjg1NDU2Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWQgfX1cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyAnR3Vlc3MgQ291bnQ6ICcgKyAgZ3Vlc3NDb3VudCB9fVxcXCIgaWNvbj1cXFwiXFxcIj48TGFiZWwgaWQ9XFxcInRpdGxlXFxcIiB0ZXh0PVxcXCJ7eyAnR3Vlc3MgQ291bnQ6ICcgKyAgZ3Vlc3NDb3VudCB9fVxcXCI+PC9MYWJlbD48L0FjdGlvbkJhcj5cXG5cXG4gICAgPFNjcm9sbFZpZXc+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJib2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwicGVnc1xcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkd1ZXNzXFxcIiB0YXA9XFxcInt7IG9uR3Vlc3MgfX1cXFwiIGlkPVxcXCJHdWVzc0J1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgdmlzaWJpbGl0eT1cXFwie3sgaXNDaGVhdGVyTW9kZUVuYWJsZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnIH19XFxcIiBpZD1cXFwic29sdXRpb25cXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk5ldyBHYW1lXFxcIiB0YXA9XFxcInt7IG9uTmV3R2FtZSB9fVxcXCIgaWQ9XFxcIk5ld0dhbWVCdXR0b25cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNjb3JlIEJvYXJkXFxcIiB0YXA9XFxcInt7IG9uU2NvcmVQcmVzc2VkIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJXYW5uYSBDaGVhdD9cXFwiIHRhcD1cXFwie3sgb25Ub2dnbGVDaGVhdGVyTW9kZSB9fVxcXCIgaWQ9XFxcIkNoZWF0QnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhpbnQ6IFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJoaW50XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuICAgIDwvUGFnZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL21haW4tcGFnZS9tYWluLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=