"use strict";
exports.__esModule = true;
exports.PriorityEnum = exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task() {
        this.isDone = false;
        this.priority = 0;
    }
    return Task;
}());
exports.Task = Task;
var PriorityEnum;
(function (PriorityEnum) {
    PriorityEnum[PriorityEnum["easy"] = 0] = "easy";
    PriorityEnum[PriorityEnum["medium"] = 1] = "medium";
    PriorityEnum[PriorityEnum["important"] = 2] = "important";
})(PriorityEnum = exports.PriorityEnum || (exports.PriorityEnum = {}));
