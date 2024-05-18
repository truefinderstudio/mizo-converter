// converter.js
function unicodeToNCR(input) {
    var output = '';
    for (var i = 0; i < input.length; i++) {
        output += '&#' + input.charCodeAt(i) + ';';
    }
    return output;
}

function NCRToUnicode(input) {
    return input.replace(/&#(\d+);/g, function(match, numStr) {
        return String.fromCharCode(parseInt(numStr, 10));
    });
}

function convertText(input) {
    // Define your find and replace arrays
    var find = ["&#92;", "&#124;", "&#62;", "&#96;"]; // Placeholder: Fill with actual patterns
    var replace = ["&#7789;", "&#7788;", "&#234;", "&#8377;"]; // Placeholder: Fill with actual replacements
    for (var i = 0; i < find.length; i++) {
        var regex = new RegExp(find[i], "g");
        input = input.replace(regex, replace[i]);
    }
    return input;
}
