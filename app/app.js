const application = require("tns-core-modules/application");
const appSettings = require("tns-core-modules/application-settings");


global.firstRun = true;
global.guessCount = 0;
global.code = new Array();
global.games = JSON.parse(appSettings.getString("data","{}"));

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
