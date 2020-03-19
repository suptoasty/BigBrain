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
const ToolTip = __webpack_require__("../node_modules/nativescript-tooltip/tooltip.js").ToolTip;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUVBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLG1DQUFpQztBQUNyRSx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0M7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxhQUFhLG1CQUFPLENBQUMsK0RBQTBDO0FBQy9ELFdBQVcsbUJBQU8sQ0FBQywrREFBMEM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsd0RBQTRCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLDRFQUEwQztBQUN0RSxvQkFBb0IsbUJBQU8sQ0FBQyxpRkFBdUM7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLGlEQUF3QjtBQUM5QyxnQkFBZ0IsbUJBQU8sQ0FBQyxpREFBc0I7QUFDOUMsaUNBQWlDLDBEQUEwRDs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksOEJBQThCO0FBQ2xDLElBQUkseUNBQXlDO0FBQzdDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7O0FBRXZDO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLHlCQUF5Qjs7QUFFekIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw2QkFBNkIsNkJBQTZCLEVBQUUsRUFBRTs7QUFFOUQsOEJBQThCO0FBQzlCLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEM7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7O0FBRUwsdUJBQXVCLHNGO0FBQ3ZCO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QixtQkFBbUIseUNBQXlDLEVBQUU7O0FBRTlELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFCQUFxQiw4RUFBOEU7O0FBRW5HOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlEQUF5RDtBQUNwRixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuYjNkM2MxNTAyZDUzZWUzMjE1MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcbmNvbnN0IFNlbGVjdGVkUGFnZVNlcnZpY2UgPSByZXF1aXJlKFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiKTtcbmNvbnN0IE9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5jb25zdCBGcmFtZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpLkZyYW1lO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpLkZpbGU7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCIpO1xuY29uc3QgTGFiZWwgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKS5MYWJlbDtcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XG5jb25zdCBTdGFja0xheW91dCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpLlN0YWNrTGF5b3V0O1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbmNvbnN0IFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZC1rYWtcIik7XG5jb25zdCBUb29sVGlwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b29sdGlwXCIpLlRvb2xUaXA7XG4vLyBjb25zdCB0aXAgPSBuZXcgVG9vbFRpcCh2aWV3LHt0ZXh0OlwiU29tZSBUZXh0XCIsYmFja2dyb3VuZENvbG9yOlwicGlua1wiLHRleHRDb2xvcjpcImJsYWNrXCJ9KTtcblxuY29uc3QgbmV3R2FtZVNvdW5kID0gU291bmQuY3JlYXRlKGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKFwic291bmRzXCIpLnBhdGgrXCIvVUlfUXVpcmt5MS5tcDNcIik7XG5jb25zdCBjaGFuZ2VQZWdTb3VuZCA9IFNvdW5kLmNyZWF0ZShmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcihcInNvdW5kc1wiKS5wYXRoK1wiL1VJX1F1aXJreV81Mi5tcDNcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdNb2RlbCgpIHtcblx0U2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIm1haW4tcGFnZVwiKTtcblxuXHRjb25zdCB2aWV3TW9kZWwgPSBPYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuXHRcdHR1dG9yaWFsOiBmYWxzZSxcblx0XHRndWVzc0NvdW50OiAwLCAvL3RoZSBudW1iZXIgb2YgZ3Vlc3NlcyBmb3JtIDEtMTJcblx0XHRpc0NoZWF0ZXJNb2RlRW5hYmxlZDogZmFsc2UsIC8vZmxhZyBmb3Igc2hvd2luZyB0aGUgc29sdXRpb24gZm9yIGNoZWF0ZXJzXG5cdFx0Ly9kZWZ1YWx0IGFycmF5IG9mIHBlZ3MgZm9yIHBsYXlpbmcgdGhlIGdhbWVcblx0XHRwZWdzOiBbXG5cdFx0XHR7IG5hbWU6IFwiYmx1ZVwiLCBjaGFyYWN0ZXI6IFwi8J+UtVwifSxcblx0XHRcdHsgbmFtZTogXCJibGFja1wiLCBjaGFyYWN0ZXI6IFwi4pqrXCJ9LFxuXHRcdFx0eyBuYW1lOiBcIndoaXRlXCIsIGNoYXJhY3RlcjogXCLimqpcIn0sXG5cdFx0XHR7IG5hbWU6IFwicmVkXCIsIGNoYXJhY3RlcjogXCLwn5S0XCJ9LFxuXHRcdFx0eyBuYW1lOiBcImJsdWUtYW5kLXdoaXRlXCIsIGNoYXJhY3RlcjogXCLij7rvuI9cIn0sXG5cdFx0XHR7IG5hbWU6IFwiaG9sbG93LXJlZFwiLCBjaGFyYWN0ZXI6IFwi4q2VXCJ9XG5cdFx0XSxcblx0XHRnYW1lczogbmV3IEFycmF5KCksIC8vY29udGFpbmVyIGZvciBvbGQgZ2FtZXNcblx0XHRjb2RlOiBuZXcgQXJyYXkoKSwgLy9jb250YWluZXIgZm9yIHRoZSBzb2x1dGlvblxuXHRcdC8vY3JlYXRlIGNvZGUgZm9yIHBsYXllciB0byBzb2x2ZVxuXHRcdGNyZWF0ZUNvZGU6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBzb2x1dGlvbiA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJzb2x1dGlvblwiKTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0bGV0IHBlZyA9IHRoaXMucGVnc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5wZWdzLmxlbmd0aCldO1xuXHRcdFx0XHR0aGlzLmNvZGUucHVzaChwZWcpO1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdGxhYmVsLnRleHQgPSBwZWcubmFtZStcIjogXCIrcGVnLmNoYXJhY3RlcitcIiBcIjtcblx0XHRcdFx0c29sdXRpb24uYWRkQ2hpbGQobGFiZWwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly9jcmVhdGVzIGEgcm93IG9mIHBlZ3MgZm9yIHRoZSBwbGF5ZXIgdG8gY2hhbmdlIGVhY2ggZ3Vlc3Ncblx0XHRjcmVhdGVSb3c6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdC8vY3JlYXRlIG5ldyBwZWdzIGFuZCBndWVzcyBidXR0b25cblx0XHRcdGxldCBib2FyZCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJib2FyZFwiKTtcblx0XHRcdGxldCBzdGFjayA9IG5ldyBTdGFja0xheW91dCgpO1xuXHRcdFx0c3RhY2suaWQgPSBcInBlZ3NcIjtcblx0XHRcdHN0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdGxldCBidXR0b24gPSBuZXcgQnV0dG9uKCk7XG5cdFx0XHRcdGJ1dHRvbi50ZXh0ID0gXCLwn5S1XCI7XG5cdFx0XHRcdGJ1dHRvbi53aWR0aCA9IDI1O1xuXHRcdFx0XHRidXR0b24ub24oXCJ0YXBcIiwgdGhpcy5vbkNoYW5nZVBlZywgdGhpcyk7XG5cdFx0XHRcdHN0YWNrLmFkZENoaWxkKGJ1dHRvbik7XG5cdFx0XHR9XG5cdFx0XHRsZXQgZ3Vlc3NCdXR0b24gPSBuZXcgQnV0dG9uKCk7XG5cdFx0XHRndWVzc0J1dHRvbi50ZXh0ID0gXCJHdWVzc1wiO1xuXHRcdFx0Z3Vlc3NCdXR0b24ub24oXCJ0YXBcIiwgdGhpcy5vbkd1ZXNzLCB0aGlzKTtcblx0XHRcdFxuXHRcdFx0Ym9hcmQuYWRkQ2hpbGQoc3RhY2spO1xuXHRcdFx0Ym9hcmQuYWRkQ2hpbGQoZ3Vlc3NCdXR0b24pO1xuXHRcdH0sXG5cdFx0Ly90b2dnbGVzIGNoZWF0ZXIgbW9kZSB0byBvbiBhbmQgb2ZmXG5cdFx0b25Ub2dnbGVDaGVhdGVyTW9kZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmlzQ2hlYXRlck1vZGVFbmFibGVkID0gIXRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQ7XG5cdFx0fSxcblx0XHQvL3doZW4gdGhlIHBhZ2UgbG9hZHMgY3JlYXRlIGEgbmV3IGdhbWUgYW5kIGdldCBndWVzc0NvdW50XG5cdFx0b25Mb2FkOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIklTIFRVVE9SSUFMOlwiK3RoaXMudHV0b3JpYWwpO1xuXHRcdFx0aWYodGhpcy5jb2RlLmxlbmd0aCAhPT0gMCkgcmV0dXJuOyAvL2lmIG5vIGNvZGUgdGhlbiByZXR1cm5cblx0XHRcdFxuXHRcdFx0Ly93aGVuIHRoZSBhcHAgaXMgc3RhcnRlZCBjcmVhdGUgZmlyc3QgY29kZSB0byBzb2x2ZVxuXHRcdFx0dGhpcy5jb2RlID0gZ2xvYmFsLmNvZGU7IC8vcmVzdG9yZSBjdXJyZW50IGNvZGUgdG8gc29sdmVcblx0XHRcdGlmKGdsb2JhbC5maXJzdFJ1bikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUNvZGUoYXJncyk7XG5cdFx0XHRcdGdsb2JhbC5maXJzdFJ1biA9IGZhbHNlO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmNvZGUpXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZ3Vlc3NDb3VudCA9IGdsb2JhbC5ndWVzc0NvdW50OyAvL3Jlc3RvcmUgdGhlIGd1ZXNzIGNvdW50XG5cdFx0XHRcblx0XHRcdC8vIHByZXZlbnRzIGNyYXNoIG9uIGZpcnN0IGxvYWRcblx0XHRcdC8vIGlmKHR5cGVvZihnbG9iYWwuZ2FtZXMpID09PSB0eXBlb2Yoe30pICYmIE9iamVjdC5rZXlzKGdsb2JhbC5nYW1lcykubGVuZ3RoID09IDApIHtcblx0XHRcdC8vIFx0Z2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG5cdFx0XHQvLyB9XG5cdFx0XHR0aGlzLmdhbWVzID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJkYXRhXCIpKTsgLy9yZXN0b3JlIGdhbWUgaGlzdG9yeVxuXHRcdFx0dGhpcy5vbk5ld0dhbWUoYXJncyk7XG5cdFx0XHRpZih0aGlzLnR1dG9yaWFsKSB0aGlzLlN0YXJ0V2Fsa3Rocm91Z2goYXJncyk7XG5cdFx0fSxcblx0XHQvL2dvIHRvIHRoZSBzY29yZSBib2FyZCBwYWdlXG5cdFx0b25TY29yZVByZXNzZWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGdsb2JhbC5ndWVzc0NvdW50ID0gdGhpcy5ndWVzc0NvdW50IC8vc2F2ZSBndWVzcyBjb3VudFxuXHRcdFx0Z2xvYmFsLmdhbWVzID0gdGhpcy5nYW1lczsgLy9zYXZlIGdhbWUgaGlzdG9yeVxuXHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdhbWVzKSk7XG5cdFx0XHRGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuXHRcdFx0XHRtb2R1bGVOYW1lOiBcInNjb3JlLXBhZ2Uvc2NvcmUtcGFnZVwiLFxuXHRcdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdFx0Z2FtZXM6IHRoaXMuZ2FtZXNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvL2NyZWF0ZXMgdGhlIGhpbnQgZm9yIHRoZSBwbGF5ZXJzIGN1cnJlbnQgZ3Vlc3Ncblx0XHRnaXZlSGludDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGhpbnQgPSBhcmdzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJoaW50XCIpOyAvL3doZXJlIHRoZSBoaW50IHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRoaW50LnJlbW92ZUNoaWxkcmVuKCk7IC8vY2xlYXIgcHJldmlvdXMgaGludFxuXG5cdFx0XHRsZXQgcGVnQXJyID0gYXJncy5wZWdBcnI7IC8vcGxheWVycyBndWVzc1xuXHRcdFx0bGV0IGNvZGVBcnIgPSBuZXcgQXJyYXkoKTsgLy9hcnJheSB0byBzdG9yZSB0aGUgcmlnaHQgc29sdXRpb24gd2l0aG91dCB0aGUganNvbiBkYXRhXG5cdFx0XHR0aGlzLmNvZGUuZm9yRWFjaChwZWcgPT4geyBjb2RlQXJyLnB1c2gocGVnLmNoYXJhY3Rlcik7IH0pOyAvL21ha2UgbmV3IGFycmF5IHdpdGhvdXQganNvbiBkYXRhXG5cblx0XHRcdGxldCBoaW50QXJyID0gbmV3IEFycmF5KDQpOyAvL2FycmF5IHdoZXJlIGhpbnRzIHdpbGwgYmUgc3RvcmVkXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcGVnQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHQvL2NvcnJlY3QgY29sb3IgYW5kIHBvc2l0aW9uXG5cdFx0XHRcdGlmKHBlZ0FycltpXSA9PSBjb2RlQXJyW2ldKSBsYWJlbC50ZXh0ID0gXCJQb3NpdGlvbiBcIisoaSsxKStcIjogXCIrY29kZUFycltpXStcIi0+IHJpZ2h0IGNvbG9yIHJpZ2h0IHBvc2l0aW9uXCI7XG5cdFx0XHRcdC8vY29ycmVjdCBjb2xvciB3cm9uZyBwb3NpdGlvblxuXHRcdFx0XHRlbHNlIGlmKGNvZGVBcnIuaW5jbHVkZXMocGVnQXJyW2ldKSkge1xuXHRcdFx0XHRcdGxhYmVsLnRleHQgPSBcIlBvc2l0aW9uIFwiKyhpKzEpK1wiOiBcIitwZWdBcnJbaV0rXCItPiByaWdodCBjb2xvciB3cm9uZyBwb3NpdGlvblwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhpbnRBcnJbaV0gPSBsYWJlbDtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGhpbnRTdGFjayA9IG5ldyBTdGFja0xheW91dCgpOyAvL3N0b3JlcyB0aGUgaGludHMgZm9yIHRoZSBwbGF5ZXJcblx0XHRcdGxldCBndWVzc1N0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vc3RvcmVzIHRoZSB1c2VycyBtb3N0IHJlY2VudCBndWVzc1xuXHRcdFx0Z3Vlc3NTdGFjay5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXHRcdFx0XG5cdFx0XHRsZXQgZ3Vlc3MgPSBuZXcgTGFiZWwoKTsgLy9kaXNwbGF5IHRoZSBwbGF5ZXJzIGd1ZXNzXG5cdFx0XHRndWVzcy50ZXh0ID0gXCJZb3VyIEd1ZXNzOiBcIjtcblx0XHRcdGd1ZXNzU3RhY2suYWRkQ2hpbGQoZ3Vlc3MpO1xuXG5cdFx0XHQvL3BhcnNlIHBsYXllcnMgZ3Vlc3MgYW5kIGNyZWF0ZSB4bWwgZm9yIGl0XG5cdFx0XHRwZWdBcnIuZm9yRWFjaChwZWcgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhwZWcpO1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0bGFiZWwudGV4dCA9IHBlZztcblx0XHRcdFx0Z3Vlc3NTdGFjay5hZGRDaGlsZChsYWJlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9hZGQgdGhlIGhpbnRzIGZvcm0gaGludEFyciB0byBoaW50U3RhY2tcblx0XHRcdGhpbnRBcnIuZm9yRWFjaChwZWdIaW50ID0+IHtcblx0XHRcdFx0aGludFN0YWNrLmFkZENoaWxkKHBlZ0hpbnQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGhpbnQuYWRkQ2hpbGQoZ3Vlc3NTdGFjayk7IC8vYWRkIHBsYXllcnMgY3VycmVudCBndWVzc1xuXHRcdFx0aGludC5hZGRDaGlsZChoaW50U3RhY2spOyAvL2FkZCBoaW50IGZvciB0aGUgcGxheWVyXG5cdFx0fSxcblx0XHQvL3N1Ym1pdCBhIGd1ZXNzXG5cdFx0b25HdWVzczogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuXHRcdFx0bGV0IHBlZ3MgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwicGVnc1wiKTtcblx0XHRcdHBlZ3MuaWQgPSBcIlwiO1xuXHRcdFx0dGhpcy5ndWVzc0NvdW50Kys7XG5cblx0XHRcdC8vZGlzYWJsZSBlYWNoIHBlZyBhbmQgYWRkIHRvIGFycmF5XG5cdFx0XHRsZXQgcGVnQXJyID0gbmV3IEFycmF5KCk7XG5cdFx0XHRwZWdzLmVhY2hDaGlsZChmdW5jdGlvbihjaGlsZCkge1xuXHRcdFx0XHRwZWdBcnIucHVzaChjaGlsZC50ZXh0KTtcblx0XHRcdFx0Y2hpbGQuaXNFbmFibGVkID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9jaGVjayBpZiBwbGF5ZXIgd29uXG5cdFx0XHRsZXQgd29uID0gdHJ1ZTtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYocGVnQXJyW2ldICE9IHRoaXMuY29kZVtpXS5jaGFyYWN0ZXIpIHdvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2NoZWNrIHdpbiBhbmQgbG9zZSBjb25kaXRpb25zXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRsZXQgY3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7IC8vdXNlZCB0byBjb3B5IGN1cnJlbnQgd2lubmluZyBib2FyZFxuXHRcdFx0bGV0IGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTsgLy91c2VkIHRvIGdldCBlYWNoIHJvdyBvZiBjdXJyZW50IGJvYXJkXG5cdFx0XHRpZih3b24pIHtcblx0XHRcdFx0Y3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGJvYXJkLmVhY2hDaGlsZChzdGFjayA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdHN0YWNrLmVhY2hDaGlsZChidXR0b24gPT4ge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKGJ1dHRvbi50ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjdXJyZW50Qm9hcmQucHVzaChjdXJyZW50Um93KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IGN1cnJlbnRHYW1lID0geyBib2FyZDogY3VycmVudEJvYXJkLCBndWVzc0NvdW50OiB0aGlzLmd1ZXNzQ291bnQsIGlzV2luOiB0cnVlLCBzb2x1dGlvbjogdGhpcy5jb2RlIH07IFxuXHRcdFx0XHRpZih0aGlzLmdhbWVzLmxlbmd0aCA9PSA1KSB7XG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYodGhpcy5nYW1lc1tpXS5ndWVzc0NvdW50ID4gY3VycmVudEdhbWUuZ3Vlc3NDb3VudCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdhbWVzW2ldID0gY3VycmVudEdhbWU7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB0aGlzLmdhbWVzLnB1c2goY3VycmVudEdhbWUpO1xuXHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZ3Vlc3NDb3VudCA8IDEyKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlUm93KGFyZ3MpOyAvL2NyZWF0ZSBuZXcgcm93IGZvciBpbnB1dHRpbmcgYSBndWVzc1xuXHRcdFx0XHR0aGlzLmdpdmVIaW50KHsgcGVnQXJyOiBwZWdBcnIsIHBhZ2U6IGFyZ3Mub2JqZWN0LnBhZ2UgfSk7IC8vY3JlYXRlcyB0aGUgaGludCBmb3IgdGhlIHBsYXllclxuXHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50Qm9hcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0Ym9hcmQuZWFjaENoaWxkKHN0YWNrID0+IHtcblx0XHRcdFx0XHRjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0c3RhY2suZWFjaENoaWxkKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Um93LnB1c2goYnV0dG9uLnRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGN1cnJlbnRCb2FyZC5wdXNoKGN1cnJlbnRSb3cpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmQpO1xuXHRcdFx0XHR0aGlzLmdhbWVzLnB1c2goeyBib2FyZDogdGhpcy5jdXJyZW50Qm9hcmQsIGd1ZXNzQ291bnQ6IDEyLCBpc1dpbjogZmFsc2UsIHNvbHV0aW9uOiB0aGlzLmNvZGUgfSk7XG5cdFx0XHRcblx0XHRcdH1cblxuXHRcdFx0Ly9yZW1vdmUgY3VycmVudCBndWVzcyBidXR0b25cblx0XHRcdGJ1dHRvbi5wYXJlbnQucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcblx0XHR9LFxuXHRcdC8vY2hhbmdlIHdoaWNoIGNvbG9yIGEgcGVnIGJ1dHRvbiBpc1xuXHRcdG9uQ2hhbmdlUGVnOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgYnV0dG9uID0gYXJncy5vYmplY3Q7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wZWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMucGVnc1tpXS5jaGFyYWN0ZXIgPT0gYnV0dG9uLnRleHQpICB7XG5cdFx0XHRcdFx0YnV0dG9uLnRleHQgPSB0aGlzLnBlZ3NbKGkrMSkldGhpcy5wZWdzLmxlbmd0aF0uY2hhcmFjdGVyO1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2codGhpcy5wZWdzWyhpKzEpJXRoaXMucGVncy5sZW5ndGhdLm5hbWUpO1xuXHRcdFx0XHRcdGNoYW5nZVBlZ1NvdW5kLnBsYXkoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vY3JlYXRlIGEgbmV3IGdhbWVcblx0XHRvbk5ld0dhbWU6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdC8vcmVtb3ZlIGFsbCBwZWdzIGZyb20gY2hlYXRlciBoaW50XG5cdFx0XHRsZXQgc29sdXRpb24gPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwic29sdXRpb25cIik7XG5cdFx0XHRzb2x1dGlvbi5yZW1vdmVDaGlsZHJlbigpO1xuXHRcdFx0XG5cdFx0XHQvL2dlbmVyYXRlIGEgbmV3IGNvZGUgZm9yIHRoZSBwbGF5ZXIgdG8gZmluZFxuXHRcdFx0dGhpcy5jb2RlID0gbmV3IEFycmF5KCk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNvZGUoYXJncyk7XG5cdFx0XHRcblx0XHRcdC8vcmVzZXQgdmFycyB0byBkZWZhdWx0XG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQgPSAwO1xuXHRcdFx0Z2xvYmFsLmd1ZXNzQ291bnQgPSAwO1xuXHRcdFx0Z2xvYmFsLmNvZGUgPSBuZXcgQXJyYXkoKTtcblx0XHRcdGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0dGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0XG5cdFx0XHQvL3JlbW92ZSBhbGwgcGVncyBmb3JtIGJvYXJkXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRib2FyZC5yZW1vdmVDaGlsZHJlbigpO1xuXG5cdFx0XHQvL2NsZWFyIGhpbnRcblx0XHRcdGxldCBoaW50ID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImhpbnRcIik7XG5cdFx0XHRoaW50LnJlbW92ZUNoaWxkcmVuKCk7XG5cblx0XHRcdC8vY3JlYXRlIHRoZSBmaXJzdCBzbG90XG5cdFx0XHR0aGlzLmNyZWF0ZVJvdyhhcmdzKTtcblx0XHRcdG5ld0dhbWVTb3VuZC5wbGF5KCk7XG5cblx0XHR9LFxuXHRcdFN0YXJ0V2Fsa3Rocm91Z2g6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdFxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5jcmVhdGVWaWV3TW9kZWwgPSBjcmVhdGVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21haW4tcGFnZS9tYWluLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==