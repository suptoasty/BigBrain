webpackHotUpdate("bundle",{

/***/ "./main-page/main-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"onNavigatingTo\"\n    loaded=\"{{ onLoad }}\">\n    <ActionBar title=\"{{ 'Guess Count: ' +  guessCount }}\" icon=\"\"><Label id=\"title\" text=\"{{ 'Guess Count: ' +  guessCount }}\"></Label></ActionBar>\n\n    <ScrollView>\n\n        <StackLayout>\n            <StackLayout id=\"board\">\n                <StackLayout id=\"pegs\" orientation=\"horizontal\">\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                </StackLayout>\n                <Button text=\"Guess\" tap=\"{{ onGuess }}\" id=\"GuessButton\"></Button>\n            </StackLayout>\n            <StackLayout visibility=\"{{ isCheaterModeEnabled ? 'visible' : 'collapse' }}\" id=\"solution\" orientation=\"horizontal\"></StackLayout>\n            <StackLayout  orientation=\"horizontal\">\n                <Button text=\"New Game\" tap=\"{{ onNewGame }}\"></Button>\n                <Button text=\"Score Board\" tap=\"{{ onScorePressed }}\"></Button>\n                <Button text=\"Wanna Cheat?\" tap=\"{{ onToggleCheaterMode }}\" id=\"CheatButton\"></Button>\n            </StackLayout>\n            <StackLayout>\n                <Label text=\"Hint: \"></Label>\n                <StackLayout id=\"hint\"></StackLayout>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n    </Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page/main-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./main-page/main-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxzSUFBc0ksVUFBVSw4QkFBOEIsaUNBQWlDLDBDQUEwQyxpQ0FBaUMsaVBBQWlQLGVBQWUsMkVBQTJFLGVBQWUsMkVBQTJFLGVBQWUsMkVBQTJFLGVBQWUsNkZBQTZGLFdBQVcscUdBQXFHLGlEQUFpRCx1S0FBdUssYUFBYSxtRUFBbUUsa0JBQWtCLG9FQUFvRSx1QkFBdUIsd1I7QUFDMTRDLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFvRDtBQUMvRSxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuNmY0YTRkYzI0ZDVhMDMyMDc3ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWQgfX1cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyAnR3Vlc3MgQ291bnQ6ICcgKyAgZ3Vlc3NDb3VudCB9fVxcXCIgaWNvbj1cXFwiXFxcIj48TGFiZWwgaWQ9XFxcInRpdGxlXFxcIiB0ZXh0PVxcXCJ7eyAnR3Vlc3MgQ291bnQ6ICcgKyAgZ3Vlc3NDb3VudCB9fVxcXCI+PC9MYWJlbD48L0FjdGlvbkJhcj5cXG5cXG4gICAgPFNjcm9sbFZpZXc+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJib2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwicGVnc1xcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkd1ZXNzXFxcIiB0YXA9XFxcInt7IG9uR3Vlc3MgfX1cXFwiIGlkPVxcXCJHdWVzc0J1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgdmlzaWJpbGl0eT1cXFwie3sgaXNDaGVhdGVyTW9kZUVuYWJsZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnIH19XFxcIiBpZD1cXFwic29sdXRpb25cXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk5ldyBHYW1lXFxcIiB0YXA9XFxcInt7IG9uTmV3R2FtZSB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2NvcmUgQm9hcmRcXFwiIHRhcD1cXFwie3sgb25TY29yZVByZXNzZWQgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIldhbm5hIENoZWF0P1xcXCIgdGFwPVxcXCJ7eyBvblRvZ2dsZUNoZWF0ZXJNb2RlIH19XFxcIiBpZD1cXFwiQ2hlYXRCdXR0b25cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSGludDogXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImhpbnRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS9tYWluLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlL21haW4tcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==