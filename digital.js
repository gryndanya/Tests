const {assert, expect} = require('chai');


describe("digital", function() {

    describe("pow", function () {

        function makeTestPow(x) {
            var expectedPow = x * x * x;

            it("при возведении " + x + " в степень 3 результат: " + expectedPow, function() {
                assert.equal(Math.pow(x, 3), expectedPow);
            });
        }

            makeTestPow(3);

    });
    describe("add", function () {

        function makeTestSum(x, y) {
            var expectedAdd = x + y;

            it('when u add '+ x + " to " + y + " result: " + expectedAdd, function () {
                assert.equal(x + y,expectedAdd);
            });
        }

            makeTestSum(5,14);
    });
    describe("sub", function () {

        function makeTestSub(x, y) {
            var expectedSub = x - y;

            it('when u sub ' + y + " from " + x + " result: " + expectedSub, function () {
                assert.equal(x - y,expectedSub);
            });
        }

        makeTestSub(18,7);
    });
    describe("sqrt",function () {

        function makeTestSqrt(x) {
            var expectedSqrt = Math.sqrt(x);

            it('when u take sqrt from ' + x + " result: " + expectedSqrt, function () {
                assert.equal(Math.sqrt(x), expectedSqrt);
            });
        }
        makeTestSqrt(25);
    });
    describe('div by zero', function () {

        function makeTestDivByZero(x, y) {
            var expectedDivByZero = Infinity;

            it('when u div ' + x + " by " + y + " result: " + expectedDivByZero, function () {
                assert.equal(x / y,expectedDivByZero);
            });
        }
        makeTestDivByZero(5, 0);
    });
    describe('number system', function () {

        function makeTestEqual(x, y) {
            var expectedResult = true;

            it('if ' + x + " is equal " + y.toString(16) + " result: " + expectedResult, function () {
                assert.equal(x, y);
            });
        }
        makeTestEqual(255,0xFF);
    });
    describe("digital and string",function () {

        function MakeTestDigitalString(x, y) {
            var expectedResult = true;

            it('if '+ x + " is equal "+ y + " result: " + expectedResult, function () {
                assert.equal(x, y) ;
            });
        }
        MakeTestDigitalString(12,'12');
    });
    describe("rounding", function () {

        function MakeTestRound(x, y) {
            var expectedResult = true;

            it('if ' + x + " is equal " + y +" result: " + expectedResult, function () {
                assert.equal(x, Math.round(y));
            });
        }
        MakeTestRound(15, 15.45);
    });
    describe('maxDig', function () {
       
        function MakeTestMaxDig(x, y, z, c, v) {
            var expectedMaxDig = z;

            it('Max number from ' + x +" "+ y +" "+ z +" "+ c +" "+ v + " is: " + expectedMaxDig, function () {
                assert.equal(Math.max(x, y, z, c, v), expectedMaxDig);
            });
        }
        MakeTestMaxDig(10,15, 88,44,4);
    });
    describe('minDig', function () {

        function MaketestMinDig(x, y, z, c, v) {
            var expectedMinDig = c;

            it('Min number from ' + x + " " + y + " " + z + " " + c + " " + v + " is: " + expectedMinDig, function () {
                assert.equal(Math.min(x, y, z, c, v), expectedMinDig);
            });
        }
        MaketestMinDig(55, 14,18,14,100);
    });
});