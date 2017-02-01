"use strict";
function onViewLoaded(args) {
    alert("TAB 1 is loaded");
}
exports.onViewLoaded = onViewLoaded;
function onViewUnloaded(args) {
    console.log("TAB 2 is unloaded");
}
exports.onViewUnloaded = onViewUnloaded;
//# sourceMappingURL=tabOne.js.map