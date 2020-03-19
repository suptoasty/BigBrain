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
			let tip;
			var th = this.OnGuess;
			setTimeout(function() {
				tip = new ToolTip(page.getViewById("DemoButton"), {
					text: "Tap The Peg To Change It's Color",
					position: "Bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 1000);

			setTimeout(function(th){
				// tip.hide();
				tip = new ToolTip(page.getViewById("GuessButton"), {
					text: "Tap The Guess Button To Submitt The Pegs Colors and Positions",
					position: "Bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
				th
				// th(page.getViewById("GuessButton"));
			}, 5000);

			setTimeout(function(){
				// tip.hide();
				tip = new ToolTip(page.getViewById("hint"), {
					text: "Tap The Guess Button To Submitt The Pegs Colors and Positions",
					position: "Bottom",
					hideArrow: false,
					textColor: "black",
					backgroundColor: "blue",
					style: "CustomToolTipLayoutStyle",
					width:1000
				});
				tip.show();
			}, 10000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUVBQW1CLG1CQUFPLENBQUMsa0VBQWtDO0FBQzdELDRCQUE0QixtQkFBTyxDQUFDLG1DQUFpQztBQUNyRSx5QkFBeUIsbUJBQU8sQ0FBQyxrRUFBa0M7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxhQUFhLG1CQUFPLENBQUMsK0RBQTBDO0FBQy9ELFdBQVcsbUJBQU8sQ0FBQywrREFBMEM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsd0RBQTRCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLDRFQUEwQztBQUN0RSxvQkFBb0IsbUJBQU8sQ0FBQyxpRkFBdUM7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLGlEQUF3QjtBQUM5QyxhQUFhLG1CQUFPLENBQUMsK0RBQTBDO0FBQy9ELGdCQUFnQixtQkFBTyxDQUFDLGlEQUFzQjs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksK0JBQStCO0FBQ25DLElBQUksOEJBQThCO0FBQ2xDLElBQUkseUNBQXlDO0FBQzdDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDOztBQUV2QztBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qyx5QkFBeUI7O0FBRXpCLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0IsNkJBQTZCLDZCQUE2QixFQUFFLEVBQUU7O0FBRTlELDhCQUE4QjtBQUM5QixpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLOztBQUVMLHVCQUF1QixzRjtBQUN2QjtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUk7QUFDSix5QkFBeUI7QUFDekIsbUJBQW1CLHlDQUF5QyxFQUFFOztBQUU5RCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxxQkFBcUIsOEVBQThFOztBQUVuRzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix5REFBeUQ7QUFDcEYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmM5NmZhNTA1MjEwNGE1NDAyNTVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XG5jb25zdCBTZWxlY3RlZFBhZ2VTZXJ2aWNlID0gcmVxdWlyZShcIi4uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2VcIik7XG5jb25zdCBPYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuY29uc3QgRnJhbWUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKS5GcmFtZTtcbmNvbnN0IEZpbGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKS5GaWxlO1xuY29uc3QgZnMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiKTtcbmNvbnN0IExhYmVsID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIikuTGFiZWw7XG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xuY29uc3QgU3RhY2tMYXlvdXQgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKS5TdGFja0xheW91dDtcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5jb25zdCBTb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmQta2FrXCIpO1xuY29uc3QgdmlldyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uXCIpLnZpZXc7XG5jb25zdCBUb29sVGlwID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b29sdGlwXCIpLlRvb2xUaXA7XG5cbmNvbnN0IG5ld0dhbWVTb3VuZCA9IFNvdW5kLmNyZWF0ZShmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcihcInNvdW5kc1wiKS5wYXRoK1wiL1VJX1F1aXJreTEubXAzXCIpO1xuY29uc3QgY2hhbmdlUGVnU291bmQgPSBTb3VuZC5jcmVhdGUoZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGb2xkZXIoXCJzb3VuZHNcIikucGF0aCtcIi9VSV9RdWlya3lfNTIubXAzXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVWaWV3TW9kZWwoKSB7XG5cdFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJtYWluLXBhZ2VcIik7XG5cblx0Y29uc3Qgdmlld01vZGVsID0gT2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcblx0XHR0dXRvcmlhbDogZmFsc2UsXG5cdFx0Z3Vlc3NDb3VudDogMCwgLy90aGUgbnVtYmVyIG9mIGd1ZXNzZXMgZm9ybSAxLTEyXG5cdFx0aXNDaGVhdGVyTW9kZUVuYWJsZWQ6IGZhbHNlLCAvL2ZsYWcgZm9yIHNob3dpbmcgdGhlIHNvbHV0aW9uIGZvciBjaGVhdGVyc1xuXHRcdC8vZGVmdWFsdCBhcnJheSBvZiBwZWdzIGZvciBwbGF5aW5nIHRoZSBnYW1lXG5cdFx0cGVnczogW1xuXHRcdFx0eyBuYW1lOiBcImJsdWVcIiwgY2hhcmFjdGVyOiBcIvCflLVcIn0sXG5cdFx0XHR7IG5hbWU6IFwiYmxhY2tcIiwgY2hhcmFjdGVyOiBcIuKaq1wifSxcblx0XHRcdHsgbmFtZTogXCJ3aGl0ZVwiLCBjaGFyYWN0ZXI6IFwi4pqqXCJ9LFxuXHRcdFx0eyBuYW1lOiBcInJlZFwiLCBjaGFyYWN0ZXI6IFwi8J+UtFwifSxcblx0XHRcdHsgbmFtZTogXCJibHVlLWFuZC13aGl0ZVwiLCBjaGFyYWN0ZXI6IFwi4o+677iPXCJ9LFxuXHRcdFx0eyBuYW1lOiBcImhvbGxvdy1yZWRcIiwgY2hhcmFjdGVyOiBcIuKtlVwifVxuXHRcdF0sXG5cdFx0Z2FtZXM6IG5ldyBBcnJheSgpLCAvL2NvbnRhaW5lciBmb3Igb2xkIGdhbWVzXG5cdFx0Y29kZTogbmV3IEFycmF5KCksIC8vY29udGFpbmVyIGZvciB0aGUgc29sdXRpb25cblx0XHQvL2NyZWF0ZSBjb2RlIGZvciBwbGF5ZXIgdG8gc29sdmVcblx0XHRjcmVhdGVDb2RlOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgc29sdXRpb24gPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwic29sdXRpb25cIik7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRcdGxldCBwZWcgPSB0aGlzLnBlZ3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMucGVncy5sZW5ndGgpXTtcblx0XHRcdFx0dGhpcy5jb2RlLnB1c2gocGVnKTtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuXHRcdFx0XHRsYWJlbC50ZXh0ID0gcGVnLm5hbWUrXCI6IFwiK3BlZy5jaGFyYWN0ZXIrXCIgXCI7XG5cdFx0XHRcdHNvbHV0aW9uLmFkZENoaWxkKGxhYmVsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vY3JlYXRlcyBhIHJvdyBvZiBwZWdzIGZvciB0aGUgcGxheWVyIHRvIGNoYW5nZSBlYWNoIGd1ZXNzXG5cdFx0Y3JlYXRlUm93OiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHQvL2NyZWF0ZSBuZXcgcGVncyBhbmQgZ3Vlc3MgYnV0dG9uXG5cdFx0XHRsZXQgYm9hcmQgPSBhcmdzLm9iamVjdC5wYWdlLmdldFZpZXdCeUlkKFwiYm9hcmRcIik7XG5cdFx0XHRsZXQgc3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTtcblx0XHRcdHN0YWNrLmlkID0gXCJwZWdzXCI7XG5cdFx0XHRzdGFjay5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbigpO1xuXHRcdFx0XHRidXR0b24udGV4dCA9IFwi8J+UtVwiO1xuXHRcdFx0XHRidXR0b24ud2lkdGggPSAyNTtcblx0XHRcdFx0aWYoaT09MykgYnV0dG9uLmlkID0gXCJEZW1vQnV0dG9uXCI7XG5cdFx0XHRcdGJ1dHRvbi5vbihcInRhcFwiLCB0aGlzLm9uQ2hhbmdlUGVnLCB0aGlzKTtcblx0XHRcdFx0c3RhY2suYWRkQ2hpbGQoYnV0dG9uKTtcblx0XHRcdH1cblx0XHRcdGxldCBndWVzc0J1dHRvbiA9IG5ldyBCdXR0b24oKTtcblx0XHRcdGd1ZXNzQnV0dG9uLnRleHQgPSBcIkd1ZXNzXCI7XG5cdFx0XHRndWVzc0J1dHRvbi5pZCA9IFwiR3Vlc3NCdXR0b25cIjtcblx0XHRcdGd1ZXNzQnV0dG9uLm9uKFwidGFwXCIsIHRoaXMub25HdWVzcywgdGhpcyk7XG5cdFx0XHRcblx0XHRcdGJvYXJkLmFkZENoaWxkKHN0YWNrKTtcblx0XHRcdGJvYXJkLmFkZENoaWxkKGd1ZXNzQnV0dG9uKTtcblx0XHR9LFxuXHRcdC8vdG9nZ2xlcyBjaGVhdGVyIG1vZGUgdG8gb24gYW5kIG9mZlxuXHRcdG9uVG9nZ2xlQ2hlYXRlck1vZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5pc0NoZWF0ZXJNb2RlRW5hYmxlZCA9ICF0aGlzLmlzQ2hlYXRlck1vZGVFbmFibGVkO1xuXHRcdH0sXG5cdFx0Ly93aGVuIHRoZSBwYWdlIGxvYWRzIGNyZWF0ZSBhIG5ldyBnYW1lIGFuZCBnZXQgZ3Vlc3NDb3VudFxuXHRcdG9uTG9hZDogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJJUyBUVVRPUklBTDpcIit0aGlzLnR1dG9yaWFsKTtcblx0XHRcdGlmKHRoaXMuY29kZS5sZW5ndGggIT09IDApIHJldHVybjsgLy9pZiBubyBjb2RlIHRoZW4gcmV0dXJuXG5cdFx0XHRcblx0XHRcdC8vd2hlbiB0aGUgYXBwIGlzIHN0YXJ0ZWQgY3JlYXRlIGZpcnN0IGNvZGUgdG8gc29sdmVcblx0XHRcdHRoaXMuY29kZSA9IGdsb2JhbC5jb2RlOyAvL3Jlc3RvcmUgY3VycmVudCBjb2RlIHRvIHNvbHZlXG5cdFx0XHRpZihnbG9iYWwuZmlyc3RSdW4pIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVDb2RlKGFyZ3MpO1xuXHRcdFx0XHRnbG9iYWwuZmlyc3RSdW4gPSBmYWxzZTtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jb2RlKVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmd1ZXNzQ291bnQgPSBnbG9iYWwuZ3Vlc3NDb3VudDsgLy9yZXN0b3JlIHRoZSBndWVzcyBjb3VudFxuXHRcdFx0XG5cdFx0XHQvLyBwcmV2ZW50cyBjcmFzaCBvbiBmaXJzdCBsb2FkXG5cdFx0XHQvLyBpZih0eXBlb2YoZ2xvYmFsLmdhbWVzKSA9PT0gdHlwZW9mKHt9KSAmJiBPYmplY3Qua2V5cyhnbG9iYWwuZ2FtZXMpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHQvLyBcdGdsb2JhbC5nYW1lcyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0Ly8gfVxuXHRcdFx0dGhpcy5nYW1lcyA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZGF0YVwiKSk7IC8vcmVzdG9yZSBnYW1lIGhpc3Rvcnlcblx0XHRcdHRoaXMub25OZXdHYW1lKGFyZ3MpO1xuXHRcdFx0aWYodGhpcy50dXRvcmlhbCkgdGhpcy5TdGFydFdhbGt0aHJvdWdoKGFyZ3MpO1xuXHRcdH0sXG5cdFx0Ly9nbyB0byB0aGUgc2NvcmUgYm9hcmQgcGFnZVxuXHRcdG9uU2NvcmVQcmVzc2VkOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRnbG9iYWwuZ3Vlc3NDb3VudCA9IHRoaXMuZ3Vlc3NDb3VudCAvL3NhdmUgZ3Vlc3MgY291bnRcblx0XHRcdGdsb2JhbC5nYW1lcyA9IHRoaXMuZ2FtZXM7IC8vc2F2ZSBnYW1lIGhpc3Rvcnlcblx0XHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nYW1lcykpO1xuXHRcdFx0RnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcblx0XHRcdFx0bW9kdWxlTmFtZTogXCJzY29yZS1wYWdlL3Njb3JlLXBhZ2VcIixcblx0XHRcdFx0Y29udGV4dDoge1xuXHRcdFx0XHRcdGdhbWVzOiB0aGlzLmdhbWVzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly9jcmVhdGVzIHRoZSBoaW50IGZvciB0aGUgcGxheWVycyBjdXJyZW50IGd1ZXNzXG5cdFx0Z2l2ZUhpbnQ6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBoaW50ID0gYXJncy5wYWdlLmdldFZpZXdCeUlkKFwiaGludFwiKTsgLy93aGVyZSB0aGUgaGludCB3aWxsIGJlIHN0b3JlZFxuXHRcdFx0aGludC5yZW1vdmVDaGlsZHJlbigpOyAvL2NsZWFyIHByZXZpb3VzIGhpbnRcblxuXHRcdFx0bGV0IHBlZ0FyciA9IGFyZ3MucGVnQXJyOyAvL3BsYXllcnMgZ3Vlc3Ncblx0XHRcdGxldCBjb2RlQXJyID0gbmV3IEFycmF5KCk7IC8vYXJyYXkgdG8gc3RvcmUgdGhlIHJpZ2h0IHNvbHV0aW9uIHdpdGhvdXQgdGhlIGpzb24gZGF0YVxuXHRcdFx0dGhpcy5jb2RlLmZvckVhY2gocGVnID0+IHsgY29kZUFyci5wdXNoKHBlZy5jaGFyYWN0ZXIpOyB9KTsgLy9tYWtlIG5ldyBhcnJheSB3aXRob3V0IGpzb24gZGF0YVxuXG5cdFx0XHRsZXQgaGludEFyciA9IG5ldyBBcnJheSg0KTsgLy9hcnJheSB3aGVyZSBoaW50cyB3aWxsIGJlIHN0b3JlZFxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHBlZ0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcblx0XHRcdFx0Ly9jb3JyZWN0IGNvbG9yIGFuZCBwb3NpdGlvblxuXHRcdFx0XHRpZihwZWdBcnJbaV0gPT0gY29kZUFycltpXSkgbGFiZWwudGV4dCA9IFwiUG9zaXRpb24gXCIrKGkrMSkrXCI6IFwiK2NvZGVBcnJbaV0rXCItPiByaWdodCBjb2xvciByaWdodCBwb3NpdGlvblwiO1xuXHRcdFx0XHQvL2NvcnJlY3QgY29sb3Igd3JvbmcgcG9zaXRpb25cblx0XHRcdFx0ZWxzZSBpZihjb2RlQXJyLmluY2x1ZGVzKHBlZ0FycltpXSkpIHtcblx0XHRcdFx0XHRsYWJlbC50ZXh0ID0gXCJQb3NpdGlvbiBcIisoaSsxKStcIjogXCIrcGVnQXJyW2ldK1wiLT4gcmlnaHQgY29sb3Igd3JvbmcgcG9zaXRpb25cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRoaW50QXJyW2ldID0gbGFiZWw7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBoaW50U3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTsgLy9zdG9yZXMgdGhlIGhpbnRzIGZvciB0aGUgcGxheWVyXG5cdFx0XHRsZXQgZ3Vlc3NTdGFjayA9IG5ldyBTdGFja0xheW91dCgpOyAvL3N0b3JlcyB0aGUgdXNlcnMgbW9zdCByZWNlbnQgZ3Vlc3Ncblx0XHRcdGd1ZXNzU3RhY2sub3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcblx0XHRcdFxuXHRcdFx0bGV0IGd1ZXNzID0gbmV3IExhYmVsKCk7IC8vZGlzcGxheSB0aGUgcGxheWVycyBndWVzc1xuXHRcdFx0Z3Vlc3MudGV4dCA9IFwiWW91ciBHdWVzczogXCI7XG5cdFx0XHRndWVzc1N0YWNrLmFkZENoaWxkKGd1ZXNzKTtcblxuXHRcdFx0Ly9wYXJzZSBwbGF5ZXJzIGd1ZXNzIGFuZCBjcmVhdGUgeG1sIGZvciBpdFxuXHRcdFx0cGVnQXJyLmZvckVhY2gocGVnID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2cocGVnKTtcblx0XHRcdFx0bGV0IGxhYmVsID0gbmV3IExhYmVsKCk7XG5cdFx0XHRcdGxhYmVsLnRleHQgPSBwZWc7XG5cdFx0XHRcdGd1ZXNzU3RhY2suYWRkQ2hpbGQobGFiZWwpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vYWRkIHRoZSBoaW50cyBmb3JtIGhpbnRBcnIgdG8gaGludFN0YWNrXG5cdFx0XHRoaW50QXJyLmZvckVhY2gocGVnSGludCA9PiB7XG5cdFx0XHRcdGhpbnRTdGFjay5hZGRDaGlsZChwZWdIaW50KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRoaW50LmFkZENoaWxkKGd1ZXNzU3RhY2spOyAvL2FkZCBwbGF5ZXJzIGN1cnJlbnQgZ3Vlc3Ncblx0XHRcdGhpbnQuYWRkQ2hpbGQoaGludFN0YWNrKTsgLy9hZGQgaGludCBmb3IgdGhlIHBsYXllclxuXHRcdH0sXG5cdFx0Ly9zdWJtaXQgYSBndWVzc1xuXHRcdG9uR3Vlc3M6IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRcdGxldCBidXR0b24gPSBhcmdzLm9iamVjdDtcblx0XHRcdGxldCBwZWdzID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInBlZ3NcIik7XG5cdFx0XHRwZWdzLmlkID0gXCJcIjtcblx0XHRcdHRoaXMuZ3Vlc3NDb3VudCsrO1xuXG5cdFx0XHQvL2Rpc2FibGUgZWFjaCBwZWcgYW5kIGFkZCB0byBhcnJheVxuXHRcdFx0bGV0IHBlZ0FyciA9IG5ldyBBcnJheSgpO1xuXHRcdFx0cGVncy5lYWNoQ2hpbGQoZnVuY3Rpb24oY2hpbGQpIHtcblx0XHRcdFx0cGVnQXJyLnB1c2goY2hpbGQudGV4dCk7XG5cdFx0XHRcdGNoaWxkLmlzRW5hYmxlZCA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vY2hlY2sgaWYgcGxheWVyIHdvblxuXHRcdFx0bGV0IHdvbiA9IHRydWU7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHBlZ0FycltpXSAhPSB0aGlzLmNvZGVbaV0uY2hhcmFjdGVyKSB3b24gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9jaGVjayB3aW4gYW5kIGxvc2UgY29uZGl0aW9uc1xuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0bGV0IGN1cnJlbnRCb2FyZCA9IG5ldyBBcnJheSgpOyAvL3VzZWQgdG8gY29weSBjdXJyZW50IHdpbm5pbmcgYm9hcmRcblx0XHRcdGxldCBjdXJyZW50Um93ID0gbmV3IEFycmF5KCk7IC8vdXNlZCB0byBnZXQgZWFjaCByb3cgb2YgY3VycmVudCBib2FyZFxuXHRcdFx0aWYod29uKSB7XG5cdFx0XHRcdGN1cnJlbnRCb2FyZCA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRib2FyZC5lYWNoQ2hpbGQoc3RhY2sgPT4ge1xuXHRcdFx0XHRcdGN1cnJlbnRSb3cgPSBuZXcgQXJyYXkoKTtcblx0XHRcdFx0XHRzdGFjay5lYWNoQ2hpbGQoYnV0dG9uID0+IHtcblx0XHRcdFx0XHRcdGN1cnJlbnRSb3cucHVzaChidXR0b24udGV4dCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y3VycmVudEJvYXJkLnB1c2goY3VycmVudFJvdyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCBjdXJyZW50R2FtZSA9IHsgYm9hcmQ6IGN1cnJlbnRCb2FyZCwgZ3Vlc3NDb3VudDogdGhpcy5ndWVzc0NvdW50LCBpc1dpbjogdHJ1ZSwgc29sdXRpb246IHRoaXMuY29kZSB9OyBcblx0XHRcdFx0aWYodGhpcy5nYW1lcy5sZW5ndGggPT0gNSkge1xuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcblx0XHRcdFx0XHRcdGlmKHRoaXMuZ2FtZXNbaV0uZ3Vlc3NDb3VudCA+IGN1cnJlbnRHYW1lLmd1ZXNzQ291bnQpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5nYW1lc1tpXSA9IGN1cnJlbnRHYW1lO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgdGhpcy5nYW1lcy5wdXNoKGN1cnJlbnRHYW1lKTtcblx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmd1ZXNzQ291bnQgPCAxMikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVJvdyhhcmdzKTsgLy9jcmVhdGUgbmV3IHJvdyBmb3IgaW5wdXR0aW5nIGEgZ3Vlc3Ncblx0XHRcdFx0dGhpcy5naXZlSGludCh7IHBlZ0FycjogcGVnQXJyLCBwYWdlOiBhcmdzLm9iamVjdC5wYWdlIH0pOyAvL2NyZWF0ZXMgdGhlIGhpbnQgZm9yIHRoZSBwbGF5ZXJcblx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudEJvYXJkID0gbmV3IEFycmF5KCk7XG5cdFx0XHRcdGJvYXJkLmVhY2hDaGlsZChzdGFjayA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdyA9IG5ldyBBcnJheSgpO1xuXHRcdFx0XHRcdHN0YWNrLmVhY2hDaGlsZChidXR0b24gPT4ge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKGJ1dHRvbi50ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjdXJyZW50Qm9hcmQucHVzaChjdXJyZW50Um93KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2coY3VycmVudEJvYXJkKTtcblx0XHRcdFx0dGhpcy5nYW1lcy5wdXNoKHsgYm9hcmQ6IHRoaXMuY3VycmVudEJvYXJkLCBndWVzc0NvdW50OiAxMiwgaXNXaW46IGZhbHNlLCBzb2x1dGlvbjogdGhpcy5jb2RlIH0pO1xuXHRcdFx0XG5cdFx0XHR9XG5cblx0XHRcdC8vcmVtb3ZlIGN1cnJlbnQgZ3Vlc3MgYnV0dG9uXG5cdFx0XHRidXR0b24ucGFyZW50LnJlbW92ZUNoaWxkKGJ1dHRvbik7XG5cdFx0fSxcblx0XHQvL2NoYW5nZSB3aGljaCBjb2xvciBhIHBlZyBidXR0b24gaXNcblx0XHRvbkNoYW5nZVBlZzogZnVuY3Rpb24oYXJncykge1xuXHRcdFx0bGV0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGVncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZih0aGlzLnBlZ3NbaV0uY2hhcmFjdGVyID09IGJ1dHRvbi50ZXh0KSAge1xuXHRcdFx0XHRcdGJ1dHRvbi50ZXh0ID0gdGhpcy5wZWdzWyhpKzEpJXRoaXMucGVncy5sZW5ndGhdLmNoYXJhY3Rlcjtcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMucGVnc1soaSsxKSV0aGlzLnBlZ3MubGVuZ3RoXS5uYW1lKTtcblx0XHRcdFx0XHRjaGFuZ2VQZWdTb3VuZC5wbGF5KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvL2NyZWF0ZSBhIG5ldyBnYW1lXG5cdFx0b25OZXdHYW1lOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHQvL3JlbW92ZSBhbGwgcGVncyBmcm9tIGNoZWF0ZXIgaGludFxuXHRcdFx0bGV0IHNvbHV0aW9uID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcInNvbHV0aW9uXCIpO1xuXHRcdFx0c29sdXRpb24ucmVtb3ZlQ2hpbGRyZW4oKTtcblx0XHRcdFxuXHRcdFx0Ly9nZW5lcmF0ZSBhIG5ldyBjb2RlIGZvciB0aGUgcGxheWVyIHRvIGZpbmRcblx0XHRcdHRoaXMuY29kZSA9IG5ldyBBcnJheSgpO1xuXHRcdFx0dGhpcy5jcmVhdGVDb2RlKGFyZ3MpO1xuXHRcdFx0XG5cdFx0XHQvL3Jlc2V0IHZhcnMgdG8gZGVmYXVsdFxuXHRcdFx0dGhpcy5ndWVzc0NvdW50ID0gMDtcblx0XHRcdGdsb2JhbC5ndWVzc0NvdW50ID0gMDtcblx0XHRcdGdsb2JhbC5jb2RlID0gbmV3IEFycmF5KCk7XG5cdFx0XHRnbG9iYWwuZ2FtZXMgPSBuZXcgQXJyYXkoKTtcblx0XHRcdHRoaXMuaXNDaGVhdGVyTW9kZUVuYWJsZWQgPSBmYWxzZTtcblx0XHRcdFxuXHRcdFx0Ly9yZW1vdmUgYWxsIHBlZ3MgZm9ybSBib2FyZFxuXHRcdFx0bGV0IGJvYXJkID0gYXJncy5vYmplY3QucGFnZS5nZXRWaWV3QnlJZChcImJvYXJkXCIpO1xuXHRcdFx0Ym9hcmQucmVtb3ZlQ2hpbGRyZW4oKTtcblxuXHRcdFx0Ly9jbGVhciBoaW50XG5cdFx0XHRsZXQgaGludCA9IGFyZ3Mub2JqZWN0LnBhZ2UuZ2V0Vmlld0J5SWQoXCJoaW50XCIpO1xuXHRcdFx0aGludC5yZW1vdmVDaGlsZHJlbigpO1xuXG5cdFx0XHQvL2NyZWF0ZSB0aGUgZmlyc3Qgc2xvdFxuXHRcdFx0dGhpcy5jcmVhdGVSb3coYXJncyk7XG5cdFx0XHRuZXdHYW1lU291bmQucGxheSgpO1xuXHRcdFx0XG5cdFx0fSxcblx0XHRTdGFydFdhbGt0aHJvdWdoOiBmdW5jdGlvbihhcmdzKSB7XG5cdFx0XHRsZXQgcGFnZSA9IGFyZ3Mub2JqZWN0LnBhZ2U7XG5cdFx0XHRsZXQgdGlwO1xuXHRcdFx0dmFyIHRoID0gdGhpcy5Pbkd1ZXNzO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dGlwID0gbmV3IFRvb2xUaXAocGFnZS5nZXRWaWV3QnlJZChcIkRlbW9CdXR0b25cIiksIHtcblx0XHRcdFx0XHR0ZXh0OiBcIlRhcCBUaGUgUGVnIFRvIENoYW5nZSBJdCdzIENvbG9yXCIsXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiQm90dG9tXCIsXG5cdFx0XHRcdFx0aGlkZUFycm93OiBmYWxzZSxcblx0XHRcdFx0XHR0ZXh0Q29sb3I6IFwiYmxhY2tcIixcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxuXHRcdFx0XHRcdHN0eWxlOiBcIkN1c3RvbVRvb2xUaXBMYXlvdXRTdHlsZVwiLFxuXHRcdFx0XHRcdHdpZHRoOjEwMDBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRpcC5zaG93KCk7XG5cdFx0XHR9LCAxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbih0aCl7XG5cdFx0XHRcdC8vIHRpcC5oaWRlKCk7XG5cdFx0XHRcdHRpcCA9IG5ldyBUb29sVGlwKHBhZ2UuZ2V0Vmlld0J5SWQoXCJHdWVzc0J1dHRvblwiKSwge1xuXHRcdFx0XHRcdHRleHQ6IFwiVGFwIFRoZSBHdWVzcyBCdXR0b24gVG8gU3VibWl0dCBUaGUgUGVncyBDb2xvcnMgYW5kIFBvc2l0aW9uc1wiLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcIkJvdHRvbVwiLFxuXHRcdFx0XHRcdGhpZGVBcnJvdzogZmFsc2UsXG5cdFx0XHRcdFx0dGV4dENvbG9yOiBcImJsYWNrXCIsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIixcblx0XHRcdFx0XHRzdHlsZTogXCJDdXN0b21Ub29sVGlwTGF5b3V0U3R5bGVcIixcblx0XHRcdFx0XHR3aWR0aDoxMDAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aXAuc2hvdygpO1xuXHRcdFx0XHR0aFxuXHRcdFx0XHQvLyB0aChwYWdlLmdldFZpZXdCeUlkKFwiR3Vlc3NCdXR0b25cIikpO1xuXHRcdFx0fSwgNTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8gdGlwLmhpZGUoKTtcblx0XHRcdFx0dGlwID0gbmV3IFRvb2xUaXAocGFnZS5nZXRWaWV3QnlJZChcImhpbnRcIiksIHtcblx0XHRcdFx0XHR0ZXh0OiBcIlRhcCBUaGUgR3Vlc3MgQnV0dG9uIFRvIFN1Ym1pdHQgVGhlIFBlZ3MgQ29sb3JzIGFuZCBQb3NpdGlvbnNcIixcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJCb3R0b21cIixcblx0XHRcdFx0XHRoaWRlQXJyb3c6IGZhbHNlLFxuXHRcdFx0XHRcdHRleHRDb2xvcjogXCJibGFja1wiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJibHVlXCIsXG5cdFx0XHRcdFx0c3R5bGU6IFwiQ3VzdG9tVG9vbFRpcExheW91dFN0eWxlXCIsXG5cdFx0XHRcdFx0d2lkdGg6MTAwMFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGlwLnNob3coKTtcblx0XHRcdH0sIDEwMDAwKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB2aWV3TW9kZWw7XG59XG5cbmV4cG9ydHMuY3JlYXRlVmlld01vZGVsID0gY3JlYXRlVmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21haW4tcGFnZS9tYWluLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYWluLXBhZ2UvbWFpbi12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=