const Observable = require("tns-core-modules/data/observable").Observable;
const SelectedPageService = require("../shared/selected-page-service");
const ObservableModule = require("tns-core-modules/data/observable");
const Label = require("tns-core-modules/ui/label").Label;
const Button = require("tns-core-modules/ui/button").Button;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const appSettings = require("tns-core-modules/application-settings");


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
