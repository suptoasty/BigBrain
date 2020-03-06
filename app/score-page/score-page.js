const app = require("tns-core-modules/application");
const createViewModel = require("./score-page-view-model").createViewModel;
const File = require("tns-core-modules/file-system/file-system").File;


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

    const data = page.navigationContext;
    //page.bindingContext.set("scores", data.games);
}

exports.onNavigatingTo = onNavigatingTo;
