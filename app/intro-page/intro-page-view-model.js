const Observable = require("tns-core-modules/data/observable").Observable;
const SelectedPageService = require("../shared/selected-page-service");
const ObservableModule = require("tns-core-modules/data/observable");
const Label = require("tns-core-modules/ui/label").Label;
const Button = require("tns-core-modules/ui/button").Button;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const appSettings = require("tns-core-modules/application-settings");
const Frame = require("tns-core-modules/ui/frame").Frame;
const File = require("tns-core-modules/file-system/file-system").File;
const fs = require("tns-core-modules/file-system/file-system");
const Sound = require("nativescript-sound-kak");
const observableArray = require("tns-core-modules/data/observable-array").ObservableArray;

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

exports.createViewModel = createViewModel