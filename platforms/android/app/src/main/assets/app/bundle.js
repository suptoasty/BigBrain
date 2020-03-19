require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./intro-page/intro-page-view-model.js": "./intro-page/intro-page-view-model.js",
	"./intro-page/intro-page.js": "./intro-page/intro-page.js",
	"./intro-page/intro-page.xml": "./intro-page/intro-page.xml",
	"./main-page/main-page.js": "./main-page/main-page.js",
	"./main-page/main-page.xml": "./main-page/main-page.xml",
	"./main-page/main-view-model.js": "./main-page/main-view-model.js",
	"./score-page/score-page-view-model.js": "./score-page/score-page-view-model.js",
	"./score-page/score-page.js": "./score-page/score-page.js",
	"./score-page/score-page.xml": "./score-page/score-page.xml",
	"./shared/selected-page-service.js": "./shared/selected-page-service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"intro-page/intro-page\">\n</Frame>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
const appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");


global.firstRun = true;
global.guessCount = 0;
global.code = new Array();
global.games = JSON.parse(appSettings.getString("data","{}"));

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

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

/***/ }),

/***/ "./intro-page/intro-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
const createViewModel = __webpack_require__("./intro-page/intro-page-view-model.js").createViewModel;
const File = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js").File;


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

    const data = page.navigationContext;
}

exports.onNavigatingTo = onNavigatingTo;; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./intro-page/intro-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./intro-page/intro-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./intro-page/intro-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"onNavigatingTo\"\n    loaded=\"{{ onLoad }}\">\n    <ActionBar title=\"Intro Screen\" icon=\"\"></ActionBar>\n\n    <ScrollView>\n        <StackLayout>\n            <Label text=\"Application Image:\"></Label>\n            <Label text=\"🎲\" fontSize=\"64\"></Label>\n            <Label text=\"Jason Lonsinger - in fulfi\fllment of requirements for Assignment 9 of CMSC 4233 in the Spring 2020 course.\" textWrap=\"true\"></Label>\n            <Button text=\"Start Game\" tap=\"{{ onStartGame }}\"></Button>\n            <Button text=\"Walk Through\" tap=\"{{ onStartTutorial }}\"></Button>\n            <Button text=\"Score Board\" tap=\"{{ onScoreBoard }}\"></Button>\n        </StackLayout>\n    </ScrollView>\n</Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./intro-page/intro-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./intro-page/intro-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "./main-page/main-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
const SelectedPageService = __webpack_require__("./shared/selected-page-service.js");
const ObservableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");
const Frame = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js").Frame;
const File = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js").File;
const fs = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js");
const Label = __webpack_require__("../node_modules/@nativescript/core/ui/label/label.js").Label;
const Button = __webpack_require__("../node_modules/@nativescript/core/ui/button/button.js").Button;
const StackLayout = __webpack_require__("../node_modules/@nativescript/core/ui/layouts/stack-layout/stack-layout.js").StackLayout;
const appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");
const Sound = __webpack_require__("../node_modules/nativescript-sound-kak/sound.js");
const view = __webpack_require__("../node_modules/@nativescript/core/application/application.js").view;
const ToolTip = __webpack_require__("../node_modules/nativescript-tooltip/tooltip.js").ToolTip;

const newGameSound = Sound.create(fs.knownFolders.currentApp().getFolder("sounds").path+"/UI_Quirky1.mp3");
const changePegSound = Sound.create(fs.knownFolders.currentApp().getFolder("sounds").path+"/UI_Quirky_52.mp3");

function createViewModel() {
	SelectedPageService.getInstance().updateSelectedPage("main-page");

	const viewModel = ObservableModule.fromObject({
		tutorial: false,
		guessCount: 0, //the number of guesses form 1-12
		isCheaterModeEnabled: false, //flag for showing the solution for cheaters
		//defualt array of pegs for playing the game
		pegs: [
			{ name: "blue", character: "🔵"},
			{ name: "black", character: "⚫"},
			{ name: "white", character: "⚪"},
			{ name: "red", character: "🔴"},
			{ name: "blue-and-white", character: "⏺️"},
			{ name: "hollow-red", character: "⭕"}
		],
		games: new Array(), //container for old games
		code: new Array(), //container for the solution
		//create code for player to solve
		createCode: function(args) {
			let solution = args.object.page.getViewById("solution");
			for(let i = 0; i < 4; i++) {
				let peg = this.pegs[Math.floor(Math.random()*this.pegs.length)];
				this.code.push(peg);
				
				let label = new Label();
				label.text = peg.name+": "+peg.character+" ";
				solution.addChild(label);
			}
		},
		//creates a row of pegs for the player to change each guess
		createRow: function(args) {
			//create new pegs and guess button
			let board = args.object.page.getViewById("board");
			let stack = new StackLayout();
			stack.id = "pegs";
			stack.orientation = "horizontal";
			for(let i = 0; i < 4; i++) {
				let button = new Button();
				button.text = "🔵";
				button.width = 25;
				if(i==3) button.id = "DemoButton";
				button.on("tap", this.onChangePeg, this);
				stack.addChild(button);
			}
			let guessButton = new Button();
			guessButton.text = "Guess";
			guessButton.id = "GuessButton";
			guessButton.on("tap", this.onGuess, this);
			
			board.addChild(stack);
			board.addChild(guessButton);
		},
		//toggles cheater mode to on and off
		onToggleCheaterMode: function() {
			this.isCheaterModeEnabled = !this.isCheaterModeEnabled;
		},
		//when the page loads create a new game and get guessCount
		onLoad: function(args) {
			console.log("IS TUTORIAL:"+this.tutorial);
			if(this.code.length !== 0) return; //if no code then return
			
			//when the app is started create first code to solve
			this.code = global.code; //restore current code to solve
			if(global.firstRun) {
				this.createCode(args);
				global.firstRun = false;
				console.log(this.code)
			}

			this.guessCount = global.guessCount; //restore the guess count
			
			// prevents crash on first load
			// if(typeof(global.games) === typeof({}) && Object.keys(global.games).length == 0) {
			// 	global.games = new Array();
			// }
			this.games = JSON.parse(appSettings.getString("data")); //restore game history
			this.onNewGame(args);
			if(this.tutorial) this.StartWalkthrough(args);
		},
		//go to the score board page
		onScorePressed: function(args) {
			this.tutorial = false;
			global.guessCount = this.guessCount //save guess count
			appSettings.setString("data", JSON.stringify(this.games));
			global.games = this.games; //save game history
			Frame.topmost().navigate({
				moduleName: "score-page/score-page",
				context: {
					games: this.games
				}
			});
		},
		//creates the hint for the players current guess
		giveHint: function(args) {
			let hint = args.page.getViewById("hint"); //where the hint will be stored
			hint.removeChildren(); //clear previous hint

			let pegArr = args.pegArr; //players guess
			let codeArr = new Array(); //array to store the right solution without the json data
			this.code.forEach(peg => { codeArr.push(peg.character); }); //make new array without json data

			let hintArr = new Array(4); //array where hints will be stored
			for(let i = 0; i < pegArr.length; i++) {
				let label = new Label();
				//correct color and position
				if(pegArr[i] == codeArr[i]) label.text = "Position "+(i+1)+": "+codeArr[i]+"-> right color right position";
				//correct color wrong position
				else if(codeArr.includes(pegArr[i])) {
					label.text = "Position "+(i+1)+": "+pegArr[i]+"-> right color wrong position";
				}
				hintArr[i] = label;
			}

			let hintStack = new StackLayout(); //stores the hints for the player
			let guessStack = new StackLayout(); //stores the users most recent guess
			guessStack.orientation = "horizontal";
			
			let guess = new Label(); //display the players guess
			guess.text = "Your Guess: ";
			guessStack.addChild(guess);

			//parse players guess and create xml for it
			pegArr.forEach(peg => {
				console.log(peg);
				let label = new Label();
				label.text = peg;
				guessStack.addChild(label);
			});

			//add the hints form hintArr to hintStack
			hintArr.forEach(pegHint => {
				hintStack.addChild(pegHint);
			});

			hint.addChild(guessStack); //add players current guess
			hint.addChild(hintStack); //add hint for the player
		},
		//submit a guess
		onGuess: function(args) {
			let button = args.object;
			let pegs = args.object.page.getViewById("pegs");
			pegs.id = "";
			this.guessCount++;

			//disable each peg and add to array
			let pegArr = new Array();
			pegs.eachChild(function(child) {
				pegArr.push(child.text);
				child.isEnabled = false;
			});

			//check if player won
			let won = true;
			for(let i = 0; i < this.code.length; i++) {
				if(pegArr[i] != this.code[i].character) won = false;
			}

			//check win and lose conditions
			let board = args.object.page.getViewById("board");
			let currentBoard = new Array(); //used to copy current winning board
			let currentRow = new Array(); //used to get each row of current board
			if(won) {
				currentBoard = new Array();
				board.eachChild(stack => {
					currentRow = new Array();
					stack.eachChild(button => {
						currentRow.push(button.text);
					});
					currentBoard.push(currentRow);
				});

				let currentGame = { board: currentBoard, guessCount: this.guessCount, isWin: true, solution: this.code }; 
				if(this.games.length == 5) {
					for(let i = 0; i < 5; i++) {
						if(this.games[i].guessCount > currentGame.guessCount) {
							this.games[i] = currentGame;
							return;
						}
					}
				} else this.games.push(currentGame);
			
			} else if (this.guessCount < 12) {
				this.createRow(args); //create new row for inputting a guess
				this.giveHint({ pegArr: pegArr, page: args.object.page }); //creates the hint for the player
			
			} else {
				currentBoard = new Array();
				board.eachChild(stack => {
					currentRow = new Array();
					stack.eachChild(button => {
						currentRow.push(button.text);
					});
					currentBoard.push(currentRow);
				});

				console.log(currentBoard);
				this.games.push({ board: this.currentBoard, guessCount: 12, isWin: false, solution: this.code });
			
			}

			//remove current guess button
			button.parent.removeChild(button);
		},
		//change which color a peg button is
		onChangePeg: function(args) {
			let button = args.object;
			for(let i = 0; i < this.pegs.length; i++) {
				if(this.pegs[i].character == button.text)  {
					button.text = this.pegs[(i+1)%this.pegs.length].character;
					//console.log(this.pegs[(i+1)%this.pegs.length].name);
					changePegSound.play();
					return;
				}
			}
		},
		//create a new game
		onNewGame: function(args) {
			//remove all pegs from cheater hint
			let solution = args.object.page.getViewById("solution");
			solution.removeChildren();
			
			//generate a new code for the player to find
			this.code = new Array();
			this.createCode(args);
			
			//reset vars to default
			this.guessCount = 0;
			global.guessCount = 0;
			global.code = new Array();
			global.games = new Array();
			this.isCheaterModeEnabled = false;
			
			//remove all pegs form board
			let board = args.object.page.getViewById("board");
			board.removeChildren();

			//clear hint
			let hint = args.object.page.getViewById("hint");
			hint.removeChildren();

			//create the first slot
			this.createRow(args);
			newGameSound.play();
			
		},
		StartWalkthrough: function(args) {
			let page = args.object.page;
			let tip;
			var th = this.OnGuess;
			setTimeout(function() {
				tip = new ToolTip(page.getViewById("DemoButton"), {
					text: "Tap The Peg To Change It's Color",
					position: "bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 0);

			setTimeout(()=>{
				tip.hide();
				tip = new ToolTip(page.getViewById("GuessButton"), {
					text: "Tap The Guess Button To Submitt The Pegs Colors and Positions",
					position: "bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:400
				});
				tip.show();
			}, 5000);

			setTimeout(function(){
				tip.hide();
				tip = new ToolTip(page.getViewById("hint"), {
					text: "Hints Will Be Given After Each Guess",
					position: "bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 10000);

			setTimeout(function(){
				tip.hide();
				tip = new ToolTip(page.getViewById("hint"), {
					text: "Each Hint Will Give You Information About If A Peg Has the Right Color, or if that color is a part of the solution but in the wrong Position, NO hint will be given if no right colors are guessed",
					position: "bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 15000);

			setTimeout(function(){
				tip.hide();
				tip = new ToolTip(page.getViewById("title"), {
					text: "You Have 12 Rounds Until It Is Game Over!",
					position: "bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 30000);

			setTimeout(function(){
				tip.hide();
				tip = new ToolTip(page.getViewById("CheatButton"), {
					text: "You Can Always Cheat?!",
					position: "bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 35000);

			setTimeout(function(){
				tip.hide();
				tip = new ToolTip(page.getViewById("NewGameButton"), {
					text: "Or Start A New Game?!",
					position: "right",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 40000);

			setTimeout(function() {
				tip.hide();
			}, 45000);
		}
	});

	return viewModel;
}

exports.createViewModel = createViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page/main-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-page/main-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ }),

/***/ "./score-page/score-page-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js").Observable;
const SelectedPageService = __webpack_require__("./shared/selected-page-service.js");
const ObservableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");
const Label = __webpack_require__("../node_modules/@nativescript/core/ui/label/label.js").Label;
const Button = __webpack_require__("../node_modules/@nativescript/core/ui/button/button.js").Button;
const StackLayout = __webpack_require__("../node_modules/@nativescript/core/ui/layouts/stack-layout/stack-layout.js").StackLayout;
const appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");


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

/***/ }),

/***/ "./score-page/score-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
const createViewModel = __webpack_require__("./score-page/score-page-view-model.js").createViewModel;
const File = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js").File;


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

    const data = page.navigationContext;
    //page.bindingContext.set("scores", data.games);
}

exports.onNavigatingTo = onNavigatingTo;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./score-page/score-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./score-page/score-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./score-page/score-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"onNavigatingTo\"\n    loaded=\"{{ onLoaded }}\">\n    <ActionBar title=\"Score Board\" icon=\"\"></ActionBar>\n\n    <ScrollView>\n        <StackLayout>\n            <StackLayout id=\"scoreBoard\"></StackLayout>\n            <Button text=\"Clear Score Board\" tap=\"{{ onClearScoreBoard }}\"></Button>\n        </StackLayout>\n    </ScrollView>\n</Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./score-page/score-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./score-page/score-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./shared/selected-page-service.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const { BehaviorSubject } = __webpack_require__("../node_modules/rxjs/_esm5/index.js");

function SelectedPageService() {
    if (SelectedPageService._instance) {
        throw new Error("Use SelectedPageService.getInstance() instead of new.");
    }

    // Observable selectedPage source
    this._selectedPageSource = new BehaviorSubject("Home");

    // Observable selectedPage stream
    this.selectedPage$ = this._selectedPageSource.asObservable();

    this.updateSelectedPage = function(selectedPage) {
        this._selectedPageSource.next(selectedPage);
    };
}

SelectedPageService.getInstance = function () {
    return SelectedPageService._instance;
};

SelectedPageService._instance = new SelectedPageService();

module.exports = SelectedPageService;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./shared/selected-page-service.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./shared/selected-page-service.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL2ludHJvLXBhZ2UvaW50cm8tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UueG1sIiwid2VicGFjazovLy8uL21haW4tcGFnZS9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDREQUE0RDtBQUN2RixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzXCI6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLmpzXCI6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UuanNcIixcblx0XCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS54bWxcIjogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS54bWxcIixcblx0XCIuL21haW4tcGFnZS9tYWluLXBhZ2UuanNcIjogXCIuL21haW4tcGFnZS9tYWluLXBhZ2UuanNcIixcblx0XCIuL21haW4tcGFnZS9tYWluLXBhZ2UueG1sXCI6IFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiOiBcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLXZpZXctbW9kZWwuanNcIjogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanNcIjogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS5qc1wiLFxuXHRcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbFwiOiBcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbFwiLFxuXHRcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiOiBcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwiaW50cm8tcGFnZS9pbnRyby1wYWdlXFxcIj5cXG48L0ZyYW1lPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlIFxcbk5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRpdmVzY3JpcHQvdGhlbWVcXG5UaGUgaW1wb3J0ZWQgQ1NTIHJ1bGVzIG11c3QgcHJlY2VkZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMuXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1xcXCJcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIFBsYWNlIGFueSBDU1MgcnVsZXMgeW91IHdhbnQgdG8gYXBwbHkgb24gYm90aCBpT1MgYW5kIEFuZHJvaWQgaGVyZS5cXG5UaGlzIGlzIHdoZXJlIHRoZSB2YXN0IG1ham9yaXR5IG9mIHlvdXIgQ1NTIGNvZGUgZ29lcy4gXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcblRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBCdXR0b25zIHRoYXQgaGF2ZSB0aGVcXG5cXFwiLXByaW1hcnlcXFwiIGNsYXNzIG1vZGlmaWVyLlxcblwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxuICAgICAgICBsZXQgYXBwbGljYXRpb25DaGVja1BsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0uYW5kcm9pZCAmJiAhZ2xvYmFsW1wiX19zbmFwc2hvdFwiXSkge1xuICAgICAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5yZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyA9IGdsb2JhbC5fX29uTGl2ZVN5bmM7XG5cbiAgICAgICAgICAgIGdsb2JhbC5fX29uTGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIExpdmVTeW5jXG4gICAgICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCA9IGZ1bmN0aW9uKHsgdHlwZSwgcGF0aCB9ID0ge30pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgaG90IHVwZGF0ZXMgYXJlIGFwcGxpZWQsIGFzayB0aGUgbW9kdWxlcyB0byBhcHBseSB0aGUgY2hhbmdlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBpbml0aWFsIGFwcCBzdGFydFxuICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopKD88IVxcLlxcL1xcYnRlc3RzXFxiXFwvLio/KVxcLih4bWx8Y3NzfGpzfCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChjb250ZXh0LmlkLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhNUjogQWNjZXB0IG1vZHVsZSAnXCIgKyBjb250ZXh0LmlkICsgXCInIGZyb20gJ1wiICsgbW9kdWxlLmlkICsgXCInXCIpOyBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5nbG9iYWwuZmlyc3RSdW4gPSB0cnVlO1xuZ2xvYmFsLmd1ZXNzQ291bnQgPSAwO1xuZ2xvYmFsLmNvZGUgPSBuZXcgQXJyYXkoKTtcbmdsb2JhbC5nYW1lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiLFwie31cIikpO1xuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgIiwiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xuY29uc3QgU2VsZWN0ZWRQYWdlU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xuY29uc3QgT2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5jb25zdCBGcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpLkZyYW1lO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuY29uc3QgU291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kLWtha1wiKTtcbmNvbnN0IG9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcbiAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiaW50cm8tcGFnZVwiKTtcblxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IE9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgICAgIGdhbWVzOiBuZXcgQXJyYXkoKSxcbiAgICAgICAgb25Mb2FkOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAvL3ByZXZlbnRzIGNyYXNoIG9uIGZpcnN0IGxvYWRcblx0XHRcdGlmKHR5cGVvZihnbG9iYWwuZ2FtZXMpID09PSB0eXBlb2Yoe30pICYmIE9iamVjdC5rZXlzKGdsb2JhbC5nYW1lcykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1JU1MgTUFSWSE/XCIpO1xuICAgICAgICAgICAgICAgIC8vIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nYW1lcykpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5nYW1lcyA9IGdsb2JhbC5nYW1lczsgLy9yZXN0b3JlIGdhbWUgaGlzdG9yeVxuICAgICAgICB9LFxuICAgICAgICBvblN0YXJ0VHV0b3JpYWw6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJtYWluLXBhZ2UvbWFpbi1wYWdlXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICB0dXRvcmlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2FtZXM6IHRoaXMuZ2FtZXNcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TdGFydEdhbWU6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJtYWluLXBhZ2UvbWFpbi1wYWdlXCIsXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICB0dXRvcmlhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGdhbWVzOiB0aGlzLmdhbWVzXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2NvcmVCb2FyZDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcblx0XHRcdFx0bW9kdWxlTmFtZTogXCJzY29yZS1wYWdlL3Njb3JlLXBhZ2VcIixcblx0XHRcdFx0Y29udGV4dDoge1xuXHRcdFx0XHRcdGdhbWVzOiB0aGlzLmdhbWVzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5leHBvcnRzLmNyZWF0ZVZpZXdNb2RlbCA9IGNyZWF0ZVZpZXdNb2RlbDsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vaW50cm8tcGFnZS12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbmNvbnN0IEZpbGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKS5GaWxlO1xuXG5cbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBjcmVhdGVWaWV3TW9kZWwoKTtcblxuICAgIGNvbnN0IGRhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xufVxuXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiXFxuICAgIGxvYWRlZD1cXFwie3sgb25Mb2FkIH19XFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiSW50cm8gU2NyZWVuXFxcIiBpY29uPVxcXCJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXBwbGljYXRpb24gSW1hZ2U6XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCLwn46yXFxcIiBmb250U2l6ZT1cXFwiNjRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkphc29uIExvbnNpbmdlciAtIGluIGZ1bGZpXFxmbGxtZW50IG9mIHJlcXVpcmVtZW50cyBmb3IgQXNzaWdubWVudCA5IG9mIENNU0MgNDIzMyBpbiB0aGUgU3ByaW5nIDIwMjAgY291cnNlLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdGFydCBHYW1lXFxcIiB0YXA9XFxcInt7IG9uU3RhcnRHYW1lIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIldhbGsgVGhyb3VnaFxcXCIgdGFwPVxcXCJ7eyBvblN0YXJ0VHV0b3JpYWwgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2NvcmUgQm9hcmRcXFwiIHRhcD1cXFwie3sgb25TY29yZUJvYXJkIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgYXBwID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9tYWluLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xuXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgY3JlYXRlVmlld01vZGVsKCk7XG5cbiAgICBjb25zdCBkYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0LnNldChcInR1dG9yaWFsXCIsIGRhdGEudHV0b3JpYWwpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQuc2V0KFwiZ2FtZXNcIiwgZGF0YS5nYW1lcyk7XG5cbn1cblxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS9tYWluLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWQgfX1cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyAnR3Vlc3MgQ291bnQ6ICcgKyAgZ3Vlc3NDb3VudCB9fVxcXCIgaWNvbj1cXFwiXFxcIj48TGFiZWwgaWQ9XFxcInRpdGxlXFxcIiB0ZXh0PVxcXCJ7eyAnR3Vlc3MgQ291bnQ6ICcgKyAgZ3Vlc3NDb3VudCB9fVxcXCI+PC9MYWJlbD48L0FjdGlvbkJhcj5cXG5cXG4gICAgPFNjcm9sbFZpZXc+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJib2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwicGVnc1xcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkd1ZXNzXFxcIiB0YXA9XFxcInt7IG9uR3Vlc3MgfX1cXFwiIGlkPVxcXCJHdWVzc0J1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgdmlzaWJpbGl0eT1cXFwie3sgaXNDaGVhdGVyTW9kZUVuYWJsZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnIH19XFxcIiBpZD1cXFwic29sdXRpb25cXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk5ldyBHYW1lXFxcIiB0YXA9XFxcInt7IG9uTmV3R2FtZSB9fVxcXCIgaWQ9XFxcIk5ld0dhbWVCdXR0b25cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNjb3JlIEJvYXJkXFxcIiB0YXA9XFxcInt7IG9uU2NvcmVQcmVzc2VkIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJXYW5uYSBDaGVhdD9cXFwiIHRhcD1cXFwie3sgb25Ub2dnbGVDaGVhdGVyTW9kZSB9fVxcXCIgaWQ9XFxcIkNoZWF0QnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhpbnQ6IFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJoaW50XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuICAgIDwvUGFnZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL21haW4tcGFnZS9tYWluLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiKTtcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5jb25zdCBGcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpLkZyYW1lO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuY29uc3QgTGFiZWwgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKS5MYWJlbDtcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XG5jb25zdCBTdGFja0xheW91dCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpLlN0YWNrTGF5b3V0O1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmNvbnN0IFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZC1rYWtcIik7XG5jb25zdCB2aWV3ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb25cIikudmlldztcbmNvbnN0IFRvb2xUaXAgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRvb2x0aXBcIikuVG9vbFRpcDtcblxuY29uc3QgbmV3R2FtZVNvdW5kID0gU291bmQuY3JlYXRlKGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKFwic291bmRzXCIpLnBhdGgrXCIvVUlfUXVpcmt5MS5tcDNcIik7XG5jb25zdCBjaGFuZ2VQZWdTb3VuZCA9IFNvdW5kLmNyZWF0ZShmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcihcInNvdW5kc1wiKS5wYXRoK1wiL1VJX1F1aXJreV81Mi5tcDNcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcblx0U2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIm1haW4tcGFnZVwiKTtcblxuXHRjb25zdCB2aWV3TW9kZWwgPSBPYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuXHRcdHR1dG9yaWFsOiBmYWxzZSxcblx0XHRndWVzc0NvdW50OiAwLCAvL3RoZSBudW1iZXIgb2YgZ3Vlc3NlcyBmb3JtIDEtMTJcblx0XHRpc0NoZWF0ZXJNb2RlRW5hYmxlZDogZmFsc2UsIC8vZmxhZyBmb3Igc2hvd2luZyB0aGUgc29sdXRpb24gZm9yIGNoZWF0ZXJzXG5cdFx0Ly9kZWZ1YWx0IGFycmF5IG9mIHBlZ3MgZm9yIHBsYXlpbmcgdGhlIGdhbWVcblx0XHRwZWdzOiBbXG5cdFx0XHR7IG5hbWU6IFwiYmx1ZVwiLCBjaGFyYWN0ZXI6IFwi8J+UtVwifSxcblx0XHRcdHsgbmFtZTogXCJibGFja1wiLCBjaGFyYWN0ZXI6IFwi4pqrXCJ9LFxuXHRcdFx0eyBuYW1lOiBcIndoaXRlXCIsIGNoYXJhY3RlcjogXCLimqpcIn0sXG5cdFx0XHR7IG5hbWU6IFwicmVkXCIsIGNoYXJhY3RlcjogXCLwn5S0XCJ9LFxuXHRcdFx0eyBuYW1lOiBcImJsdWUtYW5kLXdoaXRlXCIsIGNoYXJhY3RlcjogXCLij7rvuI9cIn0sXG5cdFx0XHR7IG5hbWU6IFwiaG9sbG93LXJlZFwiLCBjaGFyYWN0ZXI6IFwi4q2VXCJ9XG5cdFx0XSxcblx0XHRnYW1lczogbmV3IEFycmF5KCksIC8vY29udGFpbmVyIGZvciBvbGQgZ2FtZXNcblx0XHRjb2RlOiBuZXcgQXJyYXkoKSwgLy9jb250YWluZXIgZm9yIHRoZSBzb2x1dGlvblxuXHRcdC8vY3JlYXRlIGNvZGUgZm9yIHBsYXllciB0byBzb2x2ZVxuXHRcdGNyZWF0ZUNvZGU6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBzb2x1dGlvbiA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJzb2x1dGlvblwiKTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0bGV0IHBlZyA9IHRoaXMucGVnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5wZWdzLmxlbmd0aCldO1xuXHRcdFx0XHR0aGlzLmNvZGUucHVzaChwZWcpO1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdGxhYmVsLnRleHQgPSBwZWcubmFtZStcIjogXCIrcGVnLmNoYXJhY3RlcitcIiBcIjtcblx0XHRcdFx0c29sdXRpb24uYWRkQ2hpbGQobGFiZWwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly9jcmVhdGVzIGEgcm93IG9mIHBlZ3MgZm9yIHRoZSBwbGF5ZXIgdG8gY2hhbmdlIGVhY2ggZ3Vlc3Ncblx0XHRjcmVhdGVSb3c6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdC8vY3JlYXRlIG5ldyBwZWdzIGFuZCBndWVzcyBidXR0b25cblx0XHRcdGxldCBib2FyZCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJib2FyZFwiKTtcblx0XHRcdGxldCBzdGFjayA9IG5ldyBTdGFja0xheW91dCgpO1xuXHRcdFx0c3RhY2suaWQgPSBcInBlZ3NcIjtcblx0XHRcdHN0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdGxldCBidXR0b24gPSBuZXcgQnV0dG9uKCk7XG5cdFx0XHRcdGJ1dHRvbi50ZXh0ID0gXCLwn5S1XCI7XG5cdFx0XHRcdGJ1dHRvbi53aWR0aCA9IDI1O1xuXHRcdFx0XHRpZihpPT0zKSBidXR0b24uaWQgPSBcIkRlbW9CdXR0b25cIjtcblx0XHRcdFx0YnV0dG9uLm9uKFwidGFwXCIsIHRoaXMub25DaGFuZ2VQZWcsIHRoaXMpO1xuXHRcdFx0XHRzdGFjay5hZGRDaGlsZChidXR0b24pO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGd1ZXNzQnV0dG9uID0gbmV3IEJ1dHRvbigpO1xuXHRcdFx0Z3Vlc3NCdXR0b24udGV4dCA9IFwiR3Vlc3NcIjtcblx0XHRcdGd1ZXNzQnV0dG9uLmlkID0gXCJHdWVzc0J1dHRvblwiO1xuXHRcdFx0Z3Vlc3NCdXR0b24ub24oXCJ0YXBcIiwgdGhpcy5vbkd1ZXNzLCB0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ym9hcmQuYWRkQ2hpbGQoc3RhY2spO1xuXHRcdFx0Ym9hcmQuYWRkQ2hpbGQoZ3Vlc3NCdXR0b24pO1xuXHRcdH0sXG5cdFx0Ly90b2dnbGVzIGNoZWF0ZXIgbW9kZSB0byBvbiBhbmQgb2ZmXG5cdFx0b25Ub2dnbGVDaGVhdGVyTW9kZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmlzQ2hlYXRlck1vZGVFbmFibGVkID0gIXRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQ7XG5cdFx0fSxcblx0XHQvL3doZW4gdGhlIHBhZ2UgbG9hZHMgY3JlYXRlIGEgbmV3IGdhbWUgYW5kIGdldCBndWVzc0NvdW50XG5cdFx0b25Mb2FkOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIklTIFRVVE9SSUFMOlwiK3RoaXMudHV0b3JpYWwpO1xuXHRcdFx0aWYodGhpcy5jb2RlLmxlbmd0aCAhPT0gMCkgcmV0dXJuOyAvL2lmIG5vIGNvZGUgdGhlbiByZXR1cm5cblx0XHRcdFxuXHRcdFx0Ly93aGVuIHRoZSBhcHAgaXMgc3RhcnRlZCBjcmVhdGUgZmlyc3QgY29kZSB0byBzb2x2ZVxuXHRcdFx0dGhpcy5jb2RlID0gZ2xvYmFsLmNvZGU7IC8vcmVzdG9yZSBjdXJyZW50IGNvZGUgdG8gc29sdmVcblx0XHRcdGlmKGdsb2JhbC5maXJzdFJ1bikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUNvZGUoYXJncyk7XG5cdFx0XHRcdGdsb2JhbC5maXJzdFJ1biA9IGZhbHNlO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmNvZGUpXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZ3Vlc3NDb3VudCA9IGdsb2JhbC5ndWVzc0NvdW50OyAvL3Jlc3RvcmUgdGhlIGd1ZXNzIGNvdW50XG5cdFx0XHRcblx0XHRcdC8vIHByZXZlbnRzIGNyYXNoIG9uIGZpcnN0IGxvYWRcblx0XHRcdC8vIGlmKHR5cGVvZihnbG9iYWwuZ2FtZXMpID09PSB0eXBlb2Yoe30pICYmIE9iamVjdC5rZXlzKGdsb2JhbC5nYW1lcykubGVuZ3RoID09IDApIHtcblx0XHRcdC8vIFx0Z2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG5cdFx0XHQvLyB9XG5cdFx0XHR0aGlzLmdhbWVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkYXRhXCIpKTsgLy9yZXN0b3JlIGdhbWUgaGlzdG9yeVxuXHRcdFx0dGhpcy5vbk5ld0dhbWUoYXJncyk7XG5cdFx0XHRpZih0aGlzLnR1dG9yaWFsKSB0aGlzLlN0YXJ0V2Fsa3Rocm91Z2goYXJncyk7XG5cdFx0fSxcblx0XHQvL2dvIHRvIHRoZSBzY29yZSBib2FyZCBwYWdlXG5cdFx0b25TY29yZVByZXNzZWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdHRoaXMudHV0b3JpYWwgPSBmYWxzZTtcblx0XHRcdGdsb2JhbC5ndWVzc0NvdW50ID0gdGhpcy5ndWVzc0NvdW50IC8vc2F2ZSBndWVzcyBjb3VudFxuXHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdhbWVzKSk7XG5cdFx0XHRnbG9iYWwuZ2FtZXMgPSB0aGlzLmdhbWVzOyAvL3NhdmUgZ2FtZSBoaXN0b3J5XG5cdFx0XHRGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuXHRcdFx0XHRtb2R1bGVOYW1lOiBcInNjb3JlLXBhZ2Uvc2NvcmUtcGFnZVwiLFxuXHRcdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdFx0Z2FtZXM6IHRoaXMuZ2FtZXNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvL2NyZWF0ZXMgdGhlIGhpbnQgZm9yIHRoZSBwbGF5ZXJzIGN1cnJlbnQgZ3Vlc3Ncblx0XHRnaXZlSGludDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGhpbnQgPSBhcmdzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJoaW50XCIpOyAvL3doZXJlIHRoZSBoaW50IHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRoaW50LnJlbW92ZUNoaWxkcmVuKCk7IC8vY2xlYXIgcHJldmlvdXMgaGludFxuXG5cdFx0XHRsZXQgcGVnQXJyID0gYXJncy5wZWdBcnI7IC8vcGxheWVycyBndWVzc1xuXHRcdFx0bGV0IGNvZGVBcnIgPSBuZXcgQXJyYXkoKTsgLy9hcnJheSB0byBzdG9yZSB0aGUgcmlnaHQgc29sdXRpb24gd2l0aG91dCB0aGUganNvbiBkYXRhXG5cdFx0XHR0aGlzLmNvZGUuZm9yRWFjaChwZWcgPT4geyBjb2RlQXJyLnB1c2gocGVnLmNoYXJhY3Rlcik7IH0pOyAvL21ha2UgbmV3IGFycmF5IHdpdGhvdXQganNvbiBkYXRhXG5cblx0XHRcdGxldCBoaW50QXJyID0gbmV3IEFycmF5KDQpOyAvL2FycmF5IHdoZXJlIGhpbnRzIHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcGVnQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHQvL2NvcnJlY3QgY29sb3IgYW5kIHBvc2l0aW9uXG5cdFx0XHRcdGlmKHBlZ0FycltpXSA9PSBjb2RlQXJyW2ldKSBsYWJlbC50ZXh0ID0gXCJQb3NpdGlvbiBcIisoaSsxKStcIjogXCIrY29kZUFycltpXStcIi0+IHJpZ2h0IGNvbG9yIHJpZ2h0IHBvc2l0aW9uXCI7XG5cdFx0XHRcdC8vY29ycmVjdCBjb2xvciB3cm9uZyBwb3NpdGlvblxuXHRcdFx0XHRlbHNlIGlmKGNvZGVBcnIuaW5jbHVkZXMocGVnQXJyW2ldKSkge1xuXHRcdFx0XHRcdGxhYmVsLnRleHQgPSBcIlBvc2l0aW9uIFwiKyhpKzEpK1wiOiBcIitwZWdBcnJbaV0rXCItPiByaWdodCBjb2xvciB3cm9uZyBwb3NpdGlvblwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhpbnRBcnJbaV0gPSBsYWJlbDtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGhpbnRTdGFjayA9IG5ldyBTdGFja0xheW91dCgpOyAvL3N0b3JlcyB0aGUgaGludHMgZm9yIHRoZSBwbGF5ZXJcblx0XHRcdGxldCBndWVzc1N0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vc3RvcmVzIHRoZSB1c2VycyBtb3N0IHJlY2VudCBndWVzc1xuXHRcdFx0Z3Vlc3NTdGFjay5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXHRcdFx0XG5cdFx0XHRsZXQgZ3Vlc3MgPSBuZXcgTGFiZWwoKTsgLy9kaXNwbGF5IHRoZSBwbGF5ZXJzIGd1ZXNzXG5cdFx0XHRndWVzcy50ZXh0ID0gXCJZb3VyIEd1ZXNzOiBcIjtcblx0XHRcdGd1ZXNzU3RhY2suYWRkQ2hpbGQoZ3Vlc3MpO1xuXG5cdFx0XHQvL3BhcnNlIHBsYXllcnMgZ3Vlc3MgYW5kIGNyZWF0ZSB4bWwgZm9yIGl0XG5cdFx0XHRwZWdBcnIuZm9yRWFjaChwZWcgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhwZWcpO1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0bGFiZWwudGV4dCA9IHBlZztcblx0XHRcdFx0Z3Vlc3NTdGFjay5hZGRDaGlsZChsYWJlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9hZGQgdGhlIGhpbnRzIGZvcm0gaGludEFyciB0byBoaW50U3RhY2tcblx0XHRcdGhpbnRBcnIuZm9yRWFjaChwZWdIaW50ID0+IHtcblx0XHRcdFx0aGludFN0YWNrLmFkZENoaWxkKHBlZ0hpbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGhpbnQuYWRkQ2hpbGQoZ3Vlc3NTdGFjayk7IC8vYWRkIHBsYXllcnMgY3VycmVudCBndWVzc1xuXHRcdFx0aGludC5hZGRDaGlsZChoaW50U3RhY2spOyAvL2FkZCBoaW50IGZvciB0aGUgcGxheWVyXG5cdFx0fSxcblx0XHQvL3N1Ym1pdCBhIGd1ZXNzXG5cdFx0b25HdWVzczogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuXHRcdFx0bGV0IHBlZ3MgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwicGVnc1wiKTtcblx0XHRcdHBlZ3MuaWQgPSBcIlwiO1xuXHRcdFx0dGhpcy5ndWVzc0NvdW50Kys7XG5cblx0XHRcdC8vZGlzYWJsZSBlYWNoIHBlZyBhbmQgYWRkIHRvIGFycmF5XG5cdFx0XHRsZXQgcGVnQXJyID0gbmV3IEFycmF5KCk7XG5cdFx0XHRwZWdzLmVhY2hDaGlsZChmdW5jdGlvbihjaGlsZCkge1xuXHRcdFx0XHRwZWdBcnIucHVzaChjaGlsZC50ZXh0KTtcblx0XHRcdFx0Y2hpbGQuaXNFbmFibGVkID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9jaGVjayBpZiBwbGF5ZXIgd29uXG5cdFx0XHRsZXQgd29uID0gdHJ1ZTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYocGVnQXJyW2ldICE9IHRoaXMuY29kZVtpXS5jaGFyYWN0ZXIpIHdvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2NoZWNrIHdpbiBhbmQgbG9zZSBjb25kaXRpb25zXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRsZXQgY3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7IC8vdXNlZCB0byBjb3B5IGN1cnJlbnQgd2lubmluZyBib2FyZFxuXHRcdFx0bGV0IGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTsgLy91c2VkIHRvIGdldCBlYWNoIHJvdyBvZiBjdXJyZW50IGJvYXJkXG5cdFx0XHRpZih3b24pIHtcblx0XHRcdFx0Y3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGJvYXJkLmVhY2hDaGlsZChzdGFjayA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdHN0YWNrLmVhY2hDaGlsZChidXR0b24gPT4ge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKGJ1dHRvbi50ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjdXJyZW50Qm9hcmQucHVzaChjdXJyZW50Um93KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IGN1cnJlbnRHYW1lID0geyBib2FyZDogY3VycmVudEJvYXJkLCBndWVzc0NvdW50OiB0aGlzLmd1ZXNzQ291bnQsIGlzV2luOiB0cnVlLCBzb2x1dGlvbjogdGhpcy5jb2RlIH07IFxuXHRcdFx0XHRpZih0aGlzLmdhbWVzLmxlbmd0aCA9PSA1KSB7XG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYodGhpcy5nYW1lc1tpXS5ndWVzc0NvdW50ID4gY3VycmVudEdhbWUuZ3Vlc3NDb3VudCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdhbWVzW2ldID0gY3VycmVudEdhbWU7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB0aGlzLmdhbWVzLnB1c2goY3VycmVudEdhbWUpO1xuXHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZ3Vlc3NDb3VudCA8IDEyKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlUm93KGFyZ3MpOyAvL2NyZWF0ZSBuZXcgcm93IGZvciBpbnB1dHRpbmcgYSBndWVzc1xuXHRcdFx0XHR0aGlzLmdpdmVIaW50KHsgcGVnQXJyOiBwZWdBcnIsIHBhZ2U6IGFyZ3Mub2JqZWN0LnBhZ2UgfSk7IC8vY3JlYXRlcyB0aGUgaGludCBmb3IgdGhlIHBsYXllclxuXHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50Qm9hcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0Ym9hcmQuZWFjaENoaWxkKHN0YWNrID0+IHtcblx0XHRcdFx0XHRjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0c3RhY2suZWFjaENoaWxkKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Um93LnB1c2goYnV0dG9uLnRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGN1cnJlbnRCb2FyZC5wdXNoKGN1cnJlbnRSb3cpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmQpO1xuXHRcdFx0XHR0aGlzLmdhbWVzLnB1c2goeyBib2FyZDogdGhpcy5jdXJyZW50Qm9hcmQsIGd1ZXNzQ291bnQ6IDEyLCBpc1dpbjogZmFsc2UsIHNvbHV0aW9uOiB0aGlzLmNvZGUgfSk7XG5cdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0Ly9yZW1vdmUgY3VycmVudCBndWVzcyBidXR0b25cblx0XHRcdGJ1dHRvbi5wYXJlbnQucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcblx0XHR9LFxuXHRcdC8vY2hhbmdlIHdoaWNoIGNvbG9yIGEgcGVnIGJ1dHRvbiBpc1xuXHRcdG9uQ2hhbmdlUGVnOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgYnV0dG9uID0gYXJncy5vYmplY3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wZWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMucGVnc1tpXS5jaGFyYWN0ZXIgPT0gYnV0dG9uLnRleHQpICB7XG5cdFx0XHRcdFx0YnV0dG9uLnRleHQgPSB0aGlzLnBlZ3NbKGkrMSkldGhpcy5wZWdzLmxlbmd0aF0uY2hhcmFjdGVyO1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2codGhpcy5wZWdzWyhpKzEpJXRoaXMucGVncy5sZW5ndGhdLm5hbWUpO1xuXHRcdFx0XHRcdGNoYW5nZVBlZ1NvdW5kLnBsYXkoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vY3JlYXRlIGEgbmV3IGdhbWVcblx0XHRvbk5ld0dhbWU6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdC8vcmVtb3ZlIGFsbCBwZWdzIGZyb20gY2hlYXRlciBoaW50XG5cdFx0XHRsZXQgc29sdXRpb24gPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwic29sdXRpb25cIik7XG5cdFx0XHRzb2x1dGlvbi5yZW1vdmVDaGlsZHJlbigpO1xuXHRcdFx0XG5cdFx0XHQvL2dlbmVyYXRlIGEgbmV3IGNvZGUgZm9yIHRoZSBwbGF5ZXIgdG8gZmluZFxuXHRcdFx0dGhpcy5jb2RlID0gbmV3IEFycmF5KCk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNvZGUoYXJncyk7XG5cdFx0XHRcblx0XHRcdC8vcmVzZXQgdmFycyB0byBkZWZhdWx0XG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQgPSAwO1xuXHRcdFx0Z2xvYmFsLmd1ZXNzQ291bnQgPSAwO1xuXHRcdFx0Z2xvYmFsLmNvZGUgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0dGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0XG5cdFx0XHQvL3JlbW92ZSBhbGwgcGVncyBmb3JtIGJvYXJkXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRib2FyZC5yZW1vdmVDaGlsZHJlbigpO1xuXG5cdFx0XHQvL2NsZWFyIGhpbnRcblx0XHRcdGxldCBoaW50ID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImhpbnRcIik7XG5cdFx0XHRoaW50LnJlbW92ZUNoaWxkcmVuKCk7XG5cblx0XHRcdC8vY3JlYXRlIHRoZSBmaXJzdCBzbG90XG5cdFx0XHR0aGlzLmNyZWF0ZVJvdyhhcmdzKTtcblx0XHRcdG5ld0dhbWVTb3VuZC5wbGF5KCk7XG5cdFx0XHRcblx0XHR9LFxuXHRcdFN0YXJ0V2Fsa3Rocm91Z2g6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcblx0XHRcdGxldCB0aXA7XG5cdFx0XHR2YXIgdGggPSB0aGlzLk9uR3Vlc3M7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aXAgPSBuZXcgVG9vbFRpcChwYWdlLmdldFZpZXdCeUlkKFwiRGVtb0J1dHRvblwiKSwge1xuXHRcdFx0XHRcdHRleHQ6IFwiVGFwIFRoZSBQZWcgVG8gQ2hhbmdlIEl0J3MgQ29sb3JcIixcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJib3R0b21cIixcblx0XHRcdFx0XHRoaWRlQXJyb3c6IGZhbHNlLFxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCJibGFja1wiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXG5cdFx0XHRcdFx0c3R5bGU6IFwiQ3VzdG9tVG9vbFRpcExheW91dFN0eWxlXCIsXG5cdFx0XHRcdFx0d2lkdGg6MTAwMFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGlwLnNob3coKTtcblx0XHRcdH0sIDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdHRpcC5oaWRlKCk7XG5cdFx0XHRcdHRpcCA9IG5ldyBUb29sVGlwKHBhZ2UuZ2V0Vmlld0J5SWQoXCJHdWVzc0J1dHRvblwiKSwge1xuXHRcdFx0XHRcdHRleHQ6IFwiVGFwIFRoZSBHdWVzcyBCdXR0b24gVG8gU3VibWl0dCBUaGUgUGVncyBDb2xvcnMgYW5kIFBvc2l0aW9uc1wiLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuXHRcdFx0XHRcdGhpZGVBcnJvdzogZmFsc2UsXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcImJsYWNrXCIsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcblx0XHRcdFx0XHRzdHlsZTogXCJDdXN0b21Ub29sVGlwTGF5b3V0U3R5bGVcIixcblx0XHRcdFx0XHR3aWR0aDo0MDBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRpcC5zaG93KCk7XG5cdFx0XHR9LCA1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHR0aXAuaGlkZSgpO1xuXHRcdFx0XHR0aXAgPSBuZXcgVG9vbFRpcChwYWdlLmdldFZpZXdCeUlkKFwiaGludFwiKSwge1xuXHRcdFx0XHRcdHRleHQ6IFwiSGludHMgV2lsbCBCZSBHaXZlbiBBZnRlciBFYWNoIEd1ZXNzXCIsXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYm90dG9tXCIsXG5cdFx0XHRcdFx0aGlkZUFycm93OiBmYWxzZSxcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiYmxhY2tcIixcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxuXHRcdFx0XHRcdHN0eWxlOiBcIkN1c3RvbVRvb2xUaXBMYXlvdXRTdHlsZVwiLFxuXHRcdFx0XHRcdHdpZHRoOjEwMDBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRpcC5zaG93KCk7XG5cdFx0XHR9LCAxMDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0dGlwLmhpZGUoKTtcblx0XHRcdFx0dGlwID0gbmV3IFRvb2xUaXAocGFnZS5nZXRWaWV3QnlJZChcImhpbnRcIiksIHtcblx0XHRcdFx0XHR0ZXh0OiBcIkVhY2ggSGludCBXaWxsIEdpdmUgWW91IEluZm9ybWF0aW9uIEFib3V0IElmIEEgUGVnIEhhcyB0aGUgUmlnaHQgQ29sb3IsIG9yIGlmIHRoYXQgY29sb3IgaXMgYSBwYXJ0IG9mIHRoZSBzb2x1dGlvbiBidXQgaW4gdGhlIHdyb25nIFBvc2l0aW9uLCBOTyBoaW50IHdpbGwgYmUgZ2l2ZW4gaWYgbm8gcmlnaHQgY29sb3JzIGFyZSBndWVzc2VkXCIsXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYm90dG9tXCIsXG5cdFx0XHRcdFx0aGlkZUFycm93OiBmYWxzZSxcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiYmxhY2tcIixcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxuXHRcdFx0XHRcdHN0eWxlOiBcIkN1c3RvbVRvb2xUaXBMYXlvdXRTdHlsZVwiLFxuXHRcdFx0XHRcdHdpZHRoOjEwMDBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRpcC5zaG93KCk7XG5cdFx0XHR9LCAxNTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0dGlwLmhpZGUoKTtcblx0XHRcdFx0dGlwID0gbmV3IFRvb2xUaXAocGFnZS5nZXRWaWV3QnlJZChcInRpdGxlXCIpLCB7XG5cdFx0XHRcdFx0dGV4dDogXCJZb3UgSGF2ZSAxMiBSb3VuZHMgVW50aWwgSXQgSXMgR2FtZSBPdmVyIVwiLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuXHRcdFx0XHRcdGhpZGVBcnJvdzogZmFsc2UsXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcImJsYWNrXCIsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcblx0XHRcdFx0XHRzdHlsZTogXCJDdXN0b21Ub29sVGlwTGF5b3V0U3R5bGVcIixcblx0XHRcdFx0XHR3aWR0aDoxMDAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aXAuc2hvdygpO1xuXHRcdFx0fSwgMzAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRpcC5oaWRlKCk7XG5cdFx0XHRcdHRpcCA9IG5ldyBUb29sVGlwKHBhZ2UuZ2V0Vmlld0J5SWQoXCJDaGVhdEJ1dHRvblwiKSwge1xuXHRcdFx0XHRcdHRleHQ6IFwiWW91IENhbiBBbHdheXMgQ2hlYXQ/IVwiLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuXHRcdFx0XHRcdGhpZGVBcnJvdzogZmFsc2UsXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcImJsYWNrXCIsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcblx0XHRcdFx0XHRzdHlsZTogXCJDdXN0b21Ub29sVGlwTGF5b3V0U3R5bGVcIixcblx0XHRcdFx0XHR3aWR0aDoxMDAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aXAuc2hvdygpO1xuXHRcdFx0fSwgMzUwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRpcC5oaWRlKCk7XG5cdFx0XHRcdHRpcCA9IG5ldyBUb29sVGlwKHBhZ2UuZ2V0Vmlld0J5SWQoXCJOZXdHYW1lQnV0dG9uXCIpLCB7XG5cdFx0XHRcdFx0dGV4dDogXCJPciBTdGFydCBBIE5ldyBHYW1lPyFcIixcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJyaWdodFwiLFxuXHRcdFx0XHRcdGhpZGVBcnJvdzogZmFsc2UsXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcImJsYWNrXCIsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcblx0XHRcdFx0XHRzdHlsZTogXCJDdXN0b21Ub29sVGlwTGF5b3V0U3R5bGVcIixcblx0XHRcdFx0XHR3aWR0aDoxMDAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aXAuc2hvdygpO1xuXHRcdFx0fSwgNDAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aXAuaGlkZSgpO1xuXHRcdFx0fSwgNDUwMDApO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tcGFnZS9tYWluLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xuY29uc3QgU2VsZWN0ZWRQYWdlU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xuY29uc3QgT2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cblxuZnVuY3Rpb24gY3JlYXRlVmlld01vZGVsKCkge1xuICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJzY29yZS1wYWdlXCIpO1xuXG4gICAgY29uc3Qgdmlld01vZGVsID0gT2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICAgICAgc2NvcmVzOiB7fSxcbiAgICAgICAgb25Mb2FkZWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkYXRhXCIpKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2NvcmVCb2FyZChhcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGVhclNjb3JlQm9hcmQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIC8vYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICAgICAgICAgICAgZ2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNKTEVcIik7IFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVTY29yZUJvYXJkOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICBsZXQgc2NvcmVCb2FyZCA9IGFyZ3Mub2JqZWN0LmdldFZpZXdCeUlkKFwic2NvcmVCb2FyZFwiKTsgLy90aGUgc2NvcmUgYm9hcmRcbiAgICAgICAgICAgIHNjb3JlQm9hcmQucmVtb3ZlQ2hpbGRyZW4oKTsgLy9yZW1vdmUgcHJldmlvdXMgc2NvcmUgYm9hcmQgaW5mb1xuXG4gICAgICAgICAgICB0aGlzLnNjb3Jlcy5mb3JFYWNoKGZ1bmN0aW9uKGJvYXJkKXtcblxuICAgICAgICAgICAgICAgIGxldCBnYW1lID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vY29udGFpbnMgdGhlIGJvYXJkIHN0YXR1c1xuICAgICAgICAgICAgICAgIGxldCBpc1dpbiA9IG5ldyBMYWJlbCgpO1xuICAgICAgICAgICAgICAgIGlzV2luLnRleHQgPSBcIldpbm5lcjogXCIrYm9hcmQuaXNXaW47XG4gICAgICAgICAgICAgICAgbGV0IGd1ZXNzQ291bnQgPSBuZXcgTGFiZWwoKTtcbiAgICAgICAgICAgICAgICBndWVzc0NvdW50LnRleHQgPSBcIkd1ZXNzIENvdW50OiBcIitib2FyZC5ndWVzc0NvdW50O1xuICAgICAgICAgICAgICAgIGdhbWUuYWRkQ2hpbGQoaXNXaW4pO1xuICAgICAgICAgICAgICAgIGdhbWUuYWRkQ2hpbGQoZ3Vlc3NDb3VudCk7XG5cbiAgICAgICAgICAgICAgICBib2FyZC5ib2FyZC5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTsgLy9yb3dzIGZvciBhIHNpbmdsZSBnYW1lXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uKHBlZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTsgLy9lYWNoIHBlZyBjb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwudGV4dCA9IHBlZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLmFkZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5hZGRDaGlsZChzdGFjayk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gbmV3IExhYmVsKCk7XG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yLnRleHQgPSBcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXFxuXCI7XG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZC5hZGRDaGlsZChnYW1lKTtcbiAgICAgICAgICAgICAgICBzY29yZUJvYXJkLmFkZENoaWxkKHNlcGFyYXRvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5leHBvcnRzLmNyZWF0ZVZpZXdNb2RlbCA9IGNyZWF0ZVZpZXdNb2RlbDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vc2NvcmUtcGFnZS12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcbmNvbnN0IEZpbGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKS5GaWxlO1xuXG5cbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBjcmVhdGVWaWV3TW9kZWwoKTtcblxuICAgIGNvbnN0IGRhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuICAgIC8vcGFnZS5iaW5kaW5nQ29udGV4dC5zZXQoXCJzY29yZXNcIiwgZGF0YS5nYW1lcyk7XG59XG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIlxcbiAgICBsb2FkZWQ9XFxcInt7IG9uTG9hZGVkIH19XFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiU2NvcmUgQm9hcmRcXFwiIGljb249XFxcIlxcXCI+PC9BY3Rpb25CYXI+XFxuXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwic2NvcmVCb2FyZFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkNsZWFyIFNjb3JlIEJvYXJkXFxcIiB0YXA9XFxcInt7IG9uQ2xlYXJTY29yZUJvYXJkIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgeyBCZWhhdmlvclN1YmplY3QgfSA9IHJlcXVpcmUoXCJyeGpzXCIpO1xuXG5mdW5jdGlvbiBTZWxlY3RlZFBhZ2VTZXJ2aWNlKCkge1xuICAgIGlmIChTZWxlY3RlZFBhZ2VTZXJ2aWNlLl9pbnN0YW5jZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2UgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LlwiKTtcbiAgICB9XG5cbiAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkUGFnZSBzb3VyY2VcbiAgICB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFwiSG9tZVwiKTtcblxuICAgIC8vIE9ic2VydmFibGUgc2VsZWN0ZWRQYWdlIHN0cmVhbVxuICAgIHRoaXMuc2VsZWN0ZWRQYWdlJCA9IHRoaXMuX3NlbGVjdGVkUGFnZVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRQYWdlID0gZnVuY3Rpb24oc2VsZWN0ZWRQYWdlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkUGFnZVNvdXJjZS5uZXh0KHNlbGVjdGVkUGFnZSk7XG4gICAgfTtcbn1cblxuU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2U7XG59O1xuXG5TZWxlY3RlZFBhZ2VTZXJ2aWNlLl9pbnN0YW5jZSA9IG5ldyBTZWxlY3RlZFBhZ2VTZXJ2aWNlKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0ZWRQYWdlU2VydmljZTtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9