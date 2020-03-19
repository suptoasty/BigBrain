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
module.exports = "<Page \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"onNavigatingTo\"\n    loaded=\"{{ onLoad }}\">\n    <ActionBar title=\"{{ 'Guess Count: ' +  guessCount }}\" icon=\"\"></ActionBar>\n\n    <ScrollView>\n\n        <StackLayout>\n            <StackLayout id=\"board\">\n                <StackLayout id=\"pegs\" orientation=\"horizontal\">\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                </StackLayout>\n                <Button text=\"Guess\" tap=\"{{ onGuess }}\"></Button>\n            </StackLayout>\n            <StackLayout visibility=\"{{ isCheaterModeEnabled ? 'visible' : 'collapse' }}\" id=\"solution\" orientation=\"horizontal\"></StackLayout>\n            <StackLayout  orientation=\"horizontal\">\n                <Button text=\"New Game\" tap=\"{{ onNewGame }}\"></Button>\n                <Button text=\"Score Board\" tap=\"{{ onScorePressed }}\"></Button>\n                <Button text=\"Wanna Cheat?\" tap=\"{{ onToggleCheaterMode }}\"></Button>\n            </StackLayout>\n            <StackLayout>\n                <Label text=\"Hint: \"></Label>\n                <StackLayout id=\"hint\"></StackLayout>\n                <Label text=\"Jason Lonsinger - in ful\fllment of requirements for Assignment 8 of CMSC 4233 in the Spring 2020 course.\" textWrap=\"true\"></Label>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n    </Page>\n"; 
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
				button.on("tap", this.onChangePeg, this);
				stack.addChild(button);
			}
			let guessButton = new Button();
			guessButton.text = "Guess";
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
			global.guessCount = this.guessCount //save guess count
			global.games = this.games; //save game history
			appSettings.setString("data", JSON.stringify(this.games));
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
			const tip = new ToolTip(args.object, {
				text: "text thing",
				position: "bottom",
				hideArrow: false,
				textColor: "black",
				backgroundColor: "blue",
				style: "CustomToolTipLayoutStyle",
				width:400
			});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL2ludHJvLXBhZ2UvaW50cm8tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UueG1sIiwid2VicGFjazovLy8uL21haW4tcGFnZS9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixxREFBcUQ7QUFDaEYsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQ3BCQSxzSUFBc0ksWUFBWSwrTkFBK04scUJBQXFCLG9FO0FBQ3RZLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFzRDtBQUNqRixLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNSQSxxREFBTyxrQkFBa0IsR0FBRyxtQkFBTyxDQUFDLHFDQUFNOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDREQUE0RDtBQUN2RixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzXCI6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLmpzXCI6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UuanNcIixcblx0XCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS54bWxcIjogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS54bWxcIixcblx0XCIuL21haW4tcGFnZS9tYWluLXBhZ2UuanNcIjogXCIuL21haW4tcGFnZS9tYWluLXBhZ2UuanNcIixcblx0XCIuL21haW4tcGFnZS9tYWluLXBhZ2UueG1sXCI6IFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiOiBcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLXZpZXctbW9kZWwuanNcIjogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanNcIjogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS5qc1wiLFxuXHRcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbFwiOiBcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbFwiLFxuXHRcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiOiBcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwiaW50cm8tcGFnZS9pbnRyby1wYWdlXFxcIj5cXG48L0ZyYW1lPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlIFxcbk5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9uYXRpdmVzY3JpcHQvdGhlbWVcXG5UaGUgaW1wb3J0ZWQgQ1NTIHJ1bGVzIG11c3QgcHJlY2VkZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMuXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1xcXCJcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIFBsYWNlIGFueSBDU1MgcnVsZXMgeW91IHdhbnQgdG8gYXBwbHkgb24gYm90aCBpT1MgYW5kIEFuZHJvaWQgaGVyZS5cXG5UaGlzIGlzIHdoZXJlIHRoZSB2YXN0IG1ham9yaXR5IG9mIHlvdXIgQ1NTIGNvZGUgZ29lcy4gXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcblRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBCdXR0b25zIHRoYXQgaGF2ZSB0aGVcXG5cXFwiLXByaW1hcnlcXFwiIGNsYXNzIG1vZGlmaWVyLlxcblwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b24uLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxuICAgICAgICBsZXQgYXBwbGljYXRpb25DaGVja1BsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0uYW5kcm9pZCAmJiAhZ2xvYmFsW1wiX19zbmFwc2hvdFwiXSkge1xuICAgICAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5yZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyA9IGdsb2JhbC5fX29uTGl2ZVN5bmM7XG5cbiAgICAgICAgICAgIGdsb2JhbC5fX29uTGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIExpdmVTeW5jXG4gICAgICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCA9IGZ1bmN0aW9uKHsgdHlwZSwgcGF0aCB9ID0ge30pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgaG90IHVwZGF0ZXMgYXJlIGFwcGxpZWQsIGFzayB0aGUgbW9kdWxlcyB0byBhcHBseSB0aGUgY2hhbmdlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBpbml0aWFsIGFwcCBzdGFydFxuICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopKD88IVxcLlxcL1xcYnRlc3RzXFxiXFwvLio/KVxcLih4bWx8Y3NzfGpzfCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChjb250ZXh0LmlkLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhNUjogQWNjZXB0IG1vZHVsZSAnXCIgKyBjb250ZXh0LmlkICsgXCInIGZyb20gJ1wiICsgbW9kdWxlLmlkICsgXCInXCIpOyBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5nbG9iYWwuZmlyc3RSdW4gPSB0cnVlO1xuZ2xvYmFsLmd1ZXNzQ291bnQgPSAwO1xuZ2xvYmFsLmNvZGUgPSBuZXcgQXJyYXkoKTtcbmdsb2JhbC5nYW1lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiLFwie31cIikpO1xuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG5cbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgIiwiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xuY29uc3QgU2VsZWN0ZWRQYWdlU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xuY29uc3QgT2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5jb25zdCBGcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpLkZyYW1lO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuY29uc3QgU291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kLWtha1wiKTtcbmNvbnN0IG9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcbiAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiaW50cm8tcGFnZVwiKTtcblxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IE9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgICAgIGdhbWVzOiBuZXcgQXJyYXkoKSxcbiAgICAgICAgb25Mb2FkOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAvL3ByZXZlbnRzIGNyYXNoIG9uIGZpcnN0IGxvYWRcblx0XHRcdGlmKHR5cGVvZihnbG9iYWwuZ2FtZXMpID09PSB0eXBlb2Yoe30pICYmIE9iamVjdC5rZXlzKGdsb2JhbC5nYW1lcykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2FtZXMpKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZ2FtZXMgPSBnbG9iYWwuZ2FtZXM7IC8vcmVzdG9yZSBnYW1lIGhpc3RvcnlcbiAgICAgICAgfSxcbiAgICAgICAgb25TdGFydFR1dG9yaWFsOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFpbi1wYWdlL21haW4tcGFnZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHV0b3JpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdhbWVzOiB0aGlzLmdhbWVzXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU3RhcnRHYW1lOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFpbi1wYWdlL21haW4tcGFnZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHV0b3JpYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBnYW1lczogdGhpcy5nYW1lc1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblNjb3JlQm9hcmQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG5cdFx0XHRcdG1vZHVsZU5hbWU6IFwic2NvcmUtcGFnZS9zY29yZS1wYWdlXCIsXG5cdFx0XHRcdGNvbnRleHQ6IHtcblx0XHRcdFx0XHRnYW1lczogdGhpcy5nYW1lc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2Utdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2ludHJvLXBhZ2Utdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5jb25zdCBGaWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIikuRmlsZTtcblxuXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgY3JlYXRlVmlld01vZGVsKCk7XG5cbiAgICBjb25zdCBkYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcbn1cblxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvOzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIlxcbiAgICBsb2FkZWQ9XFxcInt7IG9uTG9hZCB9fVxcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkludHJvIFNjcmVlblxcXCIgaWNvbj1cXFwiXFxcIj48L0FjdGlvbkJhcj5cXG5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFwcGxpY2F0aW9uIEltYWdlOlxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwi8J+OslxcXCIgZm9udFNpemU9XFxcIjY0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJKYXNvbiBMb25zaW5nZXIgLSBpbiBmdWxmaVxcZmxsbWVudCBvZiByZXF1aXJlbWVudHMgZm9yIEFzc2lnbm1lbnQgOSBvZiBDTVNDIDQyMzMgaW4gdGhlIFNwcmluZyAyMDIwIGNvdXJzZS5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU3RhcnQgR2FtZVxcXCIgdGFwPVxcXCJ7eyBvblN0YXJ0R2FtZSB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJXYWxrIFRocm91Z2hcXFwiIHRhcD1cXFwie3sgb25TdGFydFR1dG9yaWFsIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNjb3JlIEJvYXJkXFxcIiB0YXA9XFxcInt7IG9uU2NvcmVCb2FyZCB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vbWFpbi12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcblxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IGNyZWF0ZVZpZXdNb2RlbCgpO1xuXG4gICAgY29uc3QgZGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dC5zZXQoXCJ0dXRvcmlhbFwiLCBkYXRhLnR1dG9yaWFsKTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0LnNldChcImdhbWVzXCIsIGRhdGEuZ2FtZXMpO1xuXG59XG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlL21haW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiXFxuICAgIGxvYWRlZD1cXFwie3sgb25Mb2FkIH19XFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwie3sgJ0d1ZXNzIENvdW50OiAnICsgIGd1ZXNzQ291bnQgfX1cXFwiIGljb249XFxcIlxcXCI+PC9BY3Rpb25CYXI+XFxuXFxuICAgIDxTY3JvbGxWaWV3PlxcblxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiYm9hcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcInBlZ3NcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XFxcIjI1XFxcIiB0ZXh0PVxcXCLwn5S1XFxcIiB0YXA9XFxcInt7IG9uQ2hhbmdlUGVnIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XFxcIjI1XFxcIiB0ZXh0PVxcXCLwn5S1XFxcIiB0YXA9XFxcInt7IG9uQ2hhbmdlUGVnIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XFxcIjI1XFxcIiB0ZXh0PVxcXCLwn5S1XFxcIiB0YXA9XFxcInt7IG9uQ2hhbmdlUGVnIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2lkdGg9XFxcIjI1XFxcIiB0ZXh0PVxcXCLwn5S1XFxcIiB0YXA9XFxcInt7IG9uQ2hhbmdlUGVnIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJHdWVzc1xcXCIgdGFwPVxcXCJ7eyBvbkd1ZXNzIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB2aXNpYmlsaXR5PVxcXCJ7eyBpc0NoZWF0ZXJNb2RlRW5hYmxlZCA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZScgfX1cXFwiIGlkPVxcXCJzb2x1dGlvblxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTmV3IEdhbWVcXFwiIHRhcD1cXFwie3sgb25OZXdHYW1lIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTY29yZSBCb2FyZFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlUHJlc3NlZCB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiV2FubmEgQ2hlYXQ/XFxcIiB0YXA9XFxcInt7IG9uVG9nZ2xlQ2hlYXRlck1vZGUgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSGludDogXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImhpbnRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJKYXNvbiBMb25zaW5nZXIgLSBpbiBmdWxcXGZsbG1lbnQgb2YgcmVxdWlyZW1lbnRzIGZvciBBc3NpZ25tZW50IDggb2YgQ01TQyA0MjMzIGluIHRoZSBTcHJpbmcgMjAyMCBjb3Vyc2UuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbiAgICA8L1BhZ2U+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlL21haW4tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG5jb25zdCBTZWxlY3RlZFBhZ2VTZXJ2aWNlID0gcmVxdWlyZShcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIik7XG5jb25zdCBPYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuY29uc3QgRnJhbWUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKS5GcmFtZTtcbmNvbnN0IEZpbGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKS5GaWxlO1xuY29uc3QgZnMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTtcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5jb25zdCBTb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmQta2FrXCIpO1xuY29uc3QgdmlldyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uXCIpLnZpZXc7XG5jb25zdCBUb29sVGlwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b29sdGlwXCIpLlRvb2xUaXA7XG5cbmNvbnN0IG5ld0dhbWVTb3VuZCA9IFNvdW5kLmNyZWF0ZShmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcihcInNvdW5kc1wiKS5wYXRoK1wiL1VJX1F1aXJreTEubXAzXCIpO1xuY29uc3QgY2hhbmdlUGVnU291bmQgPSBTb3VuZC5jcmVhdGUoZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGb2xkZXIoXCJzb3VuZHNcIikucGF0aCtcIi9VSV9RdWlya3lfNTIubXAzXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVWaWV3TW9kZWwoKSB7XG5cdFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJtYWluLXBhZ2VcIik7XG5cblx0Y29uc3Qgdmlld01vZGVsID0gT2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcblx0XHR0dXRvcmlhbDogZmFsc2UsXG5cdFx0Z3Vlc3NDb3VudDogMCwgLy90aGUgbnVtYmVyIG9mIGd1ZXNzZXMgZm9ybSAxLTEyXG5cdFx0aXNDaGVhdGVyTW9kZUVuYWJsZWQ6IGZhbHNlLCAvL2ZsYWcgZm9yIHNob3dpbmcgdGhlIHNvbHV0aW9uIGZvciBjaGVhdGVyc1xuXHRcdC8vZGVmdWFsdCBhcnJheSBvZiBwZWdzIGZvciBwbGF5aW5nIHRoZSBnYW1lXG5cdFx0cGVnczogW1xuXHRcdFx0eyBuYW1lOiBcImJsdWVcIiwgY2hhcmFjdGVyOiBcIvCflLVcIn0sXG5cdFx0XHR7IG5hbWU6IFwiYmxhY2tcIiwgY2hhcmFjdGVyOiBcIuKaq1wifSxcblx0XHRcdHsgbmFtZTogXCJ3aGl0ZVwiLCBjaGFyYWN0ZXI6IFwi4pqqXCJ9LFxuXHRcdFx0eyBuYW1lOiBcInJlZFwiLCBjaGFyYWN0ZXI6IFwi8J+UtFwifSxcblx0XHRcdHsgbmFtZTogXCJibHVlLWFuZC13aGl0ZVwiLCBjaGFyYWN0ZXI6IFwi4o+677iPXCJ9LFxuXHRcdFx0eyBuYW1lOiBcImhvbGxvdy1yZWRcIiwgY2hhcmFjdGVyOiBcIuKtlVwifVxuXHRcdF0sXG5cdFx0Z2FtZXM6IG5ldyBBcnJheSgpLCAvL2NvbnRhaW5lciBmb3Igb2xkIGdhbWVzXG5cdFx0Y29kZTogbmV3IEFycmF5KCksIC8vY29udGFpbmVyIGZvciB0aGUgc29sdXRpb25cblx0XHQvL2NyZWF0ZSBjb2RlIGZvciBwbGF5ZXIgdG8gc29sdmVcblx0XHRjcmVhdGVDb2RlOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgc29sdXRpb24gPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwic29sdXRpb25cIik7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdGxldCBwZWcgPSB0aGlzLnBlZ3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMucGVncy5sZW5ndGgpXTtcblx0XHRcdFx0dGhpcy5jb2RlLnB1c2gocGVnKTtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHRsYWJlbC50ZXh0ID0gcGVnLm5hbWUrXCI6IFwiK3BlZy5jaGFyYWN0ZXIrXCIgXCI7XG5cdFx0XHRcdHNvbHV0aW9uLmFkZENoaWxkKGxhYmVsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vY3JlYXRlcyBhIHJvdyBvZiBwZWdzIGZvciB0aGUgcGxheWVyIHRvIGNoYW5nZSBlYWNoIGd1ZXNzXG5cdFx0Y3JlYXRlUm93OiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHQvL2NyZWF0ZSBuZXcgcGVncyBhbmQgZ3Vlc3MgYnV0dG9uXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRsZXQgc3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTtcblx0XHRcdHN0YWNrLmlkID0gXCJwZWdzXCI7XG5cdFx0XHRzdGFjay5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbigpO1xuXHRcdFx0XHRidXR0b24udGV4dCA9IFwi8J+UtVwiO1xuXHRcdFx0XHRidXR0b24ud2lkdGggPSAyNTtcblx0XHRcdFx0YnV0dG9uLm9uKFwidGFwXCIsIHRoaXMub25DaGFuZ2VQZWcsIHRoaXMpO1xuXHRcdFx0XHRzdGFjay5hZGRDaGlsZChidXR0b24pO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGd1ZXNzQnV0dG9uID0gbmV3IEJ1dHRvbigpO1xuXHRcdFx0Z3Vlc3NCdXR0b24udGV4dCA9IFwiR3Vlc3NcIjtcblx0XHRcdGd1ZXNzQnV0dG9uLm9uKFwidGFwXCIsIHRoaXMub25HdWVzcywgdGhpcyk7XG5cdFx0XHRcblx0XHRcdGJvYXJkLmFkZENoaWxkKHN0YWNrKTtcblx0XHRcdGJvYXJkLmFkZENoaWxkKGd1ZXNzQnV0dG9uKTtcblx0XHR9LFxuXHRcdC8vdG9nZ2xlcyBjaGVhdGVyIG1vZGUgdG8gb24gYW5kIG9mZlxuXHRcdG9uVG9nZ2xlQ2hlYXRlck1vZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZCA9ICF0aGlzLmlzQ2hlYXRlck1vZGVFbmFibGVkO1xuXHRcdH0sXG5cdFx0Ly93aGVuIHRoZSBwYWdlIGxvYWRzIGNyZWF0ZSBhIG5ldyBnYW1lIGFuZCBnZXQgZ3Vlc3NDb3VudFxuXHRcdG9uTG9hZDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJJUyBUVVRPUklBTDpcIit0aGlzLnR1dG9yaWFsKTtcblx0XHRcdGlmKHRoaXMuY29kZS5sZW5ndGggIT09IDApIHJldHVybjsgLy9pZiBubyBjb2RlIHRoZW4gcmV0dXJuXG5cdFx0XHRcblx0XHRcdC8vd2hlbiB0aGUgYXBwIGlzIHN0YXJ0ZWQgY3JlYXRlIGZpcnN0IGNvZGUgdG8gc29sdmVcblx0XHRcdHRoaXMuY29kZSA9IGdsb2JhbC5jb2RlOyAvL3Jlc3RvcmUgY3VycmVudCBjb2RlIHRvIHNvbHZlXG5cdFx0XHRpZihnbG9iYWwuZmlyc3RSdW4pIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVDb2RlKGFyZ3MpO1xuXHRcdFx0XHRnbG9iYWwuZmlyc3RSdW4gPSBmYWxzZTtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb2RlKVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQgPSBnbG9iYWwuZ3Vlc3NDb3VudDsgLy9yZXN0b3JlIHRoZSBndWVzcyBjb3VudFxuXHRcdFx0XG5cdFx0XHQvLyBwcmV2ZW50cyBjcmFzaCBvbiBmaXJzdCBsb2FkXG5cdFx0XHQvLyBpZih0eXBlb2YoZ2xvYmFsLmdhbWVzKSA9PT0gdHlwZW9mKHt9KSAmJiBPYmplY3Qua2V5cyhnbG9iYWwuZ2FtZXMpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHQvLyBcdGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0dGhpcy5nYW1lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiKSk7IC8vcmVzdG9yZSBnYW1lIGhpc3Rvcnlcblx0XHRcdHRoaXMub25OZXdHYW1lKGFyZ3MpO1xuXHRcdFx0aWYodGhpcy50dXRvcmlhbCkgdGhpcy5TdGFydFdhbGt0aHJvdWdoKGFyZ3MpO1xuXHRcdH0sXG5cdFx0Ly9nbyB0byB0aGUgc2NvcmUgYm9hcmQgcGFnZVxuXHRcdG9uU2NvcmVQcmVzc2VkOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRnbG9iYWwuZ3Vlc3NDb3VudCA9IHRoaXMuZ3Vlc3NDb3VudCAvL3NhdmUgZ3Vlc3MgY291bnRcblx0XHRcdGdsb2JhbC5nYW1lcyA9IHRoaXMuZ2FtZXM7IC8vc2F2ZSBnYW1lIGhpc3Rvcnlcblx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nYW1lcykpO1xuXHRcdFx0RnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcblx0XHRcdFx0bW9kdWxlTmFtZTogXCJzY29yZS1wYWdlL3Njb3JlLXBhZ2VcIixcblx0XHRcdFx0Y29udGV4dDoge1xuXHRcdFx0XHRcdGdhbWVzOiB0aGlzLmdhbWVzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly9jcmVhdGVzIHRoZSBoaW50IGZvciB0aGUgcGxheWVycyBjdXJyZW50IGd1ZXNzXG5cdFx0Z2l2ZUhpbnQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBoaW50ID0gYXJncy5wYWdlLmdldFZpZXdCeUlkKFwiaGludFwiKTsgLy93aGVyZSB0aGUgaGludCB3aWxsIGJlIHN0b3JlZFxuXHRcdFx0aGludC5yZW1vdmVDaGlsZHJlbigpOyAvL2NsZWFyIHByZXZpb3VzIGhpbnRcblxuXHRcdFx0bGV0IHBlZ0FyciA9IGFyZ3MucGVnQXJyOyAvL3BsYXllcnMgZ3Vlc3Ncblx0XHRcdGxldCBjb2RlQXJyID0gbmV3IEFycmF5KCk7IC8vYXJyYXkgdG8gc3RvcmUgdGhlIHJpZ2h0IHNvbHV0aW9uIHdpdGhvdXQgdGhlIGpzb24gZGF0YVxuXHRcdFx0dGhpcy5jb2RlLmZvckVhY2gocGVnID0+IHsgY29kZUFyci5wdXNoKHBlZy5jaGFyYWN0ZXIpOyB9KTsgLy9tYWtlIG5ldyBhcnJheSB3aXRob3V0IGpzb24gZGF0YVxuXG5cdFx0XHRsZXQgaGludEFyciA9IG5ldyBBcnJheSg0KTsgLy9hcnJheSB3aGVyZSBoaW50cyB3aWxsIGJlIHN0b3JlZFxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHBlZ0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0Ly9jb3JyZWN0IGNvbG9yIGFuZCBwb3NpdGlvblxuXHRcdFx0XHRpZihwZWdBcnJbaV0gPT0gY29kZUFycltpXSkgbGFiZWwudGV4dCA9IFwiUG9zaXRpb24gXCIrKGkrMSkrXCI6IFwiK2NvZGVBcnJbaV0rXCItPiByaWdodCBjb2xvciByaWdodCBwb3NpdGlvblwiO1xuXHRcdFx0XHQvL2NvcnJlY3QgY29sb3Igd3JvbmcgcG9zaXRpb25cblx0XHRcdFx0ZWxzZSBpZihjb2RlQXJyLmluY2x1ZGVzKHBlZ0FycltpXSkpIHtcblx0XHRcdFx0XHRsYWJlbC50ZXh0ID0gXCJQb3NpdGlvbiBcIisoaSsxKStcIjogXCIrcGVnQXJyW2ldK1wiLT4gcmlnaHQgY29sb3Igd3JvbmcgcG9zaXRpb25cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRoaW50QXJyW2ldID0gbGFiZWw7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBoaW50U3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTsgLy9zdG9yZXMgdGhlIGhpbnRzIGZvciB0aGUgcGxheWVyXG5cdFx0XHRsZXQgZ3Vlc3NTdGFjayA9IG5ldyBTdGFja0xheW91dCgpOyAvL3N0b3JlcyB0aGUgdXNlcnMgbW9zdCByZWNlbnQgZ3Vlc3Ncblx0XHRcdGd1ZXNzU3RhY2sub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblx0XHRcdFxuXHRcdFx0bGV0IGd1ZXNzID0gbmV3IExhYmVsKCk7IC8vZGlzcGxheSB0aGUgcGxheWVycyBndWVzc1xuXHRcdFx0Z3Vlc3MudGV4dCA9IFwiWW91ciBHdWVzczogXCI7XG5cdFx0XHRndWVzc1N0YWNrLmFkZENoaWxkKGd1ZXNzKTtcblxuXHRcdFx0Ly9wYXJzZSBwbGF5ZXJzIGd1ZXNzIGFuZCBjcmVhdGUgeG1sIGZvciBpdFxuXHRcdFx0cGVnQXJyLmZvckVhY2gocGVnID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocGVnKTtcblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdGxhYmVsLnRleHQgPSBwZWc7XG5cdFx0XHRcdGd1ZXNzU3RhY2suYWRkQ2hpbGQobGFiZWwpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vYWRkIHRoZSBoaW50cyBmb3JtIGhpbnRBcnIgdG8gaGludFN0YWNrXG5cdFx0XHRoaW50QXJyLmZvckVhY2gocGVnSGludCA9PiB7XG5cdFx0XHRcdGhpbnRTdGFjay5hZGRDaGlsZChwZWdIaW50KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRoaW50LmFkZENoaWxkKGd1ZXNzU3RhY2spOyAvL2FkZCBwbGF5ZXJzIGN1cnJlbnQgZ3Vlc3Ncblx0XHRcdGhpbnQuYWRkQ2hpbGQoaGludFN0YWNrKTsgLy9hZGQgaGludCBmb3IgdGhlIHBsYXllclxuXHRcdH0sXG5cdFx0Ly9zdWJtaXQgYSBndWVzc1xuXHRcdG9uR3Vlc3M6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBidXR0b24gPSBhcmdzLm9iamVjdDtcblx0XHRcdGxldCBwZWdzID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInBlZ3NcIik7XG5cdFx0XHRwZWdzLmlkID0gXCJcIjtcblx0XHRcdHRoaXMuZ3Vlc3NDb3VudCsrO1xuXG5cdFx0XHQvL2Rpc2FibGUgZWFjaCBwZWcgYW5kIGFkZCB0byBhcnJheVxuXHRcdFx0bGV0IHBlZ0FyciA9IG5ldyBBcnJheSgpO1xuXHRcdFx0cGVncy5lYWNoQ2hpbGQoZnVuY3Rpb24oY2hpbGQpIHtcblx0XHRcdFx0cGVnQXJyLnB1c2goY2hpbGQudGV4dCk7XG5cdFx0XHRcdGNoaWxkLmlzRW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vY2hlY2sgaWYgcGxheWVyIHdvblxuXHRcdFx0bGV0IHdvbiA9IHRydWU7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHBlZ0FycltpXSAhPSB0aGlzLmNvZGVbaV0uY2hhcmFjdGVyKSB3b24gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9jaGVjayB3aW4gYW5kIGxvc2UgY29uZGl0aW9uc1xuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0bGV0IGN1cnJlbnRCb2FyZCA9IG5ldyBBcnJheSgpOyAvL3VzZWQgdG8gY29weSBjdXJyZW50IHdpbm5pbmcgYm9hcmRcblx0XHRcdGxldCBjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7IC8vdXNlZCB0byBnZXQgZWFjaCByb3cgb2YgY3VycmVudCBib2FyZFxuXHRcdFx0aWYod29uKSB7XG5cdFx0XHRcdGN1cnJlbnRCb2FyZCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRib2FyZC5lYWNoQ2hpbGQoc3RhY2sgPT4ge1xuXHRcdFx0XHRcdGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0XHRzdGFjay5lYWNoQ2hpbGQoYnV0dG9uID0+IHtcblx0XHRcdFx0XHRcdGN1cnJlbnRSb3cucHVzaChidXR0b24udGV4dCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y3VycmVudEJvYXJkLnB1c2goY3VycmVudFJvdyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCBjdXJyZW50R2FtZSA9IHsgYm9hcmQ6IGN1cnJlbnRCb2FyZCwgZ3Vlc3NDb3VudDogdGhpcy5ndWVzc0NvdW50LCBpc1dpbjogdHJ1ZSwgc29sdXRpb246IHRoaXMuY29kZSB9OyBcblx0XHRcdFx0aWYodGhpcy5nYW1lcy5sZW5ndGggPT0gNSkge1xuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcblx0XHRcdFx0XHRcdGlmKHRoaXMuZ2FtZXNbaV0uZ3Vlc3NDb3VudCA+IGN1cnJlbnRHYW1lLmd1ZXNzQ291bnQpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5nYW1lc1tpXSA9IGN1cnJlbnRHYW1lO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgdGhpcy5nYW1lcy5wdXNoKGN1cnJlbnRHYW1lKTtcblx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmd1ZXNzQ291bnQgPCAxMikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVJvdyhhcmdzKTsgLy9jcmVhdGUgbmV3IHJvdyBmb3IgaW5wdXR0aW5nIGEgZ3Vlc3Ncblx0XHRcdFx0dGhpcy5naXZlSGludCh7IHBlZ0FycjogcGVnQXJyLCBwYWdlOiBhcmdzLm9iamVjdC5wYWdlIH0pOyAvL2NyZWF0ZXMgdGhlIGhpbnQgZm9yIHRoZSBwbGF5ZXJcblx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGJvYXJkLmVhY2hDaGlsZChzdGFjayA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdHN0YWNrLmVhY2hDaGlsZChidXR0b24gPT4ge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKGJ1dHRvbi50ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjdXJyZW50Qm9hcmQucHVzaChjdXJyZW50Um93KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2coY3VycmVudEJvYXJkKTtcblx0XHRcdFx0dGhpcy5nYW1lcy5wdXNoKHsgYm9hcmQ6IHRoaXMuY3VycmVudEJvYXJkLCBndWVzc0NvdW50OiAxMiwgaXNXaW46IGZhbHNlLCBzb2x1dGlvbjogdGhpcy5jb2RlIH0pO1xuXHRcdFx0XG5cdFx0XHR9XG5cblx0XHRcdC8vcmVtb3ZlIGN1cnJlbnQgZ3Vlc3MgYnV0dG9uXG5cdFx0XHRidXR0b24ucGFyZW50LnJlbW92ZUNoaWxkKGJ1dHRvbik7XG5cdFx0fSxcblx0XHQvL2NoYW5nZSB3aGljaCBjb2xvciBhIHBlZyBidXR0b24gaXNcblx0XHRvbkNoYW5nZVBlZzogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGVncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZih0aGlzLnBlZ3NbaV0uY2hhcmFjdGVyID09IGJ1dHRvbi50ZXh0KSAge1xuXHRcdFx0XHRcdGJ1dHRvbi50ZXh0ID0gdGhpcy5wZWdzWyhpKzEpJXRoaXMucGVncy5sZW5ndGhdLmNoYXJhY3Rlcjtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMucGVnc1soaSsxKSV0aGlzLnBlZ3MubGVuZ3RoXS5uYW1lKTtcblx0XHRcdFx0XHRjaGFuZ2VQZWdTb3VuZC5wbGF5KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL2NyZWF0ZSBhIG5ldyBnYW1lXG5cdFx0b25OZXdHYW1lOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHQvL3JlbW92ZSBhbGwgcGVncyBmcm9tIGNoZWF0ZXIgaGludFxuXHRcdFx0bGV0IHNvbHV0aW9uID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInNvbHV0aW9uXCIpO1xuXHRcdFx0c29sdXRpb24ucmVtb3ZlQ2hpbGRyZW4oKTtcblx0XHRcdFxuXHRcdFx0Ly9nZW5lcmF0ZSBhIG5ldyBjb2RlIGZvciB0aGUgcGxheWVyIHRvIGZpbmRcblx0XHRcdHRoaXMuY29kZSA9IG5ldyBBcnJheSgpO1xuXHRcdFx0dGhpcy5jcmVhdGVDb2RlKGFyZ3MpO1xuXHRcdFx0XG5cdFx0XHQvL3Jlc2V0IHZhcnMgdG8gZGVmYXVsdFxuXHRcdFx0dGhpcy5ndWVzc0NvdW50ID0gMDtcblx0XHRcdGdsb2JhbC5ndWVzc0NvdW50ID0gMDtcblx0XHRcdGdsb2JhbC5jb2RlID0gbmV3IEFycmF5KCk7XG5cdFx0XHRnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcblx0XHRcdHRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdFxuXHRcdFx0Ly9yZW1vdmUgYWxsIHBlZ3MgZm9ybSBib2FyZFxuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0Ym9hcmQucmVtb3ZlQ2hpbGRyZW4oKTtcblxuXHRcdFx0Ly9jbGVhciBoaW50XG5cdFx0XHRsZXQgaGludCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJoaW50XCIpO1xuXHRcdFx0aGludC5yZW1vdmVDaGlsZHJlbigpO1xuXG5cdFx0XHQvL2NyZWF0ZSB0aGUgZmlyc3Qgc2xvdFxuXHRcdFx0dGhpcy5jcmVhdGVSb3coYXJncyk7XG5cdFx0XHRuZXdHYW1lU291bmQucGxheSgpO1xuXG5cdFx0fSxcblx0XHRTdGFydFdhbGt0aHJvdWdoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRjb25zdCB0aXAgPSBuZXcgVG9vbFRpcChhcmdzLm9iamVjdCwge1xuXHRcdFx0XHR0ZXh0OiBcInRleHQgdGhpbmdcIixcblx0XHRcdFx0cG9zaXRpb246IFwiYm90dG9tXCIsXG5cdFx0XHRcdGhpZGVBcnJvdzogZmFsc2UsXG5cdFx0XHRcdHRleHRDb2xvcjogXCJibGFja1wiLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxuXHRcdFx0XHRzdHlsZTogXCJDdXN0b21Ub29sVGlwTGF5b3V0U3R5bGVcIixcblx0XHRcdFx0d2lkdGg6NDAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB2aWV3TW9kZWw7XG59XG5cbmV4cG9ydHMuY3JlYXRlVmlld01vZGVsID0gY3JlYXRlVmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS9tYWluLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiKTtcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5jb25zdCBMYWJlbCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIpLkxhYmVsO1xuY29uc3QgQnV0dG9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpLkJ1dHRvbjtcbmNvbnN0IFN0YWNrTGF5b3V0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIikuU3RhY2tMYXlvdXQ7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcbiAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwic2NvcmUtcGFnZVwiKTtcblxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IE9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgICAgIHNjb3Jlczoge30sXG4gICAgICAgIG9uTG9hZGVkOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiKSk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNjb3JlQm9hcmQoYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xlYXJTY29yZUJvYXJkOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAvL2FwcFNldHRpbmdzLnNldFN0cmluZyhcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICAgICAgICAgIGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSkxFXCIpOyBcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlU2NvcmVCb2FyZDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgbGV0IHNjb3JlQm9hcmQgPSBhcmdzLm9iamVjdC5nZXRWaWV3QnlJZChcInNjb3JlQm9hcmRcIik7IC8vdGhlIHNjb3JlIGJvYXJkXG4gICAgICAgICAgICBzY29yZUJvYXJkLnJlbW92ZUNoaWxkcmVuKCk7IC8vcmVtb3ZlIHByZXZpb3VzIHNjb3JlIGJvYXJkIGluZm9cblxuICAgICAgICAgICAgdGhpcy5zY29yZXMuZm9yRWFjaChmdW5jdGlvbihib2FyZCl7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ2FtZSA9IG5ldyBTdGFja0xheW91dCgpOyAvL2NvbnRhaW5zIHRoZSBib2FyZCBzdGF0dXNcbiAgICAgICAgICAgICAgICBsZXQgaXNXaW4gPSBuZXcgTGFiZWwoKTtcbiAgICAgICAgICAgICAgICBpc1dpbi50ZXh0ID0gXCJXaW5uZXI6IFwiK2JvYXJkLmlzV2luO1xuICAgICAgICAgICAgICAgIGxldCBndWVzc0NvdW50ID0gbmV3IExhYmVsKCk7XG4gICAgICAgICAgICAgICAgZ3Vlc3NDb3VudC50ZXh0ID0gXCJHdWVzcyBDb3VudDogXCIrYm9hcmQuZ3Vlc3NDb3VudDtcbiAgICAgICAgICAgICAgICBnYW1lLmFkZENoaWxkKGlzV2luKTtcbiAgICAgICAgICAgICAgICBnYW1lLmFkZENoaWxkKGd1ZXNzQ291bnQpO1xuXG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmQuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vcm93cyBmb3IgYSBzaW5nbGUgZ2FtZVxuICAgICAgICAgICAgICAgICAgICBzdGFjay5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbihwZWcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gbmV3IExhYmVsKCk7IC8vZWFjaCBwZWcgY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLnRleHQgPSBwZWc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5hZGRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYWRkQ2hpbGQoc3RhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG5ldyBMYWJlbCgpO1xuICAgICAgICAgICAgICAgIHNlcGFyYXRvci50ZXh0ID0gXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xcblwiO1xuICAgICAgICAgICAgICAgIHNjb3JlQm9hcmQuYWRkQ2hpbGQoZ2FtZSk7XG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZC5hZGRDaGlsZChzZXBhcmF0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3Njb3JlLXBhZ2Utdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5jb25zdCBGaWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIikuRmlsZTtcblxuXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgY3JlYXRlVmlld01vZGVsKCk7XG5cbiAgICBjb25zdCBkYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcbiAgICAvL3BhZ2UuYmluZGluZ0NvbnRleHQuc2V0KFwic2NvcmVzXCIsIGRhdGEuZ2FtZXMpO1xufVxuXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWRlZCB9fVxcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNjb3JlIEJvYXJkXFxcIiBpY29uPVxcXCJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcInNjb3JlQm9hcmRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJDbGVhciBTY29yZSBCb2FyZFxcXCIgdGFwPVxcXCJ7eyBvbkNsZWFyU2NvcmVCb2FyZCB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IHsgQmVoYXZpb3JTdWJqZWN0IH0gPSByZXF1aXJlKFwicnhqc1wiKTtcblxuZnVuY3Rpb24gU2VsZWN0ZWRQYWdlU2VydmljZSgpIHtcbiAgICBpZiAoU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy5cIik7XG4gICAgfVxuXG4gICAgLy8gT2JzZXJ2YWJsZSBzZWxlY3RlZFBhZ2Ugc291cmNlXG4gICAgdGhpcy5fc2VsZWN0ZWRQYWdlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdChcIkhvbWVcIik7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkUGFnZSBzdHJlYW1cbiAgICB0aGlzLnNlbGVjdGVkUGFnZSQgPSB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZSA9IGZ1bmN0aW9uKHNlbGVjdGVkUGFnZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UubmV4dChzZWxlY3RlZFBhZ2UpO1xuICAgIH07XG59XG5cblNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlO1xufTtcblxuU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UgPSBuZXcgU2VsZWN0ZWRQYWdlU2VydmljZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGVkUGFnZVNlcnZpY2U7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==