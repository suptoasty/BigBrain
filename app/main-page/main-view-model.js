const Observable = require("tns-core-modules/data/observable").Observable;
const SelectedPageService = require("../shared/selected-page-service");
const ObservableModule = require("tns-core-modules/data/observable");
const Frame = require("tns-core-modules/ui/frame").Frame;
const File = require("tns-core-modules/file-system/file-system").File;
const fs = require("tns-core-modules/file-system/file-system");
const Label = require("tns-core-modules/ui/label").Label;
const Button = require("tns-core-modules/ui/button").Button;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const appSettings = require("tns-core-modules/application-settings");
const Sound = require("nativescript-sound-kak");
const view = require("tns-core-modules/application/application").view;
const ToolTip = require("nativescript-tooltip").ToolTip;

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
