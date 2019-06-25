const {assert, expect} = require('chai');

describe('massive', function () {

    describe('massivePrint', function () {

        function MakeTest(expected) {
            var mas = ['me', 'you', 'he', 'she'];
            var string = '';
            for (var i = 0; i < mas.length; i++){
                string += mas[i] + ' ';
            }

            it('print massive me you he she : ' + expected, function () {
                assert.equal(string, expected);
            });
        }
        MakeTest('me you he she ');
    });
    describe('MasLen', function () {

        function MakeTest(expected) {
            var mas = [85, 47, 87, 11, 45, 87, 145, 87, 71, 741]

            it('what is mas(85 47 87 11 45 87 145 87 71 741) length : ' + expected, function () {
                assert.equal(mas.length, expected);
            });
        }
        MakeTest(10);
    });
    describe('GetById', function () {

        function MakeTest(expected) {
            var mas = ['Dog', 'Lion', 'Cat']

            it('get element by id 1 : ' + expected, function () {
                assert.equal(mas[1], expected);
            });
        }
       MakeTest('Lion') ;
    });
    describe('ChangeById', function () {

        function Maketest(expected) {
            var mas = ['lsd', 'spidu', 'soli', 'Anon'];
            mas[3] = 'Anon'
            it('change element by id 3', function () {
                assert.equal(mas[3], expected)
            });
        }
        Maketest('Anon');
    });
    describe('AddElem', function () {

        function MakeTest(expected) {
            var mas = ['Tchar','Wchar'];
            mas[2] = 'Char';
            it('add elem on 2id : ' + expected, function () {
                assert.equal(mas[2], expected);
            });
        }
        MakeTest('Char');
    });
    describe('Pop', function () {

        function MakeTest(expected) {
            var mas = ['qq', 'ww', 'ee'];
            mas.pop();
            it('pop last element from qq ww ee : ' + mas[0] + ' ' + mas[1] , function () {
                assert.equal(mas.length, expected)
            });
        }
        MakeTest(2);
    });
    describe('Push', function () {

        function MakeTest(expected) {
            var mas = ['qq', 'ww', 'ee'];
            mas.push('rr');
            it('push element to qq ww ee : ' + mas[0] + ' ' + mas[1] + ' ' + mas[2] + ' ' + mas[3] , function () {
                assert.equal(mas.length, expected)
            });
        }
        MakeTest(4);
    });
    describe('Shift', function () {

        function MakeTest(expected) {
            var mas = ['qq', 'ww', 'ee'];
            mas.shift;
            it('shift element to qq ww ee : ' + mas[0] + ' ' + mas[1] + ' ' + mas[2], function () {
                assert.equal(mas.length, expected)
            });
        }
        MakeTest(3);
    });
    describe('UnShift', function () {

        function MakeTest(expected) {
            var mas = ['qq', 'ww', 'ee'];
            mas.unshift('ss');
            it('unshift element to qq ww ee : ' + mas[0] + ' ' + mas[1] + ' ' + mas[2] + ' ' + mas[3] , function () {
                assert.equal(mas.length, expected)
            });
        }
        MakeTest(4);
    });
    
});