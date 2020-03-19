const app = require("tns-core-modules/application");
const createViewModel = require("./intro-page-view-model").createViewModel;
const File = require("tns-core-modules/file-system/file-system").File;


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

    const data = page.navigationContext;
}

exports.onNavigatingTo = onNavigatingTo;