const {assert, expect} = require('chai');

describe('NewLib', function () {

    describe('copyWithin', function () {
       let expected = [1,2,3,1,2,3];
       let arr = [1,2,3,4,5,6];

        it(`in ${arr} do copyWithin(3,0) : ` + expected, function () {

            function MakeTest() {

                let ans = arr.copyWithin(3,0);
                return ans;
            }
            let result = MakeTest();
            assert.deepEqual(result, expected);
        });
    });

    describe('findIndex', function () {
        let expected = 1;
        let arr = [1,2,3];

        it(`in ${arr} find index of 2 : ` + expected, function () {

            function MakeTest() {

                let ans = arr.findIndex(x=>x==2);
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('find', function () {
        let expected = 4;
        let arr = [1,2,3,4,5];
        it(`in ${arr} find element 4 in arr if contains : arr contains ` + expected, function () {

            function MakeTest() {
                let ans = arr.find(x=>x==4);
                return ans;
            }
            let result = MakeTest();
            assert.equal(result,expected);
        });
    })

    describe('fill', function () {
        let expected = [0,7,7,7,7];
        let arr = [0,0,0,0,0]

        it(`fill ${arr} with (7,1) : ` + expected, function () {

            function MakeTest() {
                let ans = arr.fill(7, 1);
                return ans;
            }
            let result = MakeTest();
            assert.deepEqual(result, expected);
        });
    });

    describe('string.includes', function () {
       let expected = true;
       let str = 'abbcdee';

        it(`is ${str} includes 'cdee' : ` + expected, function () {

            function MakeTest() {
                let ans = str.includes('cdee');
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('string.repeat', function () {
       let expected = 'nanOnanOnanO' ;
       let str = 'nanO';

        it(`repeat ${str} 3 times : ` + expected, function () {

            function MakeTest() {
                let ans = str.repeat(3);
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    })

    describe('isInteger', function () {
        let expected = false;
        let str = '5';

        it(`is ${str} integer : ` + expected, function () {

            function MakeTest() {
                let ans = Number.isInteger(str);
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    })
    //I thought each word will be an array element -_- ?
    describe('Array.of', function () {
       let expected = ['What do u want from me'];
       let str = 'What do u want from me';

        it(`make array from '${str}' : ` + expected, function () {

            function MakeTest() {
                let ans = Array.of(str);
                return ans;
            }
            let result = MakeTest();
            assert.deepEqual(result, expected);
        });
    });

    describe('isNan', function () {
        let expected = true;
        let str = NaN;

        it(`is ${str} equal NaN : ` + expected, function () {

            function MakeTest() {
                let ans = Number.isNaN(str);
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('hypot', function () {
        let expected = 10;
        let a = 6;
        let b = 8;
        it(`what is hypot with a = ${a} b = ${b} : ` + expected, function () {

            function MakeTest() {
                let ans = Math.hypot(a,b);
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });



    describe('inheritable Built-ins', function () {
        let expected = ['Hi,It`s inherit from native class'];

        it('Inherit from Array : ' + expected, function () {

            function MakeTest() {
                class MyClass extends Array{

                }
                let ans = new MyClass();
                ans[0] = "Hi,It`s inherit from native class";
                return ans;
            }
            let result = MakeTest();
            assert.deepEqual(result, expected);
        });
    })

    describe('Symbols', function () {
        let expected = 'admin';
        let typeSymbol = Symbol('type');

        it('New user access rights is : ' + expected, function () {

            function MakeTest() {
                class User{
                    constructor(type){
                        this[typeSymbol] = type;
                    }
                    getType(){
                        return this[typeSymbol];
                    }
                }
                let ans = new User('admin');
                return ans.getType();
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('Set', function () {
        let expected = 3;

        it('Set size is : ' + expected, function () {

            function MakeTest() {
                let set = new Set();
                set.add('My test');
                set.add('r almost');
                set.add('finished');
                return set.size;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('WeakSet', function () {
        let expected = false;

        it('We haven`t elem , only reference on elem : ' + expected, function () {

            function MakeTest() {
                let item = {a: 'Code'};
                let set = new WeakSet();
                set.add({a: 'Coder'}).add(item);
                return set.has({a: 'Coder'});
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('Map', function () {
        let expected = 200;

        it('What will be the answer code ? : ' + expected, function () {

            function MakeTest() {
                let ans = new Map();
                ans.set('Answer code', 200);
                ans.set('Error', 404);
                return ans.get('Answer code');
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });
    //store reference to the keys
    describe('WeakMap', function () {
        let expected = 'patau';

        it('should ' + expected, function () {

            function MakeTest() {
                let ans = new WeakMap();
                let child = {};
                ans.set(child, 'patau')
                return ans.get(child);
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('Unicode', function () {
        let expected = true;
        
        it('Unicode regex :  ' + expected, function () {

            function MakeTest() {
                let regex = new RegExp('\u{61}', 'u');
                return regex.unicode;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });
});
