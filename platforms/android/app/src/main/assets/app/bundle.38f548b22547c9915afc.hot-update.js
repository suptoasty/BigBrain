webpackHotUpdate("bundle",{

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
			let page = args.object.page;
			const tip = new ToolTip(page.getViewById("DemoButton"), {
				text: "Tap The Peg To Change It's Color",
				position: "Bottom",
				hideArrow: false,
				textColor: "black",
				backgroundColor: "blue",
				style: "CustomToolTipLayoutStyle",
				width:1000
			});
			tip.show();
			
			setTimeout(function(){}, 3000);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUVBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLG1DQUFpQztBQUNyRSx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0M7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxhQUFhLG1CQUFPLENBQUMsK0RBQTBDO0FBQy9ELFdBQVcsbUJBQU8sQ0FBQywrREFBMEM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsd0RBQTRCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLDRFQUEwQztBQUN0RSxvQkFBb0IsbUJBQU8sQ0FBQyxpRkFBdUM7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLGlEQUF3QjtBQUM5QyxhQUFhLG1CQUFPLENBQUMsK0RBQTBDO0FBQy9ELGdCQUFnQixtQkFBTyxDQUFDLGlEQUFzQjs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksOEJBQThCO0FBQ2xDLElBQUkseUNBQXlDO0FBQzdDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qzs7QUFFdkM7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMseUJBQXlCOztBQUV6Qiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLDZCQUE2Qiw2QkFBNkIsRUFBRSxFQUFFOztBQUU5RCw4QkFBOEI7QUFDOUIsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0Qzs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsS0FBSzs7QUFFTCx1QkFBdUIsc0Y7QUFDdkI7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJO0FBQ0oseUJBQXlCO0FBQ3pCLG1CQUFtQix5Q0FBeUMsRUFBRTs7QUFFOUQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLOztBQUVMO0FBQ0EscUJBQXFCLDhFQUE4RTs7QUFFbkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlEQUF5RDtBQUNwRixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuMzhmNTQ4YjIyNTQ3Yzk5MTVhZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiKTtcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5jb25zdCBGcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpLkZyYW1lO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuY29uc3QgTGFiZWwgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKS5MYWJlbDtcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XG5jb25zdCBTdGFja0xheW91dCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpLlN0YWNrTGF5b3V0O1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmNvbnN0IFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZC1rYWtcIik7XG5jb25zdCB2aWV3ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb25cIikudmlldztcbmNvbnN0IFRvb2xUaXAgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRvb2x0aXBcIikuVG9vbFRpcDtcblxuY29uc3QgbmV3R2FtZVNvdW5kID0gU291bmQuY3JlYXRlKGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKFwic291bmRzXCIpLnBhdGgrXCIvVUlfUXVpcmt5MS5tcDNcIik7XG5jb25zdCBjaGFuZ2VQZWdTb3VuZCA9IFNvdW5kLmNyZWF0ZShmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcihcInNvdW5kc1wiKS5wYXRoK1wiL1VJX1F1aXJreV81Mi5tcDNcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcblx0U2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIm1haW4tcGFnZVwiKTtcblxuXHRjb25zdCB2aWV3TW9kZWwgPSBPYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuXHRcdHR1dG9yaWFsOiBmYWxzZSxcblx0XHRndWVzc0NvdW50OiAwLCAvL3RoZSBudW1iZXIgb2YgZ3Vlc3NlcyBmb3JtIDEtMTJcblx0XHRpc0NoZWF0ZXJNb2RlRW5hYmxlZDogZmFsc2UsIC8vZmxhZyBmb3Igc2hvd2luZyB0aGUgc29sdXRpb24gZm9yIGNoZWF0ZXJzXG5cdFx0Ly9kZWZ1YWx0IGFycmF5IG9mIHBlZ3MgZm9yIHBsYXlpbmcgdGhlIGdhbWVcblx0XHRwZWdzOiBbXG5cdFx0XHR7IG5hbWU6IFwiYmx1ZVwiLCBjaGFyYWN0ZXI6IFwi8J+UtVwifSxcblx0XHRcdHsgbmFtZTogXCJibGFja1wiLCBjaGFyYWN0ZXI6IFwi4pqrXCJ9LFxuXHRcdFx0eyBuYW1lOiBcIndoaXRlXCIsIGNoYXJhY3RlcjogXCLimqpcIn0sXG5cdFx0XHR7IG5hbWU6IFwicmVkXCIsIGNoYXJhY3RlcjogXCLwn5S0XCJ9LFxuXHRcdFx0eyBuYW1lOiBcImJsdWUtYW5kLXdoaXRlXCIsIGNoYXJhY3RlcjogXCLij7rvuI9cIn0sXG5cdFx0XHR7IG5hbWU6IFwiaG9sbG93LXJlZFwiLCBjaGFyYWN0ZXI6IFwi4q2VXCJ9XG5cdFx0XSxcblx0XHRnYW1lczogbmV3IEFycmF5KCksIC8vY29udGFpbmVyIGZvciBvbGQgZ2FtZXNcblx0XHRjb2RlOiBuZXcgQXJyYXkoKSwgLy9jb250YWluZXIgZm9yIHRoZSBzb2x1dGlvblxuXHRcdC8vY3JlYXRlIGNvZGUgZm9yIHBsYXllciB0byBzb2x2ZVxuXHRcdGNyZWF0ZUNvZGU6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBzb2x1dGlvbiA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJzb2x1dGlvblwiKTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0bGV0IHBlZyA9IHRoaXMucGVnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5wZWdzLmxlbmd0aCldO1xuXHRcdFx0XHR0aGlzLmNvZGUucHVzaChwZWcpO1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdGxhYmVsLnRleHQgPSBwZWcubmFtZStcIjogXCIrcGVnLmNoYXJhY3RlcitcIiBcIjtcblx0XHRcdFx0c29sdXRpb24uYWRkQ2hpbGQobGFiZWwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly9jcmVhdGVzIGEgcm93IG9mIHBlZ3MgZm9yIHRoZSBwbGF5ZXIgdG8gY2hhbmdlIGVhY2ggZ3Vlc3Ncblx0XHRjcmVhdGVSb3c6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdC8vY3JlYXRlIG5ldyBwZWdzIGFuZCBndWVzcyBidXR0b25cblx0XHRcdGxldCBib2FyZCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJib2FyZFwiKTtcblx0XHRcdGxldCBzdGFjayA9IG5ldyBTdGFja0xheW91dCgpO1xuXHRcdFx0c3RhY2suaWQgPSBcInBlZ3NcIjtcblx0XHRcdHN0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdGxldCBidXR0b24gPSBuZXcgQnV0dG9uKCk7XG5cdFx0XHRcdGJ1dHRvbi50ZXh0ID0gXCLwn5S1XCI7XG5cdFx0XHRcdGJ1dHRvbi53aWR0aCA9IDI1O1xuXHRcdFx0XHRpZihpPT0zKSBidXR0b24uaWQgPSBcIkRlbW9CdXR0b25cIjtcblx0XHRcdFx0YnV0dG9uLm9uKFwidGFwXCIsIHRoaXMub25DaGFuZ2VQZWcsIHRoaXMpO1xuXHRcdFx0XHRzdGFjay5hZGRDaGlsZChidXR0b24pO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGd1ZXNzQnV0dG9uID0gbmV3IEJ1dHRvbigpO1xuXHRcdFx0Z3Vlc3NCdXR0b24udGV4dCA9IFwiR3Vlc3NcIjtcblx0XHRcdGd1ZXNzQnV0dG9uLm9uKFwidGFwXCIsIHRoaXMub25HdWVzcywgdGhpcyk7XG5cdFx0XHRcblx0XHRcdGJvYXJkLmFkZENoaWxkKHN0YWNrKTtcblx0XHRcdGJvYXJkLmFkZENoaWxkKGd1ZXNzQnV0dG9uKTtcblx0XHR9LFxuXHRcdC8vdG9nZ2xlcyBjaGVhdGVyIG1vZGUgdG8gb24gYW5kIG9mZlxuXHRcdG9uVG9nZ2xlQ2hlYXRlck1vZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZCA9ICF0aGlzLmlzQ2hlYXRlck1vZGVFbmFibGVkO1xuXHRcdH0sXG5cdFx0Ly93aGVuIHRoZSBwYWdlIGxvYWRzIGNyZWF0ZSBhIG5ldyBnYW1lIGFuZCBnZXQgZ3Vlc3NDb3VudFxuXHRcdG9uTG9hZDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJJUyBUVVRPUklBTDpcIit0aGlzLnR1dG9yaWFsKTtcblx0XHRcdGlmKHRoaXMuY29kZS5sZW5ndGggIT09IDApIHJldHVybjsgLy9pZiBubyBjb2RlIHRoZW4gcmV0dXJuXG5cdFx0XHRcblx0XHRcdC8vd2hlbiB0aGUgYXBwIGlzIHN0YXJ0ZWQgY3JlYXRlIGZpcnN0IGNvZGUgdG8gc29sdmVcblx0XHRcdHRoaXMuY29kZSA9IGdsb2JhbC5jb2RlOyAvL3Jlc3RvcmUgY3VycmVudCBjb2RlIHRvIHNvbHZlXG5cdFx0XHRpZihnbG9iYWwuZmlyc3RSdW4pIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVDb2RlKGFyZ3MpO1xuXHRcdFx0XHRnbG9iYWwuZmlyc3RSdW4gPSBmYWxzZTtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb2RlKVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQgPSBnbG9iYWwuZ3Vlc3NDb3VudDsgLy9yZXN0b3JlIHRoZSBndWVzcyBjb3VudFxuXHRcdFx0XG5cdFx0XHQvLyBwcmV2ZW50cyBjcmFzaCBvbiBmaXJzdCBsb2FkXG5cdFx0XHQvLyBpZih0eXBlb2YoZ2xvYmFsLmdhbWVzKSA9PT0gdHlwZW9mKHt9KSAmJiBPYmplY3Qua2V5cyhnbG9iYWwuZ2FtZXMpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHQvLyBcdGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0dGhpcy5nYW1lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiKSk7IC8vcmVzdG9yZSBnYW1lIGhpc3Rvcnlcblx0XHRcdHRoaXMub25OZXdHYW1lKGFyZ3MpO1xuXHRcdFx0aWYodGhpcy50dXRvcmlhbCkgdGhpcy5TdGFydFdhbGt0aHJvdWdoKGFyZ3MpO1xuXHRcdH0sXG5cdFx0Ly9nbyB0byB0aGUgc2NvcmUgYm9hcmQgcGFnZVxuXHRcdG9uU2NvcmVQcmVzc2VkOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRnbG9iYWwuZ3Vlc3NDb3VudCA9IHRoaXMuZ3Vlc3NDb3VudCAvL3NhdmUgZ3Vlc3MgY291bnRcblx0XHRcdGdsb2JhbC5nYW1lcyA9IHRoaXMuZ2FtZXM7IC8vc2F2ZSBnYW1lIGhpc3Rvcnlcblx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nYW1lcykpO1xuXHRcdFx0RnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcblx0XHRcdFx0bW9kdWxlTmFtZTogXCJzY29yZS1wYWdlL3Njb3JlLXBhZ2VcIixcblx0XHRcdFx0Y29udGV4dDoge1xuXHRcdFx0XHRcdGdhbWVzOiB0aGlzLmdhbWVzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly9jcmVhdGVzIHRoZSBoaW50IGZvciB0aGUgcGxheWVycyBjdXJyZW50IGd1ZXNzXG5cdFx0Z2l2ZUhpbnQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBoaW50ID0gYXJncy5wYWdlLmdldFZpZXdCeUlkKFwiaGludFwiKTsgLy93aGVyZSB0aGUgaGludCB3aWxsIGJlIHN0b3JlZFxuXHRcdFx0aGludC5yZW1vdmVDaGlsZHJlbigpOyAvL2NsZWFyIHByZXZpb3VzIGhpbnRcblxuXHRcdFx0bGV0IHBlZ0FyciA9IGFyZ3MucGVnQXJyOyAvL3BsYXllcnMgZ3Vlc3Ncblx0XHRcdGxldCBjb2RlQXJyID0gbmV3IEFycmF5KCk7IC8vYXJyYXkgdG8gc3RvcmUgdGhlIHJpZ2h0IHNvbHV0aW9uIHdpdGhvdXQgdGhlIGpzb24gZGF0YVxuXHRcdFx0dGhpcy5jb2RlLmZvckVhY2gocGVnID0+IHsgY29kZUFyci5wdXNoKHBlZy5jaGFyYWN0ZXIpOyB9KTsgLy9tYWtlIG5ldyBhcnJheSB3aXRob3V0IGpzb24gZGF0YVxuXG5cdFx0XHRsZXQgaGludEFyciA9IG5ldyBBcnJheSg0KTsgLy9hcnJheSB3aGVyZSBoaW50cyB3aWxsIGJlIHN0b3JlZFxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHBlZ0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0Ly9jb3JyZWN0IGNvbG9yIGFuZCBwb3NpdGlvblxuXHRcdFx0XHRpZihwZWdBcnJbaV0gPT0gY29kZUFycltpXSkgbGFiZWwudGV4dCA9IFwiUG9zaXRpb24gXCIrKGkrMSkrXCI6IFwiK2NvZGVBcnJbaV0rXCItPiByaWdodCBjb2xvciByaWdodCBwb3NpdGlvblwiO1xuXHRcdFx0XHQvL2NvcnJlY3QgY29sb3Igd3JvbmcgcG9zaXRpb25cblx0XHRcdFx0ZWxzZSBpZihjb2RlQXJyLmluY2x1ZGVzKHBlZ0FycltpXSkpIHtcblx0XHRcdFx0XHRsYWJlbC50ZXh0ID0gXCJQb3NpdGlvbiBcIisoaSsxKStcIjogXCIrcGVnQXJyW2ldK1wiLT4gcmlnaHQgY29sb3Igd3JvbmcgcG9zaXRpb25cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRoaW50QXJyW2ldID0gbGFiZWw7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBoaW50U3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTsgLy9zdG9yZXMgdGhlIGhpbnRzIGZvciB0aGUgcGxheWVyXG5cdFx0XHRsZXQgZ3Vlc3NTdGFjayA9IG5ldyBTdGFja0xheW91dCgpOyAvL3N0b3JlcyB0aGUgdXNlcnMgbW9zdCByZWNlbnQgZ3Vlc3Ncblx0XHRcdGd1ZXNzU3RhY2sub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblx0XHRcdFxuXHRcdFx0bGV0IGd1ZXNzID0gbmV3IExhYmVsKCk7IC8vZGlzcGxheSB0aGUgcGxheWVycyBndWVzc1xuXHRcdFx0Z3Vlc3MudGV4dCA9IFwiWW91ciBHdWVzczogXCI7XG5cdFx0XHRndWVzc1N0YWNrLmFkZENoaWxkKGd1ZXNzKTtcblxuXHRcdFx0Ly9wYXJzZSBwbGF5ZXJzIGd1ZXNzIGFuZCBjcmVhdGUgeG1sIGZvciBpdFxuXHRcdFx0cGVnQXJyLmZvckVhY2gocGVnID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocGVnKTtcblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdGxhYmVsLnRleHQgPSBwZWc7XG5cdFx0XHRcdGd1ZXNzU3RhY2suYWRkQ2hpbGQobGFiZWwpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vYWRkIHRoZSBoaW50cyBmb3JtIGhpbnRBcnIgdG8gaGludFN0YWNrXG5cdFx0XHRoaW50QXJyLmZvckVhY2gocGVnSGludCA9PiB7XG5cdFx0XHRcdGhpbnRTdGFjay5hZGRDaGlsZChwZWdIaW50KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRoaW50LmFkZENoaWxkKGd1ZXNzU3RhY2spOyAvL2FkZCBwbGF5ZXJzIGN1cnJlbnQgZ3Vlc3Ncblx0XHRcdGhpbnQuYWRkQ2hpbGQoaGludFN0YWNrKTsgLy9hZGQgaGludCBmb3IgdGhlIHBsYXllclxuXHRcdH0sXG5cdFx0Ly9zdWJtaXQgYSBndWVzc1xuXHRcdG9uR3Vlc3M6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBidXR0b24gPSBhcmdzLm9iamVjdDtcblx0XHRcdGxldCBwZWdzID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInBlZ3NcIik7XG5cdFx0XHRwZWdzLmlkID0gXCJcIjtcblx0XHRcdHRoaXMuZ3Vlc3NDb3VudCsrO1xuXG5cdFx0XHQvL2Rpc2FibGUgZWFjaCBwZWcgYW5kIGFkZCB0byBhcnJheVxuXHRcdFx0bGV0IHBlZ0FyciA9IG5ldyBBcnJheSgpO1xuXHRcdFx0cGVncy5lYWNoQ2hpbGQoZnVuY3Rpb24oY2hpbGQpIHtcblx0XHRcdFx0cGVnQXJyLnB1c2goY2hpbGQudGV4dCk7XG5cdFx0XHRcdGNoaWxkLmlzRW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vY2hlY2sgaWYgcGxheWVyIHdvblxuXHRcdFx0bGV0IHdvbiA9IHRydWU7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHBlZ0FycltpXSAhPSB0aGlzLmNvZGVbaV0uY2hhcmFjdGVyKSB3b24gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9jaGVjayB3aW4gYW5kIGxvc2UgY29uZGl0aW9uc1xuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0bGV0IGN1cnJlbnRCb2FyZCA9IG5ldyBBcnJheSgpOyAvL3VzZWQgdG8gY29weSBjdXJyZW50IHdpbm5pbmcgYm9hcmRcblx0XHRcdGxldCBjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7IC8vdXNlZCB0byBnZXQgZWFjaCByb3cgb2YgY3VycmVudCBib2FyZFxuXHRcdFx0aWYod29uKSB7XG5cdFx0XHRcdGN1cnJlbnRCb2FyZCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRib2FyZC5lYWNoQ2hpbGQoc3RhY2sgPT4ge1xuXHRcdFx0XHRcdGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0XHRzdGFjay5lYWNoQ2hpbGQoYnV0dG9uID0+IHtcblx0XHRcdFx0XHRcdGN1cnJlbnRSb3cucHVzaChidXR0b24udGV4dCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y3VycmVudEJvYXJkLnB1c2goY3VycmVudFJvdyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCBjdXJyZW50R2FtZSA9IHsgYm9hcmQ6IGN1cnJlbnRCb2FyZCwgZ3Vlc3NDb3VudDogdGhpcy5ndWVzc0NvdW50LCBpc1dpbjogdHJ1ZSwgc29sdXRpb246IHRoaXMuY29kZSB9OyBcblx0XHRcdFx0aWYodGhpcy5nYW1lcy5sZW5ndGggPT0gNSkge1xuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcblx0XHRcdFx0XHRcdGlmKHRoaXMuZ2FtZXNbaV0uZ3Vlc3NDb3VudCA+IGN1cnJlbnRHYW1lLmd1ZXNzQ291bnQpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5nYW1lc1tpXSA9IGN1cnJlbnRHYW1lO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgdGhpcy5nYW1lcy5wdXNoKGN1cnJlbnRHYW1lKTtcblx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmd1ZXNzQ291bnQgPCAxMikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVJvdyhhcmdzKTsgLy9jcmVhdGUgbmV3IHJvdyBmb3IgaW5wdXR0aW5nIGEgZ3Vlc3Ncblx0XHRcdFx0dGhpcy5naXZlSGludCh7IHBlZ0FycjogcGVnQXJyLCBwYWdlOiBhcmdzLm9iamVjdC5wYWdlIH0pOyAvL2NyZWF0ZXMgdGhlIGhpbnQgZm9yIHRoZSBwbGF5ZXJcblx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGJvYXJkLmVhY2hDaGlsZChzdGFjayA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdHN0YWNrLmVhY2hDaGlsZChidXR0b24gPT4ge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKGJ1dHRvbi50ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjdXJyZW50Qm9hcmQucHVzaChjdXJyZW50Um93KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2coY3VycmVudEJvYXJkKTtcblx0XHRcdFx0dGhpcy5nYW1lcy5wdXNoKHsgYm9hcmQ6IHRoaXMuY3VycmVudEJvYXJkLCBndWVzc0NvdW50OiAxMiwgaXNXaW46IGZhbHNlLCBzb2x1dGlvbjogdGhpcy5jb2RlIH0pO1xuXHRcdFx0XG5cdFx0XHR9XG5cblx0XHRcdC8vcmVtb3ZlIGN1cnJlbnQgZ3Vlc3MgYnV0dG9uXG5cdFx0XHRidXR0b24ucGFyZW50LnJlbW92ZUNoaWxkKGJ1dHRvbik7XG5cdFx0fSxcblx0XHQvL2NoYW5nZSB3aGljaCBjb2xvciBhIHBlZyBidXR0b24gaXNcblx0XHRvbkNoYW5nZVBlZzogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGVncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZih0aGlzLnBlZ3NbaV0uY2hhcmFjdGVyID09IGJ1dHRvbi50ZXh0KSAge1xuXHRcdFx0XHRcdGJ1dHRvbi50ZXh0ID0gdGhpcy5wZWdzWyhpKzEpJXRoaXMucGVncy5sZW5ndGhdLmNoYXJhY3Rlcjtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMucGVnc1soaSsxKSV0aGlzLnBlZ3MubGVuZ3RoXS5uYW1lKTtcblx0XHRcdFx0XHRjaGFuZ2VQZWdTb3VuZC5wbGF5KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL2NyZWF0ZSBhIG5ldyBnYW1lXG5cdFx0b25OZXdHYW1lOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHQvL3JlbW92ZSBhbGwgcGVncyBmcm9tIGNoZWF0ZXIgaGludFxuXHRcdFx0bGV0IHNvbHV0aW9uID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInNvbHV0aW9uXCIpO1xuXHRcdFx0c29sdXRpb24ucmVtb3ZlQ2hpbGRyZW4oKTtcblx0XHRcdFxuXHRcdFx0Ly9nZW5lcmF0ZSBhIG5ldyBjb2RlIGZvciB0aGUgcGxheWVyIHRvIGZpbmRcblx0XHRcdHRoaXMuY29kZSA9IG5ldyBBcnJheSgpO1xuXHRcdFx0dGhpcy5jcmVhdGVDb2RlKGFyZ3MpO1xuXHRcdFx0XG5cdFx0XHQvL3Jlc2V0IHZhcnMgdG8gZGVmYXVsdFxuXHRcdFx0dGhpcy5ndWVzc0NvdW50ID0gMDtcblx0XHRcdGdsb2JhbC5ndWVzc0NvdW50ID0gMDtcblx0XHRcdGdsb2JhbC5jb2RlID0gbmV3IEFycmF5KCk7XG5cdFx0XHRnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcblx0XHRcdHRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdFxuXHRcdFx0Ly9yZW1vdmUgYWxsIHBlZ3MgZm9ybSBib2FyZFxuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0Ym9hcmQucmVtb3ZlQ2hpbGRyZW4oKTtcblxuXHRcdFx0Ly9jbGVhciBoaW50XG5cdFx0XHRsZXQgaGludCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJoaW50XCIpO1xuXHRcdFx0aGludC5yZW1vdmVDaGlsZHJlbigpO1xuXG5cdFx0XHQvL2NyZWF0ZSB0aGUgZmlyc3Qgc2xvdFxuXHRcdFx0dGhpcy5jcmVhdGVSb3coYXJncyk7XG5cdFx0XHRuZXdHYW1lU291bmQucGxheSgpO1xuXG5cdFx0fSxcblx0XHRTdGFydFdhbGt0aHJvdWdoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgcGFnZSA9IGFyZ3Mub2JqZWN0LnBhZ2U7XG5cdFx0XHRjb25zdCB0aXAgPSBuZXcgVG9vbFRpcChwYWdlLmdldFZpZXdCeUlkKFwiRGVtb0J1dHRvblwiKSwge1xuXHRcdFx0XHR0ZXh0OiBcIlRhcCBUaGUgUGVnIFRvIENoYW5nZSBJdCdzIENvbG9yXCIsXG5cdFx0XHRcdHBvc2l0aW9uOiBcIkJvdHRvbVwiLFxuXHRcdFx0XHRoaWRlQXJyb3c6IGZhbHNlLFxuXHRcdFx0XHR0ZXh0Q29sb3I6IFwiYmxhY2tcIixcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcblx0XHRcdFx0c3R5bGU6IFwiQ3VzdG9tVG9vbFRpcExheW91dFN0eWxlXCIsXG5cdFx0XHRcdHdpZHRoOjEwMDBcblx0XHRcdH0pO1xuXHRcdFx0dGlwLnNob3coKTtcblx0XHRcdFxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe30sIDMwMDApO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tcGFnZS9tYWluLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==