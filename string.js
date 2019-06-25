const {assert, expect} = require('chai');

describe("string", function() {

    describe('length', function () {

        function MakeTestLength(x) {
            var expectedLength = true;

            it('if word ' + x + " length equal 5 result:" + expectedLength, function () {
                assert.equal(x.length , 5);
            });
        }
        MakeTestLength('Anton');
    });
    describe('UpCase', function () {

        function MakeTestToUp(x) {
            var expectedUpCase = 'RIDE';

            it('if UpperCase func is working - ride will become :' + expectedUpCase, function () {
                assert.equal(x.toUpperCase(), expectedUpCase);
            });
        }
        MakeTestToUp('ride');
    });
    describe('LowCase', function () {

        function MakeTestToLow(x) {
            var expectedUpCase = 'ride';

            it('if LowerCase func is working - RIDE will become :' + expectedUpCase, function () {
                assert.equal(x.toLowerCase(), expectedUpCase);
            });
        }
        MakeTestToLow('RIDE');
    });
    describe('IndexOf', function () {

        function MakeTestIndexOf(x) {
            var expectedIndexOf = 5;

            it('if IndexOf func is working - in Microsoft we will find soft on pos: ' + expectedIndexOf, function () {
                assert.equal(x.indexOf("soft"), expectedIndexOf);
            });
        }
        MakeTestIndexOf("Microsoft");
    });
    describe('LastIndexOf', function () {

        function MakeTestLastIndexOf(x) {
            var expectedLastIndexOf = 5;

            it('if LastIndexOf func is working - in Microsoft we will find soft on pos: ' + expectedLastIndexOf, function () {
                assert.equal(x.lastIndexOf("soft"), expectedLastIndexOf);
            });
        }
        MakeTestLastIndexOf("Microsoft");
    });
    describe('IndexOf + ~', function () {

        function MakeTestIndexOf(x) {
            var expectedIndexOf = "soft";

            it('if ~IndexOf func is working - in Microsoft we will find soft : ' + expectedIndexOf, function () {
                if (~x.indexOf('soft')) {

                }else {
                    assert(~x.indexOf('soft') != -1);
                }
            });
        }
        MakeTestIndexOf("Microsoft");
    });
    describe('Slice', function () {

        function MakeTestSlice(x) {
            var expectedSlice = "Mi";

            it('if Slice func is working - in Microsoft we will find : ' + expectedSlice, function () {
                assert.equal(x.slice(0, 2), expectedSlice);
            });
        }
        MakeTestSlice("Microsoft");
    });
    describe('SubString', function () {

        function MakeTestSubString(x) {
            var expectedSubString = 'Mic';

            it('if subString func is working - in Microsoft we will find : ' + expectedSubString, function () {
                assert.equal(x.substring(0, 3), expectedSubString);
            });
        }
        MakeTestSubString("Microsoft");
    });
    describe('SubStr', function () {

        function MakeTestSubStr(x) {
            var expectedSubStr = 'crosoft';

            it('if Substr func is working - in Microsoft we will find : ' + expectedSubStr, function () {
                assert.equal(x.substr(2), expectedSubStr);
            });
        }
        MakeTestSubStr("Microsoft");
    });
    describe('LetterNumb', function () {

        function MakeTest(x) {
            var expected = 97;

            it('charcode of '+ x + ' is: ' + expected, function () {
                assert.equal(x.charCodeAt(0), expected);
            });
        }
        MakeTest('a');
    });
    describe('Letter', function () {

        function MakeTest(x, y) {
            var expected = true;

            it('charcode of '+ y + ' is bigeer the '+ x + ' : ' + expected, function () {
                assert(x.charCodeAt(0) < y.charCodeAt(0));
            });
        }
        MakeTest('a', 'z');
    });
    describe('Equal ', function () {

        function MakeTest(x, y) {
            var expected = 0;

            it('if '+ x + ' is equal  '+ y + ' result: ' + expected, function () {
                assert.equal(x.localeCompare(y), expected);
            });
        }
        MakeTest('a', 'a');
    });
    describe('Bigger ', function () {

        function MakeTest(x, y) {
            var expected = 1;

            it('if '+ x + ' is bigger than  '+ y + ' result: ' + expected, function () {
                assert.equal(x.localeCompare(y), expected);
            });
        }
        MakeTest('z', 'a');
    });
    describe('Less ', function () {

        function MakeTest(x, y) {
            var expected = -1;

            it('if '+ x + ' is less then  '+ y + ' result: ' + expected, function () {
                assert.equal(x.localeCompare(y), expected);
            });
        }
        MakeTest('a', 'j');
    });
});