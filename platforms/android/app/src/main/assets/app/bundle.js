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
        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
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
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        const application = __webpack_require__("tns-core-modules/application");
const appSettings = __webpack_require__("tns-core-modules/application-settings");


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

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("tns-core-modules/data/observable").Observable;
const SelectedPageService = __webpack_require__("./shared/selected-page-service.js");
const ObservableModule = __webpack_require__("tns-core-modules/data/observable");
const Label = __webpack_require__("tns-core-modules/ui/label").Label;
const Button = __webpack_require__("tns-core-modules/ui/button").Button;
const StackLayout = __webpack_require__("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const appSettings = __webpack_require__("tns-core-modules/application-settings");
const Frame = __webpack_require__("tns-core-modules/ui/frame").Frame;
const File = __webpack_require__("tns-core-modules/file-system/file-system").File;
const fs = __webpack_require__("tns-core-modules/file-system/file-system");
const Sound = __webpack_require__("../node_modules/nativescript-sound-kak/sound.js");
const observableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;

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
                    tutorial: true
                }
			});
        },
        onStartGame: function(args) {
            Frame.topmost().navigate({
                moduleName: "main-page/main-page",
                context: {
                    tutorial: false
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

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("tns-core-modules/application");
const createViewModel = __webpack_require__("./intro-page/intro-page-view-model.js").createViewModel;
const File = __webpack_require__("tns-core-modules/file-system/file-system").File;


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
module.exports = "<Page \r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \r\n    navigatingTo=\"onNavigatingTo\"\r\n    loaded=\"{{ onLoad }}\">\r\n    <ActionBar title=\"Intro Screen\" icon=\"\"></ActionBar>\r\n\r\n    <ScrollView>\r\n        <StackLayout>\r\n            <Label text=\"Application Image:\"></Label>\r\n            <Label text=\"🎲\" fontSize=\"64\"></Label>\r\n            <Label text=\"Jason Lonsinger - in fulfi\fllment of requirements for Assignment 9 of CMSC 4233 in the Spring 2020 course.\" textWrap=\"true\"></Label>\r\n            <Button text=\"Start Game\" tap=\"{{ onStartGame }}\"></Button>\r\n            <Button text=\"Walk Through\" tap=\"{{ onStartTutorial }}\"></Button>\r\n            <Button text=\"Score Board\" tap=\"{{ onScoreBoard }}\"></Button>\r\n        </StackLayout>\r\n    </ScrollView>\r\n</Page>\r\n"; 
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

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("tns-core-modules/application");
const createViewModel = __webpack_require__("./main-page/main-view-model.js").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

    const data = page.navigationContext;
    page.bindingContext.set("tutorial", data.tutorial);

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

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("tns-core-modules/data/observable").Observable;
const SelectedPageService = __webpack_require__("./shared/selected-page-service.js");
const ObservableModule = __webpack_require__("tns-core-modules/data/observable");
const Frame = __webpack_require__("tns-core-modules/ui/frame").Frame;
const File = __webpack_require__("tns-core-modules/file-system/file-system").File;
const fs = __webpack_require__("tns-core-modules/file-system/file-system");
const Label = __webpack_require__("tns-core-modules/ui/label").Label;
const Button = __webpack_require__("tns-core-modules/ui/button").Button;
const StackLayout = __webpack_require__("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const appSettings = __webpack_require__("tns-core-modules/application-settings");
const Sound = __webpack_require__("../node_modules/nativescript-sound-kak/sound.js");
// const ToolTip = require("nativescript-tooltip").ToolTip;
// const tip = new ToolTip(view,{text:"Some Text",backgroundColor:"pink",textColor:"black"});

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
		games: JSON.parse(appSettings.getString("data")), //container for old games
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
			
			//prevents crash on first load
			// if(typeof(global.games) === typeof({}) && Object.keys(global.games).length == 0) {
			// 	global.games = new Array();
			// }
			// this.games = global.games; //restore game history
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

/***/ }),

/***/ "./score-page/score-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("tns-core-modules/application");
const createViewModel = __webpack_require__("./score-page/score-page-view-model.js").createViewModel;
const File = __webpack_require__("tns-core-modules/file-system/file-system").File;


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
module.exports = "<Page \r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \r\n    navigatingTo=\"onNavigatingTo\"\r\n    loaded=\"{{ onLoaded }}\">\r\n    <ActionBar title=\"Score Board\" icon=\"\"></ActionBar>\r\n\r\n    <ScrollView>\r\n        <StackLayout>\r\n            <StackLayout id=\"scoreBoard\"></StackLayout>\r\n            <Button text=\"Clear Score Board\" tap=\"{{ onClearScoreBoard }}\"></Button>\r\n        </StackLayout>\r\n    </ScrollView>\r\n</Page>\r\n"; 
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

/* WEBPACK VAR INJECTION */(function(global) {const { BehaviorSubject } = __webpack_require__("rxjs");

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

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/application-settings":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application-settings");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/file-system/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system/file-system");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL2ludHJvLXBhZ2UvaW50cm8tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UueG1sIiwid2VicGFjazovLy8uL21haW4tcGFnZS9tYWluLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0o7Ozs7Ozs7O0FDbENBLDZF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Qzs7Ozs7Ozs7QUNSQSxxREFBTyxrQkFBa0IsR0FBRyxtQkFBTyxDQUFDLE1BQU07O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsNERBQTREO0FBQ3ZGLEtBQUs7QUFDTCxDOzs7Ozs7OztBQ2hDQSxpQzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsa0U7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsbUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLXZpZXctbW9kZWwuanNcIjogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UuanNcIjogXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS5qc1wiLFxuXHRcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLnhtbFwiOiBcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi1wYWdlL21haW4tcGFnZS5qc1wiOiBcIi4vbWFpbi1wYWdlL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlL21haW4tcGFnZS54bWxcIjogXCIuL21haW4tcGFnZS9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qc1wiOiBcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS5qc1wiOiBcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCIsXG5cdFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UueG1sXCI6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UueG1sXCIsXG5cdFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCI6IFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJpbnRyby1wYWdlL2ludHJvLXBhZ2VcXFwiPlxcbjwvRnJhbWU+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLXJvb3QueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vYXBwLXJvb3QueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGUgXFxuTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL25hdGl2ZXNjcmlwdC90aGVtZVxcblRoZSBpbXBvcnRlZCBDU1MgcnVsZXMgbXVzdCBwcmVjZWRlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcy5cXG5cIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcblRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLiBcIn0se1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBjaGFuZ2VzIHRoZSBmb250IHNpemUgb2YgYWxsIEJ1dHRvbnMgdGhhdCBoYXZlIHRoZVxcblxcXCItcHJpbWFyeVxcXCIgY2xhc3MgbW9kaWZpZXIuXFxuXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgIGxldCBhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybS5hbmRyb2lkICYmICFnbG9iYWxbXCJfX3NuYXBzaG90XCJdKSB7XG4gICAgICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5cbmdsb2JhbC5maXJzdFJ1biA9IHRydWU7XG5nbG9iYWwuZ3Vlc3NDb3VudCA9IDA7XG5nbG9iYWwuY29kZSA9IG5ldyBBcnJheSgpO1xuZ2xvYmFsLmdhbWVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkYXRhXCIsXCJ7fVwiKSk7XG5cbmFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6IFwiYXBwLXJvb3RcIiB9KTtcblxuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAiLCJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XHJcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiKTtcclxuY29uc3QgT2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcclxuY29uc3QgTGFiZWwgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKS5MYWJlbDtcclxuY29uc3QgQnV0dG9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpLkJ1dHRvbjtcclxuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcclxuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuY29uc3QgRnJhbWUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKS5GcmFtZTtcclxuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIik7XHJcbmNvbnN0IFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZC1rYWtcIik7XHJcbmNvbnN0IG9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVWaWV3TW9kZWwoKSB7XHJcbiAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiaW50cm8tcGFnZVwiKTtcclxuXHJcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBPYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xyXG4gICAgICAgIGdhbWVzOiBuZXcgQXJyYXkoKSxcclxuICAgICAgICBvbkxvYWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgLy9wcmV2ZW50cyBjcmFzaCBvbiBmaXJzdCBsb2FkXHJcblx0XHRcdGlmKHR5cGVvZihnbG9iYWwuZ2FtZXMpID09PSB0eXBlb2Yoe30pICYmIE9iamVjdC5rZXlzKGdsb2JhbC5nYW1lcykubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmdhbWVzID0gZ2xvYmFsLmdhbWVzOyAvL3Jlc3RvcmUgZ2FtZSBoaXN0b3J5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN0YXJ0VHV0b3JpYWw6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFpbi1wYWdlL21haW4tcGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR1dG9yaWFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdGFydEdhbWU6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwibWFpbi1wYWdlL21haW4tcGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR1dG9yaWFsOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2NvcmVCb2FyZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xyXG5cdFx0XHRcdG1vZHVsZU5hbWU6IFwic2NvcmUtcGFnZS9zY29yZS1wYWdlXCIsXHJcblx0XHRcdFx0Y29udGV4dDoge1xyXG5cdFx0XHRcdFx0Z2FtZXM6IHRoaXMuZ2FtZXNcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB2aWV3TW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydHMuY3JlYXRlVmlld01vZGVsID0gY3JlYXRlVmlld01vZGVsOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2ludHJvLXBhZ2UvaW50cm8tcGFnZS12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgYXBwID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XHJcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2ludHJvLXBhZ2Utdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XHJcbmNvbnN0IEZpbGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKS5GaWxlO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgY3JlYXRlVmlld01vZGVsKCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbzs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcclxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXHJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXHJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWQgfX1cXFwiPlxcclxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJJbnRybyBTY3JlZW5cXFwiIGljb249XFxcIlxcXCI+PC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuICAgIDxTY3JvbGxWaWV3PlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBcHBsaWNhdGlvbiBJbWFnZTpcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIvCfjrJcXFwiIGZvbnRTaXplPVxcXCI2NFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSmFzb24gTG9uc2luZ2VyIC0gaW4gZnVsZmlcXGZsbG1lbnQgb2YgcmVxdWlyZW1lbnRzIGZvciBBc3NpZ25tZW50IDkgb2YgQ01TQyA0MjMzIGluIHRoZSBTcHJpbmcgMjAyMCBjb3Vyc2UuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlN0YXJ0IEdhbWVcXFwiIHRhcD1cXFwie3sgb25TdGFydEdhbWUgfX1cXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiV2FsayBUaHJvdWdoXFxcIiB0YXA9XFxcInt7IG9uU3RhcnRUdXRvcmlhbCB9fVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTY29yZSBCb2FyZFxcXCIgdGFwPVxcXCJ7eyBvblNjb3JlQm9hcmQgfX1cXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPC9TY3JvbGxWaWV3PlxcclxcbjwvUGFnZT5cXHJcXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9pbnRyby1wYWdlL2ludHJvLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vaW50cm8tcGFnZS9pbnRyby1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmNvbnN0IGNyZWF0ZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL21haW4tdmlldy1tb2RlbFwiKS5jcmVhdGVWaWV3TW9kZWw7XG5cbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBjcmVhdGVWaWV3TW9kZWwoKTtcblxuICAgIGNvbnN0IGRhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQuc2V0KFwidHV0b3JpYWxcIiwgZGF0YS50dXRvcmlhbCk7XG5cbn1cblxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS9tYWluLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWQgfX1cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyAnR3Vlc3MgQ291bnQ6ICcgKyAgZ3Vlc3NDb3VudCB9fVxcXCIgaWNvbj1cXFwiXFxcIj48L0FjdGlvbkJhcj5cXG5cXG4gICAgPFNjcm9sbFZpZXc+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJib2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwicGVnc1xcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMjVcXFwiIHRleHQ9XFxcIvCflLVcXFwiIHRhcD1cXFwie3sgb25DaGFuZ2VQZWcgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkd1ZXNzXFxcIiB0YXA9XFxcInt7IG9uR3Vlc3MgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHZpc2liaWxpdHk9XFxcInt7IGlzQ2hlYXRlck1vZGVFbmFibGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJyB9fVxcXCIgaWQ9XFxcInNvbHV0aW9uXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJOZXcgR2FtZVxcXCIgdGFwPVxcXCJ7eyBvbk5ld0dhbWUgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNjb3JlIEJvYXJkXFxcIiB0YXA9XFxcInt7IG9uU2NvcmVQcmVzc2VkIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJXYW5uYSBDaGVhdD9cXFwiIHRhcD1cXFwie3sgb25Ub2dnbGVDaGVhdGVyTW9kZSB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIaW50OiBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiaGludFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkphc29uIExvbnNpbmdlciAtIGluIGZ1bFxcZmxsbWVudCBvZiByZXF1aXJlbWVudHMgZm9yIEFzc2lnbm1lbnQgOCBvZiBDTVNDIDQyMzMgaW4gdGhlIFNwcmluZyAyMDIwIGNvdXJzZS5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuICAgIDwvUGFnZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UvbWFpbi1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL21haW4tcGFnZS9tYWluLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiKTtcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5jb25zdCBGcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpLkZyYW1lO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuY29uc3QgTGFiZWwgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKS5MYWJlbDtcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XG5jb25zdCBTdGFja0xheW91dCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpLlN0YWNrTGF5b3V0O1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmNvbnN0IFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZC1rYWtcIik7XG4vLyBjb25zdCBUb29sVGlwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b29sdGlwXCIpLlRvb2xUaXA7XG4vLyBjb25zdCB0aXAgPSBuZXcgVG9vbFRpcCh2aWV3LHt0ZXh0OlwiU29tZSBUZXh0XCIsYmFja2dyb3VuZENvbG9yOlwicGlua1wiLHRleHRDb2xvcjpcImJsYWNrXCJ9KTtcblxuY29uc3QgbmV3R2FtZVNvdW5kID0gU291bmQuY3JlYXRlKGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKFwic291bmRzXCIpLnBhdGgrXCIvVUlfUXVpcmt5MS5tcDNcIik7XG5jb25zdCBjaGFuZ2VQZWdTb3VuZCA9IFNvdW5kLmNyZWF0ZShmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcihcInNvdW5kc1wiKS5wYXRoK1wiL1VJX1F1aXJreV81Mi5tcDNcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcblx0U2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIm1haW4tcGFnZVwiKTtcblxuXHRjb25zdCB2aWV3TW9kZWwgPSBPYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuXHRcdHR1dG9yaWFsOiBmYWxzZSxcblx0XHRndWVzc0NvdW50OiAwLCAvL3RoZSBudW1iZXIgb2YgZ3Vlc3NlcyBmb3JtIDEtMTJcblx0XHRpc0NoZWF0ZXJNb2RlRW5hYmxlZDogZmFsc2UsIC8vZmxhZyBmb3Igc2hvd2luZyB0aGUgc29sdXRpb24gZm9yIGNoZWF0ZXJzXG5cdFx0Ly9kZWZ1YWx0IGFycmF5IG9mIHBlZ3MgZm9yIHBsYXlpbmcgdGhlIGdhbWVcblx0XHRwZWdzOiBbXG5cdFx0XHR7IG5hbWU6IFwiYmx1ZVwiLCBjaGFyYWN0ZXI6IFwi8J+UtVwifSxcblx0XHRcdHsgbmFtZTogXCJibGFja1wiLCBjaGFyYWN0ZXI6IFwi4pqrXCJ9LFxuXHRcdFx0eyBuYW1lOiBcIndoaXRlXCIsIGNoYXJhY3RlcjogXCLimqpcIn0sXG5cdFx0XHR7IG5hbWU6IFwicmVkXCIsIGNoYXJhY3RlcjogXCLwn5S0XCJ9LFxuXHRcdFx0eyBuYW1lOiBcImJsdWUtYW5kLXdoaXRlXCIsIGNoYXJhY3RlcjogXCLij7rvuI9cIn0sXG5cdFx0XHR7IG5hbWU6IFwiaG9sbG93LXJlZFwiLCBjaGFyYWN0ZXI6IFwi4q2VXCJ9XG5cdFx0XSxcblx0XHRnYW1lczogSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkYXRhXCIpKSwgLy9jb250YWluZXIgZm9yIG9sZCBnYW1lc1xuXHRcdGNvZGU6IG5ldyBBcnJheSgpLCAvL2NvbnRhaW5lciBmb3IgdGhlIHNvbHV0aW9uXG5cdFx0Ly9jcmVhdGUgY29kZSBmb3IgcGxheWVyIHRvIHNvbHZlXG5cdFx0Y3JlYXRlQ29kZTogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IHNvbHV0aW9uID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInNvbHV0aW9uXCIpO1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRsZXQgcGVnID0gdGhpcy5wZWdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnBlZ3MubGVuZ3RoKV07XG5cdFx0XHRcdHRoaXMuY29kZS5wdXNoKHBlZyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0bGFiZWwudGV4dCA9IHBlZy5uYW1lK1wiOiBcIitwZWcuY2hhcmFjdGVyK1wiIFwiO1xuXHRcdFx0XHRzb2x1dGlvbi5hZGRDaGlsZChsYWJlbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL2NyZWF0ZXMgYSByb3cgb2YgcGVncyBmb3IgdGhlIHBsYXllciB0byBjaGFuZ2UgZWFjaCBndWVzc1xuXHRcdGNyZWF0ZVJvdzogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Ly9jcmVhdGUgbmV3IHBlZ3MgYW5kIGd1ZXNzIGJ1dHRvblxuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0bGV0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7XG5cdFx0XHRzdGFjay5pZCA9IFwicGVnc1wiO1xuXHRcdFx0c3RhY2sub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0bGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcblx0XHRcdFx0YnV0dG9uLnRleHQgPSBcIvCflLVcIjtcblx0XHRcdFx0YnV0dG9uLndpZHRoID0gMjU7XG5cdFx0XHRcdGJ1dHRvbi5vbihcInRhcFwiLCB0aGlzLm9uQ2hhbmdlUGVnLCB0aGlzKTtcblx0XHRcdFx0c3RhY2suYWRkQ2hpbGQoYnV0dG9uKTtcblx0XHRcdH1cblx0XHRcdGxldCBndWVzc0J1dHRvbiA9IG5ldyBCdXR0b24oKTtcblx0XHRcdGd1ZXNzQnV0dG9uLnRleHQgPSBcIkd1ZXNzXCI7XG5cdFx0XHRndWVzc0J1dHRvbi5vbihcInRhcFwiLCB0aGlzLm9uR3Vlc3MsIHRoaXMpO1xuXHRcdFx0XG5cdFx0XHRib2FyZC5hZGRDaGlsZChzdGFjayk7XG5cdFx0XHRib2FyZC5hZGRDaGlsZChndWVzc0J1dHRvbik7XG5cdFx0fSxcblx0XHQvL3RvZ2dsZXMgY2hlYXRlciBtb2RlIHRvIG9uIGFuZCBvZmZcblx0XHRvblRvZ2dsZUNoZWF0ZXJNb2RlOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQgPSAhdGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZDtcblx0XHR9LFxuXHRcdC8vd2hlbiB0aGUgcGFnZSBsb2FkcyBjcmVhdGUgYSBuZXcgZ2FtZSBhbmQgZ2V0IGd1ZXNzQ291bnRcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiSVMgVFVUT1JJQUw6XCIrdGhpcy50dXRvcmlhbCk7XG5cdFx0XHRpZih0aGlzLmNvZGUubGVuZ3RoICE9PSAwKSByZXR1cm47IC8vaWYgbm8gY29kZSB0aGVuIHJldHVyblxuXHRcdFx0XG5cdFx0XHQvL3doZW4gdGhlIGFwcCBpcyBzdGFydGVkIGNyZWF0ZSBmaXJzdCBjb2RlIHRvIHNvbHZlXG5cdFx0XHR0aGlzLmNvZGUgPSBnbG9iYWwuY29kZTsgLy9yZXN0b3JlIGN1cnJlbnQgY29kZSB0byBzb2x2ZVxuXHRcdFx0aWYoZ2xvYmFsLmZpcnN0UnVuKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlQ29kZShhcmdzKTtcblx0XHRcdFx0Z2xvYmFsLmZpcnN0UnVuID0gZmFsc2U7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY29kZSlcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ndWVzc0NvdW50ID0gZ2xvYmFsLmd1ZXNzQ291bnQ7IC8vcmVzdG9yZSB0aGUgZ3Vlc3MgY291bnRcblx0XHRcdFxuXHRcdFx0Ly9wcmV2ZW50cyBjcmFzaCBvbiBmaXJzdCBsb2FkXG5cdFx0XHQvLyBpZih0eXBlb2YoZ2xvYmFsLmdhbWVzKSA9PT0gdHlwZW9mKHt9KSAmJiBPYmplY3Qua2V5cyhnbG9iYWwuZ2FtZXMpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHQvLyBcdGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0Ly8gdGhpcy5nYW1lcyA9IGdsb2JhbC5nYW1lczsgLy9yZXN0b3JlIGdhbWUgaGlzdG9yeVxuXHRcdFx0dGhpcy5vbk5ld0dhbWUoYXJncyk7XG5cdFx0XHRpZih0aGlzLnR1dG9yaWFsKSB0aGlzLlN0YXJ0V2Fsa3Rocm91Z2goYXJncyk7XG5cdFx0fSxcblx0XHQvL2dvIHRvIHRoZSBzY29yZSBib2FyZCBwYWdlXG5cdFx0b25TY29yZVByZXNzZWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGdsb2JhbC5ndWVzc0NvdW50ID0gdGhpcy5ndWVzc0NvdW50IC8vc2F2ZSBndWVzcyBjb3VudFxuXHRcdFx0Z2xvYmFsLmdhbWVzID0gdGhpcy5nYW1lczsgLy9zYXZlIGdhbWUgaGlzdG9yeVxuXHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdhbWVzKSk7XG5cdFx0XHRGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuXHRcdFx0XHRtb2R1bGVOYW1lOiBcInNjb3JlLXBhZ2Uvc2NvcmUtcGFnZVwiLFxuXHRcdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdFx0Z2FtZXM6IHRoaXMuZ2FtZXNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvL2NyZWF0ZXMgdGhlIGhpbnQgZm9yIHRoZSBwbGF5ZXJzIGN1cnJlbnQgZ3Vlc3Ncblx0XHRnaXZlSGludDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGhpbnQgPSBhcmdzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJoaW50XCIpOyAvL3doZXJlIHRoZSBoaW50IHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRoaW50LnJlbW92ZUNoaWxkcmVuKCk7IC8vY2xlYXIgcHJldmlvdXMgaGludFxuXG5cdFx0XHRsZXQgcGVnQXJyID0gYXJncy5wZWdBcnI7IC8vcGxheWVycyBndWVzc1xuXHRcdFx0bGV0IGNvZGVBcnIgPSBuZXcgQXJyYXkoKTsgLy9hcnJheSB0byBzdG9yZSB0aGUgcmlnaHQgc29sdXRpb24gd2l0aG91dCB0aGUganNvbiBkYXRhXG5cdFx0XHR0aGlzLmNvZGUuZm9yRWFjaChwZWcgPT4geyBjb2RlQXJyLnB1c2gocGVnLmNoYXJhY3Rlcik7IH0pOyAvL21ha2UgbmV3IGFycmF5IHdpdGhvdXQganNvbiBkYXRhXG5cblx0XHRcdGxldCBoaW50QXJyID0gbmV3IEFycmF5KDQpOyAvL2FycmF5IHdoZXJlIGhpbnRzIHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcGVnQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHQvL2NvcnJlY3QgY29sb3IgYW5kIHBvc2l0aW9uXG5cdFx0XHRcdGlmKHBlZ0FycltpXSA9PSBjb2RlQXJyW2ldKSBsYWJlbC50ZXh0ID0gXCJQb3NpdGlvbiBcIisoaSsxKStcIjogXCIrY29kZUFycltpXStcIi0+IHJpZ2h0IGNvbG9yIHJpZ2h0IHBvc2l0aW9uXCI7XG5cdFx0XHRcdC8vY29ycmVjdCBjb2xvciB3cm9uZyBwb3NpdGlvblxuXHRcdFx0XHRlbHNlIGlmKGNvZGVBcnIuaW5jbHVkZXMocGVnQXJyW2ldKSkge1xuXHRcdFx0XHRcdGxhYmVsLnRleHQgPSBcIlBvc2l0aW9uIFwiKyhpKzEpK1wiOiBcIitwZWdBcnJbaV0rXCItPiByaWdodCBjb2xvciB3cm9uZyBwb3NpdGlvblwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhpbnRBcnJbaV0gPSBsYWJlbDtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGhpbnRTdGFjayA9IG5ldyBTdGFja0xheW91dCgpOyAvL3N0b3JlcyB0aGUgaGludHMgZm9yIHRoZSBwbGF5ZXJcblx0XHRcdGxldCBndWVzc1N0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vc3RvcmVzIHRoZSB1c2VycyBtb3N0IHJlY2VudCBndWVzc1xuXHRcdFx0Z3Vlc3NTdGFjay5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXHRcdFx0XG5cdFx0XHRsZXQgZ3Vlc3MgPSBuZXcgTGFiZWwoKTsgLy9kaXNwbGF5IHRoZSBwbGF5ZXJzIGd1ZXNzXG5cdFx0XHRndWVzcy50ZXh0ID0gXCJZb3VyIEd1ZXNzOiBcIjtcblx0XHRcdGd1ZXNzU3RhY2suYWRkQ2hpbGQoZ3Vlc3MpO1xuXG5cdFx0XHQvL3BhcnNlIHBsYXllcnMgZ3Vlc3MgYW5kIGNyZWF0ZSB4bWwgZm9yIGl0XG5cdFx0XHRwZWdBcnIuZm9yRWFjaChwZWcgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhwZWcpO1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0bGFiZWwudGV4dCA9IHBlZztcblx0XHRcdFx0Z3Vlc3NTdGFjay5hZGRDaGlsZChsYWJlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9hZGQgdGhlIGhpbnRzIGZvcm0gaGludEFyciB0byBoaW50U3RhY2tcblx0XHRcdGhpbnRBcnIuZm9yRWFjaChwZWdIaW50ID0+IHtcblx0XHRcdFx0aGludFN0YWNrLmFkZENoaWxkKHBlZ0hpbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGhpbnQuYWRkQ2hpbGQoZ3Vlc3NTdGFjayk7IC8vYWRkIHBsYXllcnMgY3VycmVudCBndWVzc1xuXHRcdFx0aGludC5hZGRDaGlsZChoaW50U3RhY2spOyAvL2FkZCBoaW50IGZvciB0aGUgcGxheWVyXG5cdFx0fSxcblx0XHQvL3N1Ym1pdCBhIGd1ZXNzXG5cdFx0b25HdWVzczogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuXHRcdFx0bGV0IHBlZ3MgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwicGVnc1wiKTtcblx0XHRcdHBlZ3MuaWQgPSBcIlwiO1xuXHRcdFx0dGhpcy5ndWVzc0NvdW50Kys7XG5cblx0XHRcdC8vZGlzYWJsZSBlYWNoIHBlZyBhbmQgYWRkIHRvIGFycmF5XG5cdFx0XHRsZXQgcGVnQXJyID0gbmV3IEFycmF5KCk7XG5cdFx0XHRwZWdzLmVhY2hDaGlsZChmdW5jdGlvbihjaGlsZCkge1xuXHRcdFx0XHRwZWdBcnIucHVzaChjaGlsZC50ZXh0KTtcblx0XHRcdFx0Y2hpbGQuaXNFbmFibGVkID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9jaGVjayBpZiBwbGF5ZXIgd29uXG5cdFx0XHRsZXQgd29uID0gdHJ1ZTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYocGVnQXJyW2ldICE9IHRoaXMuY29kZVtpXS5jaGFyYWN0ZXIpIHdvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2NoZWNrIHdpbiBhbmQgbG9zZSBjb25kaXRpb25zXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRsZXQgY3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7IC8vdXNlZCB0byBjb3B5IGN1cnJlbnQgd2lubmluZyBib2FyZFxuXHRcdFx0bGV0IGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTsgLy91c2VkIHRvIGdldCBlYWNoIHJvdyBvZiBjdXJyZW50IGJvYXJkXG5cdFx0XHRpZih3b24pIHtcblx0XHRcdFx0Y3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGJvYXJkLmVhY2hDaGlsZChzdGFjayA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdHN0YWNrLmVhY2hDaGlsZChidXR0b24gPT4ge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKGJ1dHRvbi50ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjdXJyZW50Qm9hcmQucHVzaChjdXJyZW50Um93KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IGN1cnJlbnRHYW1lID0geyBib2FyZDogY3VycmVudEJvYXJkLCBndWVzc0NvdW50OiB0aGlzLmd1ZXNzQ291bnQsIGlzV2luOiB0cnVlLCBzb2x1dGlvbjogdGhpcy5jb2RlIH07IFxuXHRcdFx0XHRpZih0aGlzLmdhbWVzLmxlbmd0aCA9PSA1KSB7XG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYodGhpcy5nYW1lc1tpXS5ndWVzc0NvdW50ID4gY3VycmVudEdhbWUuZ3Vlc3NDb3VudCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdhbWVzW2ldID0gY3VycmVudEdhbWU7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB0aGlzLmdhbWVzLnB1c2goY3VycmVudEdhbWUpO1xuXHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZ3Vlc3NDb3VudCA8IDEyKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlUm93KGFyZ3MpOyAvL2NyZWF0ZSBuZXcgcm93IGZvciBpbnB1dHRpbmcgYSBndWVzc1xuXHRcdFx0XHR0aGlzLmdpdmVIaW50KHsgcGVnQXJyOiBwZWdBcnIsIHBhZ2U6IGFyZ3Mub2JqZWN0LnBhZ2UgfSk7IC8vY3JlYXRlcyB0aGUgaGludCBmb3IgdGhlIHBsYXllclxuXHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50Qm9hcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0Ym9hcmQuZWFjaENoaWxkKHN0YWNrID0+IHtcblx0XHRcdFx0XHRjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0c3RhY2suZWFjaENoaWxkKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Um93LnB1c2goYnV0dG9uLnRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGN1cnJlbnRCb2FyZC5wdXNoKGN1cnJlbnRSb3cpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmQpO1xuXHRcdFx0XHR0aGlzLmdhbWVzLnB1c2goeyBib2FyZDogdGhpcy5jdXJyZW50Qm9hcmQsIGd1ZXNzQ291bnQ6IDEyLCBpc1dpbjogZmFsc2UsIHNvbHV0aW9uOiB0aGlzLmNvZGUgfSk7XG5cdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0Ly9yZW1vdmUgY3VycmVudCBndWVzcyBidXR0b25cblx0XHRcdGJ1dHRvbi5wYXJlbnQucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcblx0XHR9LFxuXHRcdC8vY2hhbmdlIHdoaWNoIGNvbG9yIGEgcGVnIGJ1dHRvbiBpc1xuXHRcdG9uQ2hhbmdlUGVnOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgYnV0dG9uID0gYXJncy5vYmplY3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wZWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMucGVnc1tpXS5jaGFyYWN0ZXIgPT0gYnV0dG9uLnRleHQpICB7XG5cdFx0XHRcdFx0YnV0dG9uLnRleHQgPSB0aGlzLnBlZ3NbKGkrMSkldGhpcy5wZWdzLmxlbmd0aF0uY2hhcmFjdGVyO1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2codGhpcy5wZWdzWyhpKzEpJXRoaXMucGVncy5sZW5ndGhdLm5hbWUpO1xuXHRcdFx0XHRcdGNoYW5nZVBlZ1NvdW5kLnBsYXkoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vY3JlYXRlIGEgbmV3IGdhbWVcblx0XHRvbk5ld0dhbWU6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdC8vcmVtb3ZlIGFsbCBwZWdzIGZyb20gY2hlYXRlciBoaW50XG5cdFx0XHRsZXQgc29sdXRpb24gPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwic29sdXRpb25cIik7XG5cdFx0XHRzb2x1dGlvbi5yZW1vdmVDaGlsZHJlbigpO1xuXHRcdFx0XG5cdFx0XHQvL2dlbmVyYXRlIGEgbmV3IGNvZGUgZm9yIHRoZSBwbGF5ZXIgdG8gZmluZFxuXHRcdFx0dGhpcy5jb2RlID0gbmV3IEFycmF5KCk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNvZGUoYXJncyk7XG5cdFx0XHRcblx0XHRcdC8vcmVzZXQgdmFycyB0byBkZWZhdWx0XG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQgPSAwO1xuXHRcdFx0Z2xvYmFsLmd1ZXNzQ291bnQgPSAwO1xuXHRcdFx0Z2xvYmFsLmNvZGUgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0dGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0XG5cdFx0XHQvL3JlbW92ZSBhbGwgcGVncyBmb3JtIGJvYXJkXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRib2FyZC5yZW1vdmVDaGlsZHJlbigpO1xuXG5cdFx0XHQvL2NsZWFyIGhpbnRcblx0XHRcdGxldCBoaW50ID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImhpbnRcIik7XG5cdFx0XHRoaW50LnJlbW92ZUNoaWxkcmVuKCk7XG5cblx0XHRcdC8vY3JlYXRlIHRoZSBmaXJzdCBzbG90XG5cdFx0XHR0aGlzLmNyZWF0ZVJvdyhhcmdzKTtcblx0XHRcdG5ld0dhbWVTb3VuZC5wbGF5KCk7XG5cblx0XHR9LFxuXHRcdFN0YXJ0V2Fsa3Rocm91Z2g6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdFxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tcGFnZS9tYWluLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xyXG5jb25zdCBTZWxlY3RlZFBhZ2VTZXJ2aWNlID0gcmVxdWlyZShcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIik7XHJcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XHJcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XHJcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XHJcbmNvbnN0IFN0YWNrTGF5b3V0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIikuU3RhY2tMYXlvdXQ7XHJcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVmlld01vZGVsKCkge1xyXG4gICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcInNjb3JlLXBhZ2VcIik7XHJcblxyXG4gICAgY29uc3Qgdmlld01vZGVsID0gT2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcclxuICAgICAgICBzY29yZXM6IHt9LFxyXG4gICAgICAgIG9uTG9hZGVkOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkYXRhXCIpKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTY29yZUJvYXJkKGFyZ3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGVhclNjb3JlQm9hcmQ6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgLy9hcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHt9KSk7XHJcbiAgICAgICAgICAgIGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNKTEVcIik7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlU2NvcmVCb2FyZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBsZXQgc2NvcmVCb2FyZCA9IGFyZ3Mub2JqZWN0LmdldFZpZXdCeUlkKFwic2NvcmVCb2FyZFwiKTsgLy90aGUgc2NvcmUgYm9hcmRcclxuICAgICAgICAgICAgc2NvcmVCb2FyZC5yZW1vdmVDaGlsZHJlbigpOyAvL3JlbW92ZSBwcmV2aW91cyBzY29yZSBib2FyZCBpbmZvXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjb3Jlcy5mb3JFYWNoKGZ1bmN0aW9uKGJvYXJkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZSA9IG5ldyBTdGFja0xheW91dCgpOyAvL2NvbnRhaW5zIHRoZSBib2FyZCBzdGF0dXNcclxuICAgICAgICAgICAgICAgIGxldCBpc1dpbiA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgaXNXaW4udGV4dCA9IFwiV2lubmVyOiBcIitib2FyZC5pc1dpbjtcclxuICAgICAgICAgICAgICAgIGxldCBndWVzc0NvdW50ID0gbmV3IExhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICBndWVzc0NvdW50LnRleHQgPSBcIkd1ZXNzIENvdW50OiBcIitib2FyZC5ndWVzc0NvdW50O1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5hZGRDaGlsZChpc1dpbik7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmFkZENoaWxkKGd1ZXNzQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvYXJkLmJvYXJkLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vcm93cyBmb3IgYSBzaW5nbGUgZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbihwZWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTsgLy9lYWNoIHBlZyBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0ID0gcGVnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5hZGRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYWRkQ2hpbGQoc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yLnRleHQgPSBcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXFxuXCI7XHJcbiAgICAgICAgICAgICAgICBzY29yZUJvYXJkLmFkZENoaWxkKGdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZC5hZGRDaGlsZChzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xyXG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zY29yZS1wYWdlLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xyXG5jb25zdCBGaWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIikuRmlsZTtcclxuXHJcblxyXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IGNyZWF0ZVZpZXdNb2RlbCgpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xyXG4gICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0LnNldChcInNjb3Jlc1wiLCBkYXRhLmdhbWVzKTtcclxufVxyXG5cclxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xyXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcclxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXHJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXHJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWRlZCB9fVxcXCI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNjb3JlIEJvYXJkXFxcIiBpY29uPVxcXCJcXFwiPjwvQWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8U2Nyb2xsVmlldz5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcInNjb3JlQm9hcmRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJDbGVhciBTY29yZSBCb2FyZFxcXCIgdGFwPVxcXCJ7eyBvbkNsZWFyU2NvcmVCb2FyZCB9fVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1Njcm9sbFZpZXc+XFxyXFxuPC9QYWdlPlxcclxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IHsgQmVoYXZpb3JTdWJqZWN0IH0gPSByZXF1aXJlKFwicnhqc1wiKTtcblxuZnVuY3Rpb24gU2VsZWN0ZWRQYWdlU2VydmljZSgpIHtcbiAgICBpZiAoU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy5cIik7XG4gICAgfVxuXG4gICAgLy8gT2JzZXJ2YWJsZSBzZWxlY3RlZFBhZ2Ugc291cmNlXG4gICAgdGhpcy5fc2VsZWN0ZWRQYWdlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdChcIkhvbWVcIik7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkUGFnZSBzdHJlYW1cbiAgICB0aGlzLnNlbGVjdGVkUGFnZSQgPSB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZSA9IGZ1bmN0aW9uKHNlbGVjdGVkUGFnZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UubmV4dChzZWxlY3RlZFBhZ2UpO1xuICAgIH07XG59XG5cblNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlO1xufTtcblxuU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UgPSBuZXcgU2VsZWN0ZWRQYWdlU2VydmljZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGVkUGFnZVNlcnZpY2U7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9