"use strict";

const srcContext = require.context("./src", true, /^(?!.*\.(spec|d)\.).*\.tsx?$/);
srcContext.keys().forEach(srcContext);

const testContext = require.context("./test", true, /\.tsx?$/);
testContext.keys().forEach(testContext);
