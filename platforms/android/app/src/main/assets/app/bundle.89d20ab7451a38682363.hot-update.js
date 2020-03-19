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
			console.log("WLAKING THROUGH");
			const tip = new ToolTip(args.object, {
				text: "text thing",
				position: "bottom",
				hideArrow: false,
				textColor: "black",
				backgroundColor: "blue",
				style: "CustomToolTipLayoutStyle",
				width:400
			});
			tip.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUVBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLG1DQUFpQztBQUNyRSx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0M7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxhQUFhLG1CQUFPLENBQUMsK0RBQTBDO0FBQy9ELFdBQVcsbUJBQU8sQ0FBQywrREFBMEM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsd0RBQTRCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLDRFQUEwQztBQUN0RSxvQkFBb0IsbUJBQU8sQ0FBQyxpRkFBdUM7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLGlEQUF3QjtBQUM5QyxhQUFhLG1CQUFPLENBQUMsK0RBQTBDO0FBQy9ELGdCQUFnQixtQkFBTyxDQUFDLGlEQUFzQjs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksOEJBQThCO0FBQ2xDLElBQUkseUNBQXlDO0FBQzdDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7O0FBRXZDO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLHlCQUF5Qjs7QUFFekIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw2QkFBNkIsNkJBQTZCLEVBQUUsRUFBRTs7QUFFOUQsOEJBQThCO0FBQzlCLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEM7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7O0FBRUwsdUJBQXVCLHNGO0FBQ3ZCO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QixtQkFBbUIseUNBQXlDLEVBQUU7O0FBRTlELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFCQUFxQiw4RUFBOEU7O0FBRW5HOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIseURBQXlEO0FBQ3BGLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS44OWQyMGFiNzQ1MWEzODY4MjM2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xuY29uc3QgU2VsZWN0ZWRQYWdlU2VydmljZSA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlXCIpO1xuY29uc3QgT2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmNvbnN0IEZyYW1lID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIikuRnJhbWU7XG5jb25zdCBGaWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIikuRmlsZTtcbmNvbnN0IGZzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIik7XG5jb25zdCBMYWJlbCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIpLkxhYmVsO1xuY29uc3QgQnV0dG9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpLkJ1dHRvbjtcbmNvbnN0IFN0YWNrTGF5b3V0ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIikuU3RhY2tMYXlvdXQ7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuY29uc3QgU291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kLWtha1wiKTtcbmNvbnN0IHZpZXcgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiKS52aWV3O1xuY29uc3QgVG9vbFRpcCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdG9vbHRpcFwiKS5Ub29sVGlwO1xuXG5jb25zdCBuZXdHYW1lU291bmQgPSBTb3VuZC5jcmVhdGUoZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGb2xkZXIoXCJzb3VuZHNcIikucGF0aCtcIi9VSV9RdWlya3kxLm1wM1wiKTtcbmNvbnN0IGNoYW5nZVBlZ1NvdW5kID0gU291bmQuY3JlYXRlKGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKFwic291bmRzXCIpLnBhdGgrXCIvVUlfUXVpcmt5XzUyLm1wM1wiKTtcblxuZnVuY3Rpb24gY3JlYXRlVmlld01vZGVsKCkge1xuXHRTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwibWFpbi1wYWdlXCIpO1xuXG5cdGNvbnN0IHZpZXdNb2RlbCA9IE9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG5cdFx0dHV0b3JpYWw6IGZhbHNlLFxuXHRcdGd1ZXNzQ291bnQ6IDAsIC8vdGhlIG51bWJlciBvZiBndWVzc2VzIGZvcm0gMS0xMlxuXHRcdGlzQ2hlYXRlck1vZGVFbmFibGVkOiBmYWxzZSwgLy9mbGFnIGZvciBzaG93aW5nIHRoZSBzb2x1dGlvbiBmb3IgY2hlYXRlcnNcblx0XHQvL2RlZnVhbHQgYXJyYXkgb2YgcGVncyBmb3IgcGxheWluZyB0aGUgZ2FtZVxuXHRcdHBlZ3M6IFtcblx0XHRcdHsgbmFtZTogXCJibHVlXCIsIGNoYXJhY3RlcjogXCLwn5S1XCJ9LFxuXHRcdFx0eyBuYW1lOiBcImJsYWNrXCIsIGNoYXJhY3RlcjogXCLimqtcIn0sXG5cdFx0XHR7IG5hbWU6IFwid2hpdGVcIiwgY2hhcmFjdGVyOiBcIuKaqlwifSxcblx0XHRcdHsgbmFtZTogXCJyZWRcIiwgY2hhcmFjdGVyOiBcIvCflLRcIn0sXG5cdFx0XHR7IG5hbWU6IFwiYmx1ZS1hbmQtd2hpdGVcIiwgY2hhcmFjdGVyOiBcIuKPuu+4j1wifSxcblx0XHRcdHsgbmFtZTogXCJob2xsb3ctcmVkXCIsIGNoYXJhY3RlcjogXCLirZVcIn1cblx0XHRdLFxuXHRcdGdhbWVzOiBuZXcgQXJyYXkoKSwgLy9jb250YWluZXIgZm9yIG9sZCBnYW1lc1xuXHRcdGNvZGU6IG5ldyBBcnJheSgpLCAvL2NvbnRhaW5lciBmb3IgdGhlIHNvbHV0aW9uXG5cdFx0Ly9jcmVhdGUgY29kZSBmb3IgcGxheWVyIHRvIHNvbHZlXG5cdFx0Y3JlYXRlQ29kZTogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IHNvbHV0aW9uID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInNvbHV0aW9uXCIpO1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRsZXQgcGVnID0gdGhpcy5wZWdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnBlZ3MubGVuZ3RoKV07XG5cdFx0XHRcdHRoaXMuY29kZS5wdXNoKHBlZyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0bGFiZWwudGV4dCA9IHBlZy5uYW1lK1wiOiBcIitwZWcuY2hhcmFjdGVyK1wiIFwiO1xuXHRcdFx0XHRzb2x1dGlvbi5hZGRDaGlsZChsYWJlbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL2NyZWF0ZXMgYSByb3cgb2YgcGVncyBmb3IgdGhlIHBsYXllciB0byBjaGFuZ2UgZWFjaCBndWVzc1xuXHRcdGNyZWF0ZVJvdzogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Ly9jcmVhdGUgbmV3IHBlZ3MgYW5kIGd1ZXNzIGJ1dHRvblxuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0bGV0IHN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7XG5cdFx0XHRzdGFjay5pZCA9IFwicGVnc1wiO1xuXHRcdFx0c3RhY2sub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0bGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcblx0XHRcdFx0YnV0dG9uLnRleHQgPSBcIvCflLVcIjtcblx0XHRcdFx0YnV0dG9uLndpZHRoID0gMjU7XG5cdFx0XHRcdGJ1dHRvbi5vbihcInRhcFwiLCB0aGlzLm9uQ2hhbmdlUGVnLCB0aGlzKTtcblx0XHRcdFx0c3RhY2suYWRkQ2hpbGQoYnV0dG9uKTtcblx0XHRcdH1cblx0XHRcdGxldCBndWVzc0J1dHRvbiA9IG5ldyBCdXR0b24oKTtcblx0XHRcdGd1ZXNzQnV0dG9uLnRleHQgPSBcIkd1ZXNzXCI7XG5cdFx0XHRndWVzc0J1dHRvbi5vbihcInRhcFwiLCB0aGlzLm9uR3Vlc3MsIHRoaXMpO1xuXHRcdFx0XG5cdFx0XHRib2FyZC5hZGRDaGlsZChzdGFjayk7XG5cdFx0XHRib2FyZC5hZGRDaGlsZChndWVzc0J1dHRvbik7XG5cdFx0fSxcblx0XHQvL3RvZ2dsZXMgY2hlYXRlciBtb2RlIHRvIG9uIGFuZCBvZmZcblx0XHRvblRvZ2dsZUNoZWF0ZXJNb2RlOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQgPSAhdGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZDtcblx0XHR9LFxuXHRcdC8vd2hlbiB0aGUgcGFnZSBsb2FkcyBjcmVhdGUgYSBuZXcgZ2FtZSBhbmQgZ2V0IGd1ZXNzQ291bnRcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiSVMgVFVUT1JJQUw6XCIrdGhpcy50dXRvcmlhbCk7XG5cdFx0XHRpZih0aGlzLmNvZGUubGVuZ3RoICE9PSAwKSByZXR1cm47IC8vaWYgbm8gY29kZSB0aGVuIHJldHVyblxuXHRcdFx0XG5cdFx0XHQvL3doZW4gdGhlIGFwcCBpcyBzdGFydGVkIGNyZWF0ZSBmaXJzdCBjb2RlIHRvIHNvbHZlXG5cdFx0XHR0aGlzLmNvZGUgPSBnbG9iYWwuY29kZTsgLy9yZXN0b3JlIGN1cnJlbnQgY29kZSB0byBzb2x2ZVxuXHRcdFx0aWYoZ2xvYmFsLmZpcnN0UnVuKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlQ29kZShhcmdzKTtcblx0XHRcdFx0Z2xvYmFsLmZpcnN0UnVuID0gZmFsc2U7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY29kZSlcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ndWVzc0NvdW50ID0gZ2xvYmFsLmd1ZXNzQ291bnQ7IC8vcmVzdG9yZSB0aGUgZ3Vlc3MgY291bnRcblx0XHRcdFxuXHRcdFx0Ly8gcHJldmVudHMgY3Jhc2ggb24gZmlyc3QgbG9hZFxuXHRcdFx0Ly8gaWYodHlwZW9mKGdsb2JhbC5nYW1lcykgPT09IHR5cGVvZih7fSkgJiYgT2JqZWN0LmtleXMoZ2xvYmFsLmdhbWVzKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0Ly8gXHRnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcblx0XHRcdC8vIH1cblx0XHRcdHRoaXMuZ2FtZXMgPSBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImRhdGFcIikpOyAvL3Jlc3RvcmUgZ2FtZSBoaXN0b3J5XG5cdFx0XHR0aGlzLm9uTmV3R2FtZShhcmdzKTtcblx0XHRcdGlmKHRoaXMudHV0b3JpYWwpIHRoaXMuU3RhcnRXYWxrdGhyb3VnaChhcmdzKTtcblx0XHR9LFxuXHRcdC8vZ28gdG8gdGhlIHNjb3JlIGJvYXJkIHBhZ2Vcblx0XHRvblNjb3JlUHJlc3NlZDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Z2xvYmFsLmd1ZXNzQ291bnQgPSB0aGlzLmd1ZXNzQ291bnQgLy9zYXZlIGd1ZXNzIGNvdW50XG5cdFx0XHRnbG9iYWwuZ2FtZXMgPSB0aGlzLmdhbWVzOyAvL3NhdmUgZ2FtZSBoaXN0b3J5XG5cdFx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2FtZXMpKTtcblx0XHRcdEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG5cdFx0XHRcdG1vZHVsZU5hbWU6IFwic2NvcmUtcGFnZS9zY29yZS1wYWdlXCIsXG5cdFx0XHRcdGNvbnRleHQ6IHtcblx0XHRcdFx0XHRnYW1lczogdGhpcy5nYW1lc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8vY3JlYXRlcyB0aGUgaGludCBmb3IgdGhlIHBsYXllcnMgY3VycmVudCBndWVzc1xuXHRcdGdpdmVIaW50OiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgaGludCA9IGFyZ3MucGFnZS5nZXRWaWV3QnlJZChcImhpbnRcIik7IC8vd2hlcmUgdGhlIGhpbnQgd2lsbCBiZSBzdG9yZWRcblx0XHRcdGhpbnQucmVtb3ZlQ2hpbGRyZW4oKTsgLy9jbGVhciBwcmV2aW91cyBoaW50XG5cblx0XHRcdGxldCBwZWdBcnIgPSBhcmdzLnBlZ0FycjsgLy9wbGF5ZXJzIGd1ZXNzXG5cdFx0XHRsZXQgY29kZUFyciA9IG5ldyBBcnJheSgpOyAvL2FycmF5IHRvIHN0b3JlIHRoZSByaWdodCBzb2x1dGlvbiB3aXRob3V0IHRoZSBqc29uIGRhdGFcblx0XHRcdHRoaXMuY29kZS5mb3JFYWNoKHBlZyA9PiB7IGNvZGVBcnIucHVzaChwZWcuY2hhcmFjdGVyKTsgfSk7IC8vbWFrZSBuZXcgYXJyYXkgd2l0aG91dCBqc29uIGRhdGFcblxuXHRcdFx0bGV0IGhpbnRBcnIgPSBuZXcgQXJyYXkoNCk7IC8vYXJyYXkgd2hlcmUgaGludHMgd2lsbCBiZSBzdG9yZWRcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBwZWdBcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdC8vY29ycmVjdCBjb2xvciBhbmQgcG9zaXRpb25cblx0XHRcdFx0aWYocGVnQXJyW2ldID09IGNvZGVBcnJbaV0pIGxhYmVsLnRleHQgPSBcIlBvc2l0aW9uIFwiKyhpKzEpK1wiOiBcIitjb2RlQXJyW2ldK1wiLT4gcmlnaHQgY29sb3IgcmlnaHQgcG9zaXRpb25cIjtcblx0XHRcdFx0Ly9jb3JyZWN0IGNvbG9yIHdyb25nIHBvc2l0aW9uXG5cdFx0XHRcdGVsc2UgaWYoY29kZUFyci5pbmNsdWRlcyhwZWdBcnJbaV0pKSB7XG5cdFx0XHRcdFx0bGFiZWwudGV4dCA9IFwiUG9zaXRpb24gXCIrKGkrMSkrXCI6IFwiK3BlZ0FycltpXStcIi0+IHJpZ2h0IGNvbG9yIHdyb25nIHBvc2l0aW9uXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aGludEFycltpXSA9IGxhYmVsO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgaGludFN0YWNrID0gbmV3IFN0YWNrTGF5b3V0KCk7IC8vc3RvcmVzIHRoZSBoaW50cyBmb3IgdGhlIHBsYXllclxuXHRcdFx0bGV0IGd1ZXNzU3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTsgLy9zdG9yZXMgdGhlIHVzZXJzIG1vc3QgcmVjZW50IGd1ZXNzXG5cdFx0XHRndWVzc1N0YWNrLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cdFx0XHRcblx0XHRcdGxldCBndWVzcyA9IG5ldyBMYWJlbCgpOyAvL2Rpc3BsYXkgdGhlIHBsYXllcnMgZ3Vlc3Ncblx0XHRcdGd1ZXNzLnRleHQgPSBcIllvdXIgR3Vlc3M6IFwiO1xuXHRcdFx0Z3Vlc3NTdGFjay5hZGRDaGlsZChndWVzcyk7XG5cblx0XHRcdC8vcGFyc2UgcGxheWVycyBndWVzcyBhbmQgY3JlYXRlIHhtbCBmb3IgaXRcblx0XHRcdHBlZ0Fyci5mb3JFYWNoKHBlZyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHBlZyk7XG5cdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHRsYWJlbC50ZXh0ID0gcGVnO1xuXHRcdFx0XHRndWVzc1N0YWNrLmFkZENoaWxkKGxhYmVsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvL2FkZCB0aGUgaGludHMgZm9ybSBoaW50QXJyIHRvIGhpbnRTdGFja1xuXHRcdFx0aGludEFyci5mb3JFYWNoKHBlZ0hpbnQgPT4ge1xuXHRcdFx0XHRoaW50U3RhY2suYWRkQ2hpbGQocGVnSGludCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aGludC5hZGRDaGlsZChndWVzc1N0YWNrKTsgLy9hZGQgcGxheWVycyBjdXJyZW50IGd1ZXNzXG5cdFx0XHRoaW50LmFkZENoaWxkKGhpbnRTdGFjayk7IC8vYWRkIGhpbnQgZm9yIHRoZSBwbGF5ZXJcblx0XHR9LFxuXHRcdC8vc3VibWl0IGEgZ3Vlc3Ncblx0XHRvbkd1ZXNzOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgYnV0dG9uID0gYXJncy5vYmplY3Q7XG5cdFx0XHRsZXQgcGVncyA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJwZWdzXCIpO1xuXHRcdFx0cGVncy5pZCA9IFwiXCI7XG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQrKztcblxuXHRcdFx0Ly9kaXNhYmxlIGVhY2ggcGVnIGFuZCBhZGQgdG8gYXJyYXlcblx0XHRcdGxldCBwZWdBcnIgPSBuZXcgQXJyYXkoKTtcblx0XHRcdHBlZ3MuZWFjaENoaWxkKGZ1bmN0aW9uKGNoaWxkKSB7XG5cdFx0XHRcdHBlZ0Fyci5wdXNoKGNoaWxkLnRleHQpO1xuXHRcdFx0XHRjaGlsZC5pc0VuYWJsZWQgPSBmYWxzZTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvL2NoZWNrIGlmIHBsYXllciB3b25cblx0XHRcdGxldCB3b24gPSB0cnVlO1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY29kZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZihwZWdBcnJbaV0gIT0gdGhpcy5jb2RlW2ldLmNoYXJhY3Rlcikgd29uID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vY2hlY2sgd2luIGFuZCBsb3NlIGNvbmRpdGlvbnNcblx0XHRcdGxldCBib2FyZCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJib2FyZFwiKTtcblx0XHRcdGxldCBjdXJyZW50Qm9hcmQgPSBuZXcgQXJyYXkoKTsgLy91c2VkIHRvIGNvcHkgY3VycmVudCB3aW5uaW5nIGJvYXJkXG5cdFx0XHRsZXQgY3VycmVudFJvdyA9IG5ldyBBcnJheSgpOyAvL3VzZWQgdG8gZ2V0IGVhY2ggcm93IG9mIGN1cnJlbnQgYm9hcmRcblx0XHRcdGlmKHdvbikge1xuXHRcdFx0XHRjdXJyZW50Qm9hcmQgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0Ym9hcmQuZWFjaENoaWxkKHN0YWNrID0+IHtcblx0XHRcdFx0XHRjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdFx0c3RhY2suZWFjaENoaWxkKGJ1dHRvbiA9PiB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Um93LnB1c2goYnV0dG9uLnRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGN1cnJlbnRCb2FyZC5wdXNoKGN1cnJlbnRSb3cpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgY3VycmVudEdhbWUgPSB7IGJvYXJkOiBjdXJyZW50Qm9hcmQsIGd1ZXNzQ291bnQ6IHRoaXMuZ3Vlc3NDb3VudCwgaXNXaW46IHRydWUsIHNvbHV0aW9uOiB0aGlzLmNvZGUgfTsgXG5cdFx0XHRcdGlmKHRoaXMuZ2FtZXMubGVuZ3RoID09IDUpIHtcblx0XHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZih0aGlzLmdhbWVzW2ldLmd1ZXNzQ291bnQgPiBjdXJyZW50R2FtZS5ndWVzc0NvdW50KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2FtZXNbaV0gPSBjdXJyZW50R2FtZTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHRoaXMuZ2FtZXMucHVzaChjdXJyZW50R2FtZSk7XG5cdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5ndWVzc0NvdW50IDwgMTIpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVSb3coYXJncyk7IC8vY3JlYXRlIG5ldyByb3cgZm9yIGlucHV0dGluZyBhIGd1ZXNzXG5cdFx0XHRcdHRoaXMuZ2l2ZUhpbnQoeyBwZWdBcnI6IHBlZ0FyciwgcGFnZTogYXJncy5vYmplY3QucGFnZSB9KTsgLy9jcmVhdGVzIHRoZSBoaW50IGZvciB0aGUgcGxheWVyXG5cdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRCb2FyZCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRib2FyZC5lYWNoQ2hpbGQoc3RhY2sgPT4ge1xuXHRcdFx0XHRcdGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0XHRzdGFjay5lYWNoQ2hpbGQoYnV0dG9uID0+IHtcblx0XHRcdFx0XHRcdGN1cnJlbnRSb3cucHVzaChidXR0b24udGV4dCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y3VycmVudEJvYXJkLnB1c2goY3VycmVudFJvdyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGNvbnNvbGUubG9nKGN1cnJlbnRCb2FyZCk7XG5cdFx0XHRcdHRoaXMuZ2FtZXMucHVzaCh7IGJvYXJkOiB0aGlzLmN1cnJlbnRCb2FyZCwgZ3Vlc3NDb3VudDogMTIsIGlzV2luOiBmYWxzZSwgc29sdXRpb246IHRoaXMuY29kZSB9KTtcblx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHQvL3JlbW92ZSBjdXJyZW50IGd1ZXNzIGJ1dHRvblxuXHRcdFx0YnV0dG9uLnBhcmVudC5yZW1vdmVDaGlsZChidXR0b24pO1xuXHRcdH0sXG5cdFx0Ly9jaGFuZ2Ugd2hpY2ggY29sb3IgYSBwZWcgYnV0dG9uIGlzXG5cdFx0b25DaGFuZ2VQZWc6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBidXR0b24gPSBhcmdzLm9iamVjdDtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBlZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYodGhpcy5wZWdzW2ldLmNoYXJhY3RlciA9PSBidXR0b24udGV4dCkgIHtcblx0XHRcdFx0XHRidXR0b24udGV4dCA9IHRoaXMucGVnc1soaSsxKSV0aGlzLnBlZ3MubGVuZ3RoXS5jaGFyYWN0ZXI7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnBlZ3NbKGkrMSkldGhpcy5wZWdzLmxlbmd0aF0ubmFtZSk7XG5cdFx0XHRcdFx0Y2hhbmdlUGVnU291bmQucGxheSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly9jcmVhdGUgYSBuZXcgZ2FtZVxuXHRcdG9uTmV3R2FtZTogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Ly9yZW1vdmUgYWxsIHBlZ3MgZnJvbSBjaGVhdGVyIGhpbnRcblx0XHRcdGxldCBzb2x1dGlvbiA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJzb2x1dGlvblwiKTtcblx0XHRcdHNvbHV0aW9uLnJlbW92ZUNoaWxkcmVuKCk7XG5cdFx0XHRcblx0XHRcdC8vZ2VuZXJhdGUgYSBuZXcgY29kZSBmb3IgdGhlIHBsYXllciB0byBmaW5kXG5cdFx0XHR0aGlzLmNvZGUgPSBuZXcgQXJyYXkoKTtcblx0XHRcdHRoaXMuY3JlYXRlQ29kZShhcmdzKTtcblx0XHRcdFxuXHRcdFx0Ly9yZXNldCB2YXJzIHRvIGRlZmF1bHRcblx0XHRcdHRoaXMuZ3Vlc3NDb3VudCA9IDA7XG5cdFx0XHRnbG9iYWwuZ3Vlc3NDb3VudCA9IDA7XG5cdFx0XHRnbG9iYWwuY29kZSA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Z2xvYmFsLmdhbWVzID0gbmV3IEFycmF5KCk7XG5cdFx0XHR0aGlzLmlzQ2hlYXRlck1vZGVFbmFibGVkID0gZmFsc2U7XG5cdFx0XHRcblx0XHRcdC8vcmVtb3ZlIGFsbCBwZWdzIGZvcm0gYm9hcmRcblx0XHRcdGxldCBib2FyZCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJib2FyZFwiKTtcblx0XHRcdGJvYXJkLnJlbW92ZUNoaWxkcmVuKCk7XG5cblx0XHRcdC8vY2xlYXIgaGludFxuXHRcdFx0bGV0IGhpbnQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiaGludFwiKTtcblx0XHRcdGhpbnQucmVtb3ZlQ2hpbGRyZW4oKTtcblxuXHRcdFx0Ly9jcmVhdGUgdGhlIGZpcnN0IHNsb3Rcblx0XHRcdHRoaXMuY3JlYXRlUm93KGFyZ3MpO1xuXHRcdFx0bmV3R2FtZVNvdW5kLnBsYXkoKTtcblxuXHRcdH0sXG5cdFx0U3RhcnRXYWxrdGhyb3VnaDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJXTEFLSU5HIFRIUk9VR0hcIik7XG5cdFx0XHRjb25zdCB0aXAgPSBuZXcgVG9vbFRpcChhcmdzLm9iamVjdCwge1xuXHRcdFx0XHR0ZXh0OiBcInRleHQgdGhpbmdcIixcblx0XHRcdFx0cG9zaXRpb246IFwiYm90dG9tXCIsXG5cdFx0XHRcdGhpZGVBcnJvdzogZmFsc2UsXG5cdFx0XHRcdHRleHRDb2xvcjogXCJibGFja1wiLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxuXHRcdFx0XHRzdHlsZTogXCJDdXN0b21Ub29sVGlwTGF5b3V0U3R5bGVcIixcblx0XHRcdFx0d2lkdGg6NDAwXG5cdFx0XHR9KTtcblx0XHRcdHRpcC5zaG93KCk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gdmlld01vZGVsO1xufVxuXG5leHBvcnRzLmNyZWF0ZVZpZXdNb2RlbCA9IGNyZWF0ZVZpZXdNb2RlbDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFpbi1wYWdlL21haW4tdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9