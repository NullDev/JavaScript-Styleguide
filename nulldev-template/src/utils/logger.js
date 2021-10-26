"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

/**
 * Formats the current time
 *
 * @returns {String} Time
 */
let getDate = function(){
    const date = new Date();
    let hourData = date.getHours();
    let minData = date.getMinutes();
    let secData = date.getSeconds();

    let hour = (hourData < 10 ? "0" : "") + hourData;
    let min = (minData  < 10 ? "0" : "") + minData;
    let sec = (secData  < 10 ? "0" : "") + secData;

    return "[" + hour + ":" + min + ":" + sec + "]";
};

/**
 * Get the StackTrace of the calee function
 *
 * @returns {String} StackTrace
 */
let getTrace = function(){
    let err = new Error();
    let splitArr = err.stack.split("\n").filter((_, index) => index > 1);
    let cleanArr = "";

    for (let element of splitArr){
        if (element.match(/(node_modules)/gi)) break;
        cleanArr += cleanArr.length ? "                 " : "";
        cleanArr += element.replace(/(    at )/gi, "") + "\n";
    }
    return cleanArr.substring(0, cleanArr.lastIndexOf("\n")) + cleanArr.substring(cleanArr.lastIndexOf("\n") + 1);
};

module.exports = {
    error(input){
        console.log(
            " \x1b[41m\x1b[315m x \x1b[0m\x1b[31m [ERROR] " + getDate() + " - " + input + "\n" +
            "     StackTrace: " + getTrace() + "\x1b[0m"
        );
    },

    warn(input){
        console.log(" \x1b[43m\x1b[30m ! \x1b[0m\x1b[33m [WARN]  " + getDate() + " - " + input + "\x1b[0m");
    },

    info(input){
        console.log(" \x1b[44m\x1b[30m i \x1b[0m\x1b[36m [INFO]  " + getDate() + " - " + input + "\x1b[0m");
    },

    done(input){
        console.log(" \x1b[42m\x1b[30m ✓ \x1b[0m\x1b[32m [DONE]  " + getDate() + " - " + input + "\x1b[0m");
    }
};
