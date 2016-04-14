/**
 * Created by Chris on 14/04/2016.
 */

var ReadingTime = function(text) {

    var response = 'less than a minute read';
    var totalWords = text.trim().split(/\s+/g).length;

    var wordsPerSecond = 3; //180 / 60;
    var totalReadingTimeSeconds = totalWords / wordsPerSecond;

    var readingTimeMinutes = Math.round(totalReadingTimeSeconds / 60);

    if(readingTimeMinutes > 0){
        response = readingTimeMinutes + ' min read';
    }

    return {
        count: totalWords,
        text: response
    };

};

module.exports = ReadingTime;