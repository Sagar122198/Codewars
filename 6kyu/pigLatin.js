function pigLatin(string) {
    if (/^[a-zA-Z]+$/.test(string)) {
        if (string[0] == "a" || string[0] == "e" || string[0] == "i" || string[0] == "o" || string[0] == "u" || string[0] == "A" || string[0] == "E" || string[0] == "I" || string[0] == "O" || string[0] == "U") {
            string = string.concat("way");
            return string.toLowerCase()
        } else {
            for (let i = 1, j = 0; i <= string.length - 1, j <= string.length - 1; i++, j++) {
                var upString = string.slice(i) + string.slice(0, j + 1);
                if (upString[0] == "a" || upString[0] == "e" || upString[0] == "i" || upString[0] == "o" || upString[0] == "u" || upString[0] == "A" || upString[0] == "E" || upString[0] == "I" || upString[0] == "O" || upString[0] == "U") {
                    upString = upString.concat("ay");
                    return upString.toLowerCase()
                }
            }

        }
        string = string.concat("ay")
        return string.toLowerCase()
    } else {
        return null;
    }
}