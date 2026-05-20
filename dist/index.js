"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoLog = exports.warningLog = exports.errorLog = exports.successLog = void 0;
const chalk_1 = __importDefault(require("chalk"));
const log = console.log;
const colors = {
    SUCCESS: chalk_1.default.greenBright.bold,
    ERROR: chalk_1.default.redBright.bold,
    WARNING: chalk_1.default.yellowBright.bold,
    INFO: chalk_1.default.blueBright.bold
};
const handler = (msg, action) => {
    const breakWord = (text, limit = 40) => {
        return text.match(new RegExp(`.{1,${limit}}`, 'g'))?.join('\n') || text;
    };
    const formattedMsg = breakWord(msg);
    const size = Math.min(40, msg.length + action.length + 5);
    const msgWithColors = chalk_1.default.white.dim(formattedMsg);
    const setColor = colors[action];
    const dash = "-".repeat(size);
    log('\n' + setColor(dash));
    log(setColor(action), ' - ' + setColor(msgWithColors));
    log(dash);
};
const successLog = (msg = "Operation completed successfully!") => handler(msg, 'SUCCESS');
exports.successLog = successLog;
const errorLog = (msg = "Something went wrong. Please try again.") => handler(msg, 'ERROR');
exports.errorLog = errorLog;
const warningLog = (msg = "Potential issue identified.") => handler(msg, 'WARNING');
exports.warningLog = warningLog;
const infoLog = (msg = "Just a heads up") => handler(msg, 'INFO');
exports.infoLog = infoLog;
