/**
 * Created by Chris on 14/04/2016.
 */

'use strict';

function words(words) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charsLength = chars.length,
        text = '';

    for (var i = 0; i < words; i++) {
        var wordLength = Math.ceil(Math.random() * 10);
        for (var j = 0; j < wordLength; j++)
            text += chars[Math.floor(Math.random() * charsLength)];
        text += ' ';
    }

    return text;
}

module.exports = {
    createWords: words
};