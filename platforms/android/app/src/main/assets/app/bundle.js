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
	"./main-page.js": "./main-page.js",
	"./main-page.xml": "./main-page.xml",
	"./main-view-model.js": "./main-view-model.js",
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
module.exports = "<Frame defaultPage=\"main-page\">\n</Frame>\n"; 
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

/***/ "./main-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const app = __webpack_require__("tns-core-modules/application");
const createViewModel = __webpack_require__("./main-view-model.js").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

}

exports.onNavigatingTo = onNavigatingTo;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"onNavigatingTo\"\n    loaded=\"{{ onLoad }}\">\n    <ActionBar title=\"{{ 'Guess Count: ' +  guessCount }}\" icon=\"\"></ActionBar>\n\n    <ScrollView>\n\n        <StackLayout>\n            <StackLayout id=\"board\">\n                <StackLayout id=\"pegs\" orientation=\"horizontal\">\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                    <Button width=\"25\" text=\"🔵\" tap=\"{{ onChangePeg }}\"></Button>\n                </StackLayout>\n                <Button text=\"Guess\" tap=\"{{ onGuess }}\"></Button>\n            </StackLayout>\n            <StackLayout visibility=\"{{ isCheaterModeEnabled ? 'visible' : 'collapse' }}\" id=\"solution\" orientation=\"horizontal\"></StackLayout>\n            <StackLayout  orientation=\"horizontal\">\n                <Button text=\"New Game\" tap=\"{{ onNewGame }}\"></Button>\n                <Button text=\"Score Board\" tap=\"{{ onScorePressed }}\"></Button>\n                <Button text=\"Wanna Cheat?\" tap=\"{{ onToggleCheaterMode }}\"></Button>\n            </StackLayout>\n            <StackLayout>\n                <Label text=\"Hint: \"></Label>\n                <StackLayout id=\"hint\"></StackLayout>\n                <Label text=\"Jason Lonsinger - in ful\fllment of requirements for Assignment 8 of CMSC 4233 in the Spring 2020 course.\" textWrap=\"true\"></Label>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n    </Page>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./main-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("tns-core-modules/data/observable").Observable;
const SelectedPageService = __webpack_require__("./shared/selected-page-service.js");
const ObservableModule = __webpack_require__("tns-core-modules/data/observable");
const Frame = __webpack_require__("tns-core-modules/ui/frame").Frame;
const File = __webpack_require__("tns-core-modules/file-system/file-system").File;
const Label = __webpack_require__("tns-core-modules/ui/label").Label;
const Button = __webpack_require__("tns-core-modules/ui/button").Button;
const StackLayout = __webpack_require__("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const appSettings = __webpack_require__("tns-core-modules/application-settings");

function createViewModel() {
	SelectedPageService.getInstance().updateSelectedPage("main-page");

	const viewModel = ObservableModule.fromObject({
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
			if(typeof(global.games) === typeof({}) && Object.keys(global.games).length == 0) {
				global.games = new Array();
			}
			this.games = global.games; //restore game history
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

		},
	});

	return viewModel;
}

exports.createViewModel = createViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./main-view-model.js" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UueG1sIiwid2VicGFjazovLy8uL21haW4tdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKOzs7Ozs7OztBQy9CQSxpRTtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlDQUF5QztBQUNwRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNSQSwrR0FBaUUsbUJBQU8sQ0FBQyxrREFBa0M7QUFDM0csZ0VBQWdFLG1CQUFPLENBQUMsa0RBQWtDO0FBQzFHLG9FQUFvRSxtQkFBTyxDQUFDLHFEQUFxQztBQUNqSCxtRUFBbUUsbUJBQU8sQ0FBQyxxREFBcUMsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsa2pCQUFrakIsRUFBRSxpRUFBaUUsRUFBRSxvRUFBb0UsRUFBRSwySkFBMkosRUFBRSx5SUFBeUksRUFBRSwrREFBK0QseURBQXlELEVBQUUsd0I7QUFDaHhDLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RCxLQUFLO0FBQ0wsQzs7Ozs7Ozs7O0FDVEEsdUNBQXVDLG1CQUFPLENBQUMsOEJBQThCO0FBQzdFO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLDJCQUEyQjtBQUMvQyxtQkFBTyxDQUFDLG9DQUFvQztBQUM1Qzs7O0FBR0EsWUFBWSxtQkFBTyxDQUFDLDBFQUF1RDs7O0FBRzNFLFlBQVksSUFBVTtBQUN0Qiw4QkFBOEIsbUJBQU8sQ0FBQyx1REFBOEI7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGFBQWEsS0FBSztBQUM1RDtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0pBQStIO0FBQzNKO0FBQ0EsZ0JBQWdCLElBQVU7QUFDMUIscUQ7QUFDQSxtRkFBbUYsUUFBUyxRO0FBQzVGLGlCQUFpQjtBQUNqQjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsc0NBQXNDO0FBQ3RELDRCQUE0QixtQkFBTyxDQUFDLDhCQUE4QjtBQUNsRSxvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBdUM7OztBQUduRTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFELGlCQUFpQix5QkFBeUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RCxLQUFLO0FBQ0wsQzs7Ozs7Ozs7Ozs7O0FDOURBLDBEQUFZLG1CQUFPLENBQUMsOEJBQThCO0FBQ2xELHdCQUF3QixtQkFBTyxDQUFDLHNCQUFtQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlDQUF5QztBQUNwRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7O0FDaEJBLHNJQUFzSSxVQUFVLDhCQUE4QixpQ0FBaUMsbVBBQW1QLGVBQWUsMkVBQTJFLGVBQWUsMkVBQTJFLGVBQWUsMkVBQTJFLGVBQWUsNkZBQTZGLFdBQVcsa0ZBQWtGLGlEQUFpRCx1S0FBdUssYUFBYSxtRUFBbUUsa0JBQWtCLG9FQUFvRSx1QkFBdUIsMmE7QUFDOXlDLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDBDQUEwQztBQUNyRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNSQSxpRUFBbUIsbUJBQU8sQ0FBQyxrQ0FBa0M7QUFDN0QsNEJBQTRCLG1CQUFPLENBQUMsbUNBQWdDO0FBQ3BFLHlCQUF5QixtQkFBTyxDQUFDLGtDQUFrQztBQUNuRSxjQUFjLG1CQUFPLENBQUMsMkJBQTJCO0FBQ2pELGFBQWEsbUJBQU8sQ0FBQywwQ0FBMEM7QUFDL0QsY0FBYyxtQkFBTyxDQUFDLDJCQUEyQjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNEJBQTRCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLDBDQUEwQztBQUN0RSxvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBdUM7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksOEJBQThCO0FBQ2xDLElBQUkseUNBQXlDO0FBQzdDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDOztBQUV2QztBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLHlCQUF5Qjs7QUFFekIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw2QkFBNkIsNkJBQTZCLEVBQUUsRUFBRTs7QUFFOUQsOEJBQThCO0FBQzlCLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEM7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7O0FBRUwsdUJBQXVCLHNGO0FBQ3ZCO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QixtQkFBbUIseUNBQXlDLEVBQUU7O0FBRTlELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFCQUFxQiw4RUFBOEU7O0FBRW5HOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLCtDQUErQztBQUMxRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNwUUEsaUVBQW1CLG1CQUFPLENBQUMsa0NBQWtDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLG1DQUFpQztBQUNyRSx5QkFBeUIsbUJBQU8sQ0FBQyxrQ0FBa0M7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLDJCQUEyQjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNEJBQTRCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLDBDQUEwQztBQUN0RSxvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBdUM7OztBQUduRTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUVBQW1FO0FBQ25FLHdDQUF3Qzs7QUFFeEM7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsZ0VBQWdFO0FBQzNGLEtBQUs7QUFDTCxDOzs7Ozs7OztBQ3RFQSwwREFBWSxtQkFBTyxDQUFDLDhCQUE4QjtBQUNsRCx3QkFBd0IsbUJBQU8sQ0FBQyx1Q0FBeUI7QUFDekQsYUFBYSxtQkFBTyxDQUFDLDBDQUEwQzs7O0FBRy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIscURBQXFEO0FBQ2hGLEtBQUs7QUFDTCxDOzs7Ozs7Ozs7QUNwQkEsNElBQTRJLFlBQVksMk9BQTJPLHFCQUFxQiw0RTtBQUN4WixJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixzREFBc0Q7QUFDakYsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDUkEscURBQU8sa0JBQWtCLEdBQUcsbUJBQU8sQ0FBQyxNQUFNOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDREQUE0RDtBQUN2RixLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNoQ0EsaUM7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGtFOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9tYWluLXBhZ2UuanNcIjogXCIuL21haW4tcGFnZS5qc1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCI6IFwiLi9tYWluLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS12aWV3LW1vZGVsLmpzXCI6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCI6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UuanNcIixcblx0XCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS54bWxcIjogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS54bWxcIixcblx0XCIuL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanNcIjogXCIuL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCI+XFxuPC9GcmFtZT5cXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uQ2hlY2tQbGF0Zm9ybSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgICAgICBpZiAoYXBwbGljYXRpb25DaGVja1BsYXRmb3JtLmFuZHJvaWQgJiYgIWdsb2JhbFtcIl9fc25hcHNob3RcIl0pIHtcbiAgICAgICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xucmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBMaXZlU3luY1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGhvdCB1cGRhdGVzIGFyZSBhcHBsaWVkLCBhc2sgdGhlIG1vZHVsZXMgdG8gYXBwbHkgdGhlIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gaW5pdGlhbCBhcHAgc3RhcnRcbiAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKSg/PCFcXC5cXC9cXGJ0ZXN0c1xcYlxcLy4qPylcXC4oeG1sfGNzc3xqc3woPzwhXFwuZFxcLil0c3woPzwhXFxiX1tcXHctXSpcXC4pc2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJITVI6IEFjY2VwdCBtb2R1bGUgJ1wiICsgY29udGV4dC5pZCArIFwiJyBmcm9tICdcIiArIG1vZHVsZS5pZCArIFwiJ1wiKTsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cblxuZ2xvYmFsLmZpcnN0UnVuID0gdHJ1ZTtcbmdsb2JhbC5ndWVzc0NvdW50ID0gMDtcbmdsb2JhbC5jb2RlID0gbmV3IEFycmF5KCk7XG5nbG9iYWwuZ2FtZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRhdGFcIixcInt9XCIpKTtcblxuYXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogXCJhcHAtcm9vdFwiIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2FwcC5qc1wiIH0pO1xuICAgIH0pO1xufSBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICIsImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuY29uc3QgY3JlYXRlVmlld01vZGVsID0gcmVxdWlyZShcIi4vbWFpbi12aWV3LW1vZGVsXCIpLmNyZWF0ZVZpZXdNb2RlbDtcblxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IGNyZWF0ZVZpZXdNb2RlbCgpO1xuXG59XG5cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIlxcbiAgICBsb2FkZWQ9XFxcInt7IG9uTG9hZCB9fVxcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcInt7ICdHdWVzcyBDb3VudDogJyArICBndWVzc0NvdW50IH19XFxcIiBpY29uPVxcXCJcXFwiPjwvQWN0aW9uQmFyPlxcblxcbiAgICA8U2Nyb2xsVmlldz5cXG5cXG4gICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImJvYXJkXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJwZWdzXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHdpZHRoPVxcXCIyNVxcXCIgdGV4dD1cXFwi8J+UtVxcXCIgdGFwPVxcXCJ7eyBvbkNoYW5nZVBlZyB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHdpZHRoPVxcXCIyNVxcXCIgdGV4dD1cXFwi8J+UtVxcXCIgdGFwPVxcXCJ7eyBvbkNoYW5nZVBlZyB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHdpZHRoPVxcXCIyNVxcXCIgdGV4dD1cXFwi8J+UtVxcXCIgdGFwPVxcXCJ7eyBvbkNoYW5nZVBlZyB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHdpZHRoPVxcXCIyNVxcXCIgdGV4dD1cXFwi8J+UtVxcXCIgdGFwPVxcXCJ7eyBvbkNoYW5nZVBlZyB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiR3Vlc3NcXFwiIHRhcD1cXFwie3sgb25HdWVzcyB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgdmlzaWJpbGl0eT1cXFwie3sgaXNDaGVhdGVyTW9kZUVuYWJsZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnIH19XFxcIiBpZD1cXFwic29sdXRpb25cXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk5ldyBHYW1lXFxcIiB0YXA9XFxcInt7IG9uTmV3R2FtZSB9fVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2NvcmUgQm9hcmRcXFwiIHRhcD1cXFwie3sgb25TY29yZVByZXNzZWQgfX1cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIldhbm5hIENoZWF0P1xcXCIgdGFwPVxcXCJ7eyBvblRvZ2dsZUNoZWF0ZXJNb2RlIH19XFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkhpbnQ6IFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJoaW50XFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSmFzb24gTG9uc2luZ2VyIC0gaW4gZnVsXFxmbGxtZW50IG9mIHJlcXVpcmVtZW50cyBmb3IgQXNzaWdubWVudCA4IG9mIENNU0MgNDIzMyBpbiB0aGUgU3ByaW5nIDIwMjAgY291cnNlLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgPC9QYWdlPlxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xuY29uc3QgT2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmNvbnN0IEZyYW1lID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIikuRnJhbWU7XG5jb25zdCBGaWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIikuRmlsZTtcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcblx0U2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIm1haW4tcGFnZVwiKTtcblxuXHRjb25zdCB2aWV3TW9kZWwgPSBPYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuXHRcdGd1ZXNzQ291bnQ6IDAsIC8vdGhlIG51bWJlciBvZiBndWVzc2VzIGZvcm0gMS0xMlxuXHRcdGlzQ2hlYXRlck1vZGVFbmFibGVkOiBmYWxzZSwgLy9mbGFnIGZvciBzaG93aW5nIHRoZSBzb2x1dGlvbiBmb3IgY2hlYXRlcnNcblx0XHQvL2RlZnVhbHQgYXJyYXkgb2YgcGVncyBmb3IgcGxheWluZyB0aGUgZ2FtZVxuXHRcdHBlZ3M6IFtcblx0XHRcdHsgbmFtZTogXCJibHVlXCIsIGNoYXJhY3RlcjogXCLwn5S1XCJ9LFxuXHRcdFx0eyBuYW1lOiBcImJsYWNrXCIsIGNoYXJhY3RlcjogXCLimqtcIn0sXG5cdFx0XHR7IG5hbWU6IFwid2hpdGVcIiwgY2hhcmFjdGVyOiBcIuKaqlwifSxcblx0XHRcdHsgbmFtZTogXCJyZWRcIiwgY2hhcmFjdGVyOiBcIvCflLRcIn0sXG5cdFx0XHR7IG5hbWU6IFwiYmx1ZS1hbmQtd2hpdGVcIiwgY2hhcmFjdGVyOiBcIuKPuu+4j1wifSxcblx0XHRcdHsgbmFtZTogXCJob2xsb3ctcmVkXCIsIGNoYXJhY3RlcjogXCLirZVcIn1cblx0XHRdLFxuXHRcdGdhbWVzOiBuZXcgQXJyYXkoKSwgLy9jb250YWluZXIgZm9yIG9sZCBnYW1lc1xuXHRcdGNvZGU6IG5ldyBBcnJheSgpLCAvL2NvbnRhaW5lciBmb3IgdGhlIHNvbHV0aW9uXG5cdFx0Ly9jcmVhdGUgY29kZSBmb3IgcGxheWVyIHRvIHNvbHZlXG5cdFx0Y3JlYXRlQ29kZTogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IHNvbHV0aW9uID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInNvbHV0aW9uXCIpO1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRsZXQgcGVnID0gdGhpcy5wZWdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnBlZ3MubGVuZ3RoKV07XG5cdFx0XHRcdHRoaXMuY29kZS5wdXNoKHBlZyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0bGFiZWwudGV4dCA9IHBlZy5uYW1lK1wiOiBcIitwZWcuY2hhcmFjdGVyK1wiIFwiO1xuXHRcdFx0XHRzb2x1dGlvbi5hZGRDaGlsZChsYWJlbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL2NyZWF0ZXMgYSByb3cgb2YgcGVncyBmb3IgdGhlIHBsYXllciB0byBjaGFuZ2UgZWFjaCBndWVzc1xuXHRcdGNyZWF0ZVJvdzogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Ly9jcmVhdGUgbmV3IHBlZ3MgYW5kIGd1ZXNzIGJ1dHRvblxuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0bGV0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7XG5cdFx0XHRzdGFjay5pZCA9IFwicGVnc1wiO1xuXHRcdFx0c3RhY2sub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0bGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcblx0XHRcdFx0YnV0dG9uLnRleHQgPSBcIvCflLVcIjtcblx0XHRcdFx0YnV0dG9uLndpZHRoID0gMjU7XG5cdFx0XHRcdGJ1dHRvbi5vbihcInRhcFwiLCB0aGlzLm9uQ2hhbmdlUGVnLCB0aGlzKTtcblx0XHRcdFx0c3RhY2suYWRkQ2hpbGQoYnV0dG9uKTtcblx0XHRcdH1cblx0XHRcdGxldCBndWVzc0J1dHRvbiA9IG5ldyBCdXR0b24oKTtcblx0XHRcdGd1ZXNzQnV0dG9uLnRleHQgPSBcIkd1ZXNzXCI7XG5cdFx0XHRndWVzc0J1dHRvbi5vbihcInRhcFwiLCB0aGlzLm9uR3Vlc3MsIHRoaXMpO1xuXHRcdFx0XG5cdFx0XHRib2FyZC5hZGRDaGlsZChzdGFjayk7XG5cdFx0XHRib2FyZC5hZGRDaGlsZChndWVzc0J1dHRvbik7XG5cdFx0fSxcblx0XHQvL3RvZ2dsZXMgY2hlYXRlciBtb2RlIHRvIG9uIGFuZCBvZmZcblx0XHRvblRvZ2dsZUNoZWF0ZXJNb2RlOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQgPSAhdGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZDtcblx0XHR9LFxuXHRcdC8vd2hlbiB0aGUgcGFnZSBsb2FkcyBjcmVhdGUgYSBuZXcgZ2FtZSBhbmQgZ2V0IGd1ZXNzQ291bnRcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGlmKHRoaXMuY29kZS5sZW5ndGggIT09IDApIHJldHVybjsgLy9pZiBubyBjb2RlIHRoZW4gcmV0dXJuXG5cdFx0XHRcblx0XHRcdC8vd2hlbiB0aGUgYXBwIGlzIHN0YXJ0ZWQgY3JlYXRlIGZpcnN0IGNvZGUgdG8gc29sdmVcblx0XHRcdHRoaXMuY29kZSA9IGdsb2JhbC5jb2RlOyAvL3Jlc3RvcmUgY3VycmVudCBjb2RlIHRvIHNvbHZlXG5cdFx0XHRpZihnbG9iYWwuZmlyc3RSdW4pIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVDb2RlKGFyZ3MpO1xuXHRcdFx0XHRnbG9iYWwuZmlyc3RSdW4gPSBmYWxzZTtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb2RlKVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQgPSBnbG9iYWwuZ3Vlc3NDb3VudDsgLy9yZXN0b3JlIHRoZSBndWVzcyBjb3VudFxuXHRcdFx0XG5cdFx0XHQvL3ByZXZlbnRzIGNyYXNoIG9uIGZpcnN0IGxvYWRcblx0XHRcdGlmKHR5cGVvZihnbG9iYWwuZ2FtZXMpID09PSB0eXBlb2Yoe30pICYmIE9iamVjdC5rZXlzKGdsb2JhbC5nYW1lcykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0Z2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmdhbWVzID0gZ2xvYmFsLmdhbWVzOyAvL3Jlc3RvcmUgZ2FtZSBoaXN0b3J5XG5cdFx0fSxcblx0XHQvL2dvIHRvIHRoZSBzY29yZSBib2FyZCBwYWdlXG5cdFx0b25TY29yZVByZXNzZWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGdsb2JhbC5ndWVzc0NvdW50ID0gdGhpcy5ndWVzc0NvdW50IC8vc2F2ZSBndWVzcyBjb3VudFxuXHRcdFx0Z2xvYmFsLmdhbWVzID0gdGhpcy5nYW1lczsgLy9zYXZlIGdhbWUgaGlzdG9yeVxuXHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdhbWVzKSk7XG5cdFx0XHRGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuXHRcdFx0XHRtb2R1bGVOYW1lOiBcInNjb3JlLXBhZ2Uvc2NvcmUtcGFnZVwiLFxuXHRcdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdFx0Z2FtZXM6IHRoaXMuZ2FtZXNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvL2NyZWF0ZXMgdGhlIGhpbnQgZm9yIHRoZSBwbGF5ZXJzIGN1cnJlbnQgZ3Vlc3Ncblx0XHRnaXZlSGludDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGhpbnQgPSBhcmdzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJoaW50XCIpOyAvL3doZXJlIHRoZSBoaW50IHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRoaW50LnJlbW92ZUNoaWxkcmVuKCk7IC8vY2xlYXIgcHJldmlvdXMgaGludFxuXG5cdFx0XHRsZXQgcGVnQXJyID0gYXJncy5wZWdBcnI7IC8vcGxheWVycyBndWVzc1xuXHRcdFx0bGV0IGNvZGVBcnIgPSBuZXcgQXJyYXkoKTsgLy9hcnJheSB0byBzdG9yZSB0aGUgcmlnaHQgc29sdXRpb24gd2l0aG91dCB0aGUganNvbiBkYXRhXG5cdFx0XHR0aGlzLmNvZGUuZm9yRWFjaChwZWcgPT4geyBjb2RlQXJyLnB1c2gocGVnLmNoYXJhY3Rlcik7IH0pOyAvL21ha2UgbmV3IGFycmF5IHdpdGhvdXQganNvbiBkYXRhXG5cblx0XHRcdGxldCBoaW50QXJyID0gbmV3IEFycmF5KDQpOyAvL2FycmF5IHdoZXJlIGhpbnRzIHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcGVnQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHQvL2NvcnJlY3QgY29sb3IgYW5kIHBvc2l0aW9uXG5cdFx0XHRcdGlmKHBlZ0FycltpXSA9PSBjb2RlQXJyW2ldKSBsYWJlbC50ZXh0ID0gXCJQb3NpdGlvbiBcIisoaSsxKStcIjogXCIrY29kZUFycltpXStcIi0+IHJpZ2h0IGNvbG9yIHJpZ2h0IHBvc2l0aW9uXCI7XG5cdFx0XHRcdC8vY29ycmVjdCBjb2xvciB3cm9uZyBwb3NpdGlvblxuXHRcdFx0XHRlbHNlIGlmKGNvZGVBcnIuaW5jbHVkZXMocGVnQXJyW2ldKSkge1xuXHRcdFx0XHRcdGxhYmVsLnRleHQgPSBcIlBvc2l0aW9uIFwiKyhpKzEpK1wiOiBcIitwZWdBcnJbaV0rXCItPiByaWdodCBjb2xvciB3cm9uZyBwb3NpdGlvblwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhpbnRBcnJbaV0gPSBsYWJlbDtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGhpbnRTdGFjayA9IG5ldyBTdGFja0xheW91dCgpOyAvL3N0b3JlcyB0aGUgaGludHMgZm9yIHRoZSBwbGF5ZXJcblx0XHRcdGxldCBndWVzc1N0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vc3RvcmVzIHRoZSB1c2VycyBtb3N0IHJlY2VudCBndWVzc1xuXHRcdFx0Z3Vlc3NTdGFjay5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXHRcdFx0XG5cdFx0XHRsZXQgZ3Vlc3MgPSBuZXcgTGFiZWwoKTsgLy9kaXNwbGF5IHRoZSBwbGF5ZXJzIGd1ZXNzXG5cdFx0XHRndWVzcy50ZXh0ID0gXCJZb3VyIEd1ZXNzOiBcIjtcblx0XHRcdGd1ZXNzU3RhY2suYWRkQ2hpbGQoZ3Vlc3MpO1xuXG5cdFx0XHQvL3BhcnNlIHBsYXllcnMgZ3Vlc3MgYW5kIGNyZWF0ZSB4bWwgZm9yIGl0XG5cdFx0XHRwZWdBcnIuZm9yRWFjaChwZWcgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhwZWcpO1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0bGFiZWwudGV4dCA9IHBlZztcblx0XHRcdFx0Z3Vlc3NTdGFjay5hZGRDaGlsZChsYWJlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9hZGQgdGhlIGhpbnRzIGZvcm0gaGludEFyciB0byBoaW50U3RhY2tcblx0XHRcdGhpbnRBcnIuZm9yRWFjaChwZWdIaW50ID0+IHtcblx0XHRcdFx0aGludFN0YWNrLmFkZENoaWxkKHBlZ0hpbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGhpbnQuYWRkQ2hpbGQoZ3Vlc3NTdGFjayk7IC8vYWRkIHBsYXllcnMgY3VycmVudCBndWVzc1xuXHRcdFx0aGludC5hZGRDaGlsZChoaW50U3RhY2spOyAvL2FkZCBoaW50IGZvciB0aGUgcGxheWVyXG5cdFx0fSxcblx0XHQvL3N1Ym1pdCBhIGd1ZXNzXG5cdFx0b25HdWVzczogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuXHRcdFx0bGV0IHBlZ3MgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwicGVnc1wiKTtcblx0XHRcdHBlZ3MuaWQgPSBcIlwiO1xuXHRcdFx0dGhpcy5ndWVzc0NvdW50Kys7XG5cblx0XHRcdC8vZGlzYWJsZSBlYWNoIHBlZyBhbmQgYWRkIHRvIGFycmF5XG5cdFx0XHRsZXQgcGVnQXJyID0gbmV3IEFycmF5KCk7XG5cdFx0XHRwZWdzLmVhY2hDaGlsZChmdW5jdGlvbihjaGlsZCkge1xuXHRcdFx0XHRwZWdBcnIucHVzaChjaGlsZC50ZXh0KTtcblx0XHRcdFx0Y2hpbGQuaXNFbmFibGVkID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9jaGVjayBpZiBwbGF5ZXIgd29uXG5cdFx0XHRsZXQgd29uID0gdHJ1ZTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYocGVnQXJyW2ldICE9IHRoaXMuY29kZVtpXS5jaGFyYWN0ZXIpIHdvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2NoZWNrIHdpbiBhbmQgbG9zZSBjb25kaXRpb25zXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRsZXQgY3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7IC8vdXNlZCB0byBjb3B5IGN1cnJlbnQgd2lubmluZyBib2FyZFxuXHRcdFx0bGV0IGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTsgLy91c2VkIHRvIGdldCBlYWNoIHJvdyBvZiBjdXJyZW50IGJvYXJkXG5cdFx0XHRpZih3b24pIHtcblx0XHRcdFx0Y3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGJvYXJkLmVhY2hDaGlsZChzdGFjayA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdHN0YWNrLmVhY2hDaGlsZChidXR0b24gPT4ge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKGJ1dHRvbi50ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjdXJyZW50Qm9hcmQucHVzaChjdXJyZW50Um93KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IGN1cnJlbnRHYW1lID0geyBib2FyZDogY3VycmVudEJvYXJkLCBndWVzc0NvdW50OiB0aGlzLmd1ZXNzQ291bnQsIGlzV2luOiB0cnVlLCBzb2x1dGlvbjogdGhpcy5jb2RlIH07IFxuXHRcdFx0XHRpZih0aGlzLmdhbWVzLmxlbmd0aCA9PSA1KSB7XG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYodGhpcy5nYW1lc1tpXS5ndWVzc0NvdW50ID4gY3VycmVudEdhbWUuZ3Vlc3NDb3VudCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdhbWVzW2ldID0gY3VycmVudEdhbWU7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB0aGlzLmdhbWVzLnB1c2goY3VycmVudEdhbWUpO1xuXHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZ3Vlc3NDb3VudCA8IDEyKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlUm93KGFyZ3MpOyAvL2NyZWF0ZSBuZXcgcm93IGZvciBpbnB1dHRpbmcgYSBndWVzc1xuXHRcdFx0XHR0aGlzLmdpdmVIaW50KHsgcGVnQXJyOiBwZWdBcnIsIHBhZ2U6IGFyZ3Mub2JqZWN0LnBhZ2UgfSk7IC8vY3JlYXRlcyB0aGUgaGludCBmb3IgdGhlIHBsYXllclxuXHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50Qm9hcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0Ym9hcmQuZWFjaENoaWxkKHN0YWNrID0+IHtcblx0XHRcdFx0XHRjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0c3RhY2suZWFjaENoaWxkKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Um93LnB1c2goYnV0dG9uLnRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGN1cnJlbnRCb2FyZC5wdXNoKGN1cnJlbnRSb3cpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmQpO1xuXHRcdFx0XHR0aGlzLmdhbWVzLnB1c2goeyBib2FyZDogdGhpcy5jdXJyZW50Qm9hcmQsIGd1ZXNzQ291bnQ6IDEyLCBpc1dpbjogZmFsc2UsIHNvbHV0aW9uOiB0aGlzLmNvZGUgfSk7XG5cdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0Ly9yZW1vdmUgY3VycmVudCBndWVzcyBidXR0b25cblx0XHRcdGJ1dHRvbi5wYXJlbnQucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcblx0XHR9LFxuXHRcdC8vY2hhbmdlIHdoaWNoIGNvbG9yIGEgcGVnIGJ1dHRvbiBpc1xuXHRcdG9uQ2hhbmdlUGVnOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgYnV0dG9uID0gYXJncy5vYmplY3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wZWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMucGVnc1tpXS5jaGFyYWN0ZXIgPT0gYnV0dG9uLnRleHQpICB7XG5cdFx0XHRcdFx0YnV0dG9uLnRleHQgPSB0aGlzLnBlZ3NbKGkrMSkldGhpcy5wZWdzLmxlbmd0aF0uY2hhcmFjdGVyO1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2codGhpcy5wZWdzWyhpKzEpJXRoaXMucGVncy5sZW5ndGhdLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly9jcmVhdGUgYSBuZXcgZ2FtZVxuXHRcdG9uTmV3R2FtZTogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Ly9yZW1vdmUgYWxsIHBlZ3MgZnJvbSBjaGVhdGVyIGhpbnRcblx0XHRcdGxldCBzb2x1dGlvbiA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJzb2x1dGlvblwiKTtcblx0XHRcdHNvbHV0aW9uLnJlbW92ZUNoaWxkcmVuKCk7XG5cdFx0XHRcblx0XHRcdC8vZ2VuZXJhdGUgYSBuZXcgY29kZSBmb3IgdGhlIHBsYXllciB0byBmaW5kXG5cdFx0XHR0aGlzLmNvZGUgPSBuZXcgQXJyYXkoKTtcblx0XHRcdHRoaXMuY3JlYXRlQ29kZShhcmdzKTtcblx0XHRcdFxuXHRcdFx0Ly9yZXNldCB2YXJzIHRvIGRlZmF1bHRcblx0XHRcdHRoaXMuZ3Vlc3NDb3VudCA9IDA7XG5cdFx0XHRnbG9iYWwuZ3Vlc3NDb3VudCA9IDA7XG5cdFx0XHRnbG9iYWwuY29kZSA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Z2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG5cdFx0XHR0aGlzLmlzQ2hlYXRlck1vZGVFbmFibGVkID0gZmFsc2U7XG5cdFx0XHRcblx0XHRcdC8vcmVtb3ZlIGFsbCBwZWdzIGZvcm0gYm9hcmRcblx0XHRcdGxldCBib2FyZCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJib2FyZFwiKTtcblx0XHRcdGJvYXJkLnJlbW92ZUNoaWxkcmVuKCk7XG5cblx0XHRcdC8vY2xlYXIgaGludFxuXHRcdFx0bGV0IGhpbnQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiaGludFwiKTtcblx0XHRcdGhpbnQucmVtb3ZlQ2hpbGRyZW4oKTtcblxuXHRcdFx0Ly9jcmVhdGUgdGhlIGZpcnN0IHNsb3Rcblx0XHRcdHRoaXMuY3JlYXRlUm93KGFyZ3MpO1xuXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcclxuY29uc3QgU2VsZWN0ZWRQYWdlU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xyXG5jb25zdCBPYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5jb25zdCBMYWJlbCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIpLkxhYmVsO1xyXG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xyXG5jb25zdCBTdGFja0xheW91dCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpLlN0YWNrTGF5b3V0O1xyXG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcclxuICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJzY29yZS1wYWdlXCIpO1xyXG5cclxuICAgIGNvbnN0IHZpZXdNb2RlbCA9IE9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XHJcbiAgICAgICAgc2NvcmVzOiB7fSxcclxuICAgICAgICBvbkxvYWRlZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2NvcmVCb2FyZChhcmdzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xlYXJTY29yZUJvYXJkOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIC8vYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xyXG4gICAgICAgICAgICBnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSkxFXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlU2NvcmVCb2FyZDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBsZXQgc2NvcmVCb2FyZCA9IGFyZ3Mub2JqZWN0LmdldFZpZXdCeUlkKFwic2NvcmVCb2FyZFwiKTsgLy90aGUgc2NvcmUgYm9hcmRcclxuICAgICAgICAgICAgc2NvcmVCb2FyZC5yZW1vdmVDaGlsZHJlbigpOyAvL3JlbW92ZSBwcmV2aW91cyBzY29yZSBib2FyZCBpbmZvXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjb3Jlcy5mb3JFYWNoKGZ1bmN0aW9uKGJvYXJkKXtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZSA9IG5ldyBTdGFja0xheW91dCgpOyAvL2NvbnRhaW5zIHRoZSBib2FyZCBzdGF0dXNcclxuICAgICAgICAgICAgICAgIGxldCBpc1dpbiA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgaXNXaW4udGV4dCA9IFwiV2lubmVyOiBcIitib2FyZC5pc1dpbjtcclxuICAgICAgICAgICAgICAgIGxldCBndWVzc0NvdW50ID0gbmV3IExhYmVsKCk7XHJcbiAgICAgICAgICAgICAgICBndWVzc0NvdW50LnRleHQgPSBcIkd1ZXNzIENvdW50OiBcIitib2FyZC5ndWVzc0NvdW50O1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5hZGRDaGlsZChpc1dpbik7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmFkZENoaWxkKGd1ZXNzQ291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJvYXJkLmJvYXJkLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vcm93cyBmb3IgYSBzaW5nbGUgZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbihwZWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTsgLy9lYWNoIHBlZyBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC50ZXh0ID0gcGVnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5hZGRDaGlsZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYWRkQ2hpbGQoc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG5ldyBMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yLnRleHQgPSBcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fXFxuXCI7XHJcbiAgICAgICAgICAgICAgICBzY29yZUJvYXJkLmFkZENoaWxkKGdhbWUpO1xyXG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZC5hZGRDaGlsZChzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZpZXdNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2Utdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IGFwcCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xyXG5jb25zdCBjcmVhdGVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9zY29yZS1wYWdlLXZpZXctbW9kZWxcIikuY3JlYXRlVmlld01vZGVsO1xyXG5jb25zdCBGaWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIikuRmlsZTtcclxuXHJcblxyXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IGNyZWF0ZVZpZXdNb2RlbCgpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xyXG4gICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0LnNldChcInNjb3Jlc1wiLCBkYXRhLmdhbWVzKTtcclxufVxyXG5cclxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xyXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vc2NvcmUtcGFnZS9zY29yZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIFxcclxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXHJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXHJcXG4gICAgbG9hZGVkPVxcXCJ7eyBvbkxvYWRlZCB9fVxcXCI+XFxyXFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNjb3JlIEJvYXJkXFxcIiBpY29uPVxcXCJcXFwiPjwvQWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8U2Nyb2xsVmlldz5cXHJcXG4gICAgICAgIDxTdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcInNjb3JlQm9hcmRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJDbGVhciBTY29yZSBCb2FyZFxcXCIgdGFwPVxcXCJ7eyBvbkNsZWFyU2NvcmVCb2FyZCB9fVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1Njcm9sbFZpZXc+XFxyXFxuPC9QYWdlPlxcclxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3Njb3JlLXBhZ2Uvc2NvcmUtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9zY29yZS1wYWdlL3Njb3JlLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImNvbnN0IHsgQmVoYXZpb3JTdWJqZWN0IH0gPSByZXF1aXJlKFwicnhqc1wiKTtcblxuZnVuY3Rpb24gU2VsZWN0ZWRQYWdlU2VydmljZSgpIHtcbiAgICBpZiAoU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy5cIik7XG4gICAgfVxuXG4gICAgLy8gT2JzZXJ2YWJsZSBzZWxlY3RlZFBhZ2Ugc291cmNlXG4gICAgdGhpcy5fc2VsZWN0ZWRQYWdlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdChcIkhvbWVcIik7XG5cbiAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkUGFnZSBzdHJlYW1cbiAgICB0aGlzLnNlbGVjdGVkUGFnZSQgPSB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZSA9IGZ1bmN0aW9uKHNlbGVjdGVkUGFnZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UubmV4dChzZWxlY3RlZFBhZ2UpO1xuICAgIH07XG59XG5cblNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlO1xufTtcblxuU2VsZWN0ZWRQYWdlU2VydmljZS5faW5zdGFuY2UgPSBuZXcgU2VsZWN0ZWRQYWdlU2VydmljZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGVkUGFnZVNlcnZpY2U7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9