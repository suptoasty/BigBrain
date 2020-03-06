const app = require("tns-core-modules/application");
const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

}

exports.onNavigatingTo = onNavigatingTo;
