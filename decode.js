function decode(str) {
    if (typeof (str) == "string") {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const reverse = "zyxwvutsrqponmlkjihgfedcba";
        let result = "";

        for (let i = 0; i <= str.length - 1; i++) {
            let found = false;
            var char1 = str[i]
            var char = char1.toLowerCase();
            for (let j = 0; j <= alphabet.length - 1; j++) {
                var check = alphabet[j]
                if (char === check) {
                    var read = reverse[j];
                    if (char1 != char) {
                        result = result.concat(read.toUpperCase())
                    } else {
                        result = result.concat(read);
                    }

                    found = true;
                    break;
                }
            }
            if (!found) {
                result += char
            }
        }
        return result;


    }
    else {
        return "Input is not a string"
    }
}
