"use strict";

// Utils
let conf = require("./utils/configHandler");
let log = require("./utils/logger");

const version = conf.getVersion();
const appname = conf.getName();
const splashPadding = 12 + appname.length + version.toString().length;

console.log(
    `\n #${"-".repeat(splashPadding)}#\n` +
    ` # Started ${appname} v${version} #\n` +
    ` #${"-".repeat(splashPadding)}#\n\n` +
    ` Copyright (c) ${(new Date()).getFullYear()} ${conf.getAuthor()}\n`
);

const config = conf.getConfig();
log.done(`Started. Loaded ${Object.keys(config).length} config values.`);

// ...
