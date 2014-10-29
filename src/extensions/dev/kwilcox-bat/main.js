/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds Batch File Support...??? */
define(function (require, exports, module) {
    "use strict";
    
    var LanguageManager = brackets.getModule("language/LanguageManager");
    
    LanguageManager.defineLanguage("batch", {
        name: "Batch",
        mode: ["batch", "application/x-bat"],
        fileExtensions: ["bat", "cmd"],
        lineComment: ["REM "]
    }).done(function (language) {
        console.log("Language " + language.getName() + " is now available!");
    });
});