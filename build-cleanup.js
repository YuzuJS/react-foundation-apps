var replace = require("replace");
var rimraf = require("rimraf");

replace({
    regex: "bower_components\n",
    replacement: "",
    paths: ["./.gitignore"]
});

rimraf("src", function () {});
