/**
 * Created by Chris on 14/04/2016.
 */

'use strict';

var path = require('path'),
    chai = require('chai'),
    expect = chai.expect,
    ReadingTime = require(path.join(__dirname, '..', 'src/reading-time.js')),
    helper = require(path.join(__dirname, '..', 'test/helper.js'));

function assertThis(wordCount, expectedText) {

    var words = helper.createWords(wordCount);
    var readingTime = ReadingTime(words);

    expect(readingTime.text).to.equal(expectedText);
}

describe('ReadingTime', function() {

    describe('count', function() {

        var readingTime = {}, wordCount = 0;

        beforeEach(function() {
            var words = helper.createWords(wordCount);
            readingTime = ReadingTime(words);
        });

        context('given 10 words', function() {

            wordCount = 10;

            it('then return 10', function() {
               expect(readingTime.count).to.equal(wordCount);
            });

        });

        context('given 255 words', function() {

            wordCount = 255;

            it('then return 10', function() {
                expect(readingTime.count).to.equal(wordCount);
            });

        });

    });

    describe('text', function() {

        context('less than a minute read', function () {

            var expectedText = 'less than a minute read';

            it('When empty', function () {
                assertThis(0, expectedText);
            });

            it('Given 1 word', function () {
                assertThis(1, expectedText);
            });

            it('Given 10 words', function () {
                assertThis(10, expectedText);
            });
        });

        context('1 min read', function () {

            var expectedText = '1 min read';

            it('Given 100 words', function () {
                assertThis(100, expectedText);
            });

            it('Given 200 words', function () {
                assertThis(200, expectedText);
            });
        });

        context('2 min read', function () {

            var expectedText = '2 min read';

            it('Given 300 words', function () {
                assertThis(300, expectedText);
            });

            it('Given 400 words', function () {
                assertThis(400, expectedText);
            });
        });

        context('3 min read', function () {

            var expectedText = '3 min read';

            it('Given 500 words', function () {
                assertThis(500, expectedText);
            });

            it('Given 600 words', function () {
                assertThis(600, expectedText);
            });
        });

        context('when queried with random words', function () {

            context('with more than 100 words', function () {

                var readingTime = {}, wordCount = 0;

                before(function () {
                    wordCount = Math.round((Math.random() * 100) + 100);
                    var words = helper.createWords(wordCount);
                    readingTime = ReadingTime(words);

                    console.log('running test with a total word count of:', wordCount);
                })

                it('should return a string', function () {
                    expect(readingTime.text).be.a('string');
                });

                it('should end with "min read"', function () {
                    expect(readingTime.text).to.contain('min read');
                });
            });

        });
    });

});