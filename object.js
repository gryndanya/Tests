const {assert, expect} = require('chai');

describe('object', function () {

    describe('property1', function () {

        function MakeTest(expected) {
            var author = {};
            author.name = 'Tony';

            it('is propertie '+ author.name + ' is equal ' + expected + ' : ' + true, function () {
                assert.equal(author.name, expected);
            });
        }
       MakeTest('Tony');
    });
    describe('property2', function () {

        function MakeTest(expected) {
            var author = {};
            author.name = 'Tony';
            author.age = 20;
            author.info = author.name + ': ' + author.age;

            it('is propertie '+ author.info + ' is equal ' + expected + ' : ' + true, function () {
                assert.equal(author.info, expected);
            });
        }
        MakeTest('Tony: 20');
    });
    describe('contains1', function () {

        function MakeTest(expected) {
            var author = {};
            author.name = 'Tony';
            var init = "name" in author;

            it('is author contains propertie name : ' + expected, function () {
                assert.equal(init, expected);
            });
        }
        MakeTest(true);
    });
    describe('contains2', function () {

        function MakeTest(expected) {
            var author = {};
            author.name = 'Tony';
            var init = (author.lalala === undefined);

            it('isn`t author contains propertie lalala : ' + expected, function () {
                assert.equal(init, expected);
            });
        }
        MakeTest(true);
    });
    describe('PropAccThrVar', function () {

        function MakeTest(expected) {
            var author = {};
            author.name = 'Tony';
            var init = 'name';

            it('did we get property using variable :' + true, function () {
                assert.equal(init, expected);
            });
        }
        MakeTest('name');
    });
    describe('PropertyNumber', function () {

        function MakeTest(expected) {
            var author = {
                name: 'Tony',
                age: 20,
                height: 182,
                weight: 72
            };
            var counter = 0;
            for (var key in author){
                counter++;
            }

            it('did we get equal propertyNumb :' + true, function () {
                assert.equal(counter, expected);
            });
        }
        MakeTest(4);
    });
    describe('PropertyList', function () {

        function MakeTest(expected) {
            var author = {
                name: "Tony",
                age: 20,
                height: 182,
                weight: 72
            };
            var init = '';
            for (var key in author){
                init += key + ' ';
            }

            it('did we get equal propertyList :' + true, function () {
                assert.equal(init, expected);
            });
        }
        MakeTest('name age height weight ');
    });
    describe('PropertyListInMyOrder', function () {

        function MakeTest(expected) {
            var author = {
                age: '20',
                height: '182',
                weight: '72'
            };
            var init = '';
            for (var key in author){
                var value = author[key];
                key = +key;
                init += value + ' ';
            }

            it('did we get equal propertyList :' + true, function () {
                assert.equal(init, expected);
            });
        }
        MakeTest('20 182 72 ');
    });
    //actually when we r gonna to print object keys, which r digitals, JS will sort them from less one to max one
    describe('PropertyListInStandOrder', function () {

        function MakeTest(expected) {
            var author = {
                '38' : 'Ukraine',
                '7' : 'Russia',
                '1' : `Belgium`
            };
            var init = '';
            for (var key in author){
                init += key + ' ';
            }

            it('did we get equal propertyList :' + true, function () {
                assert.equal(init, expected);
            });
        }
        MakeTest('1 7 38 ');
    });
    //if we want to print our keys in our own order we should make them string instead of digital by adding '+' for example
    describe('PropertyListInStandOrder', function () {

        function MakeTest(expected) {
            var author = {
                '+38' : 'Ukraine',
                '+7' : 'Russia',
                '+1' : `Belgium`
            };
            var init = '';
            for (var key in author){
                init += +key + ' ';
            }

            it('did we get equal propertyList :' + true, function () {
                assert.equal(init, expected);
            });
        }
        MakeTest('38 7 1 ');
    });
    describe('EmptyObj', function () {

        function MakeTest(obj) {
            var expected = true;
            var real;
            for (var key in obj){
                real = false;
            }
            real = true;

            it('Is object empty : ' + expected, function () {
                assert.equal(real, expected);
            });
        }
        var author = {};
        MakeTest(author);
    });
    describe('Propertysum', function () {

        function MakeTest(expected) {
            var real = 0;
            var digitals = {
                'first': 120,
                'second': 70,
                'third': 15
            }
            for (var key in digitals){
                real += digitals[key];
            }
            it('Sum of digitals '+ digitals.first + ' ' +digitals.second + ' ' + digitals.third + ' : ' + expected, function () {
                assert.equal(real, expected);
            });
        }
        MakeTest(205);
    });
    describe('MaxFromObj', function () {

        function MakeTest(expected) {
            var real = 0;
            var digitals = {
                'first': 120,
                'second': 70,
                'third': 15
            }
            for (var key in digitals){
                if (real < digitals[key]){
                    real = digitals[key]
                }
            }
            it('Max from digitals '+ digitals.first + ' ' +digitals.second + ' ' + digitals.third + ' : ' + expected, function () {
                assert.equal(real, expected);
            });
        }
        MakeTest(120);
    });
    describe('MinFromObj', function () {

        function MakeTest(expected) {
            var digitals = {
                'first': 120,
                'second': 70,
                'third': 15
            }
            var real = digitals.first;
            for (var key in digitals){
                if (real > digitals[key]){
                    real = digitals[key]
                }
            }
            it('Max from digitals '+ digitals.first + ' ' +digitals.second + ' ' + digitals.third + ' : ' + expected, function () {
                assert.equal(real, expected);
            });
        }
        MakeTest(15);
    });
    describe('MultyNumProp', function () {
        var digitals = {
            'name': 'Tony',
            'first': 120,
            'second': 70,
            'third': 15
        };
        function IsNum(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        function MakeTest(obj) {

            for (var key in obj){
                if (IsNum(obj[key])){
                    obj[key] *= 2;
                }
            }
            it('Multiply by 2 digitals 120 70 15 : ' + digitals.first + ' ' + digitals.second + ' ' + digitals.third , function () {
                assert.equal(240, digitals.first);
                assert.equal(140, digitals.second);
                assert.equal(30, digitals.third);
            });
        }
        MakeTest(digitals);
    });
    describe('CoppingObj', function () {

        function MakeTest(expected) {
            var user = {
                'name': 'Slava'
            }
            var admin = user;
            admin.name = 'Teona';
            it('changing name Slava to ' + user.name, function () {
                assert.equal(user.name, expected);
            });
        }
        MakeTest('Teona');
    });
    describe('CloneObj', function () {

        function MakeTest(expected, expected2) {
            var user = {
                'name': 'Slava'
            }
            var admin = {};
            for (var key in user){
                admin[key] = user[key];
            }
            admin.name = 'Teona';
            it('make different name in clone, from ' + user.name + ' to: ' + admin.name, function () {
                assert.equal(user.name, expected);
                assert.equal(admin.name, expected2);
            });
        }
        MakeTest('Slava', 'Teona');
    });

});