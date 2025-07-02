const OT = (function () {
    const capitalize = function (word) {
        return String(word).charAt(0).toUpperCase() + String(word).slice(1);
    }

    const reverse = function (word) {
        return String(word).split('').reverse().join('');
    }

    const caesarCipher = function (aString, shiftFactor) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let plaintext = '';
        aString.split('').forEach((letter) => {
            let newLetter;

            let newIndx = alphabet.indexOf((letter.toLowerCase())) > -1 ? alphabet.indexOf(letter.toLowerCase()) + shiftFactor : -1;
            if (newIndx > 25) {
                newIndx = newIndx - 26;
                newLetter = alphabet[newIndx];
            } else if (newIndx > -1) {
                newLetter = alphabet[newIndx];
            } else {
                console.log(`newLetter should be ${letter}`);
                newLetter = letter;
            }

            if (letter.toUpperCase() === letter && !/[,! ]/.test(letter)) {
                newLetter = newLetter.toUpperCase();
            }

            plaintext = plaintext + newLetter;

        });

        return plaintext;
    };

    const analyzeArray = function (arr) {
        const sum = arr.reduce((prev, curr) => prev + curr);
        const average = sum / arr.length;
        arr.sort((a, b) => a - b);
        const min = arr[0];
        const max = arr.at(-1);
        const length = arr.length;

        return { average, min, max, length }

    }

    return {
        capitalize,
        reverse,
        caesarCipher,
        analyzeArray,
    }
})();

export default OT;