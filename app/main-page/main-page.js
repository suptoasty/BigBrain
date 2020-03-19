const app = require("tns-core-modules/application");
const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new createViewModel();

    const data = page.navigationContext;
    page.bindingContext.set("tutorial", data.tutorial);

}

exports.onNavigatingTo = onNavigatingTo;
