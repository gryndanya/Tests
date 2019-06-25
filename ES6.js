//const describe = require("mocha");
const {assert, expect} = require('chai');


describe('ES6', function () {

    describe('this', function () {

        function MakeTest(expected) {
            let someVariable = {
                name: 'Name',
                GetName: function () {
                    return this.name
                }
            };

            it('if this work we will get : ' + expected, function () {
                assert.equal(someVariable.GetName(), expected);
            });
        }

        MakeTest('Name');
    });

    describe('callback', function () {

        function MakeTest(expected = [88, 5, 71, 14, 12, 7]) {
            let array = [1, 2, 3, 5, 8, 9];
            const map1 = array.map(v => v * 2);

            it(`multiply ${array} on 2 : ` + expected, function () {
                assert.deepEqual(map1, expected);
            });
        }

        MakeTest([2, 4, 6, 10, 16, 18]);
    });

    // describe('promise reject',function () {
    //
    //     it('xx' + expected, function (done) {
    //         function MakeTest(expected) {
    //             const promise = new Promise((resolve, reject) =>{
    //                 setTimeout( () => reject(new Error("Error")), 10);
    //             });
    //
    //             let expectedError = null;
    //
    //             promise
    //                 .catch((error) => expectedError = error)
    //                 .finally(() => {
    //                     assert.equal(expectedError.message, 'Error')
    //                     done()
    //                 });
    //         }
    //         MakeTest('Error');
    //     });
    //
    // });

    describe('promise fulfilled', function () {

        async function MakeTest(expected) {
            const promise = new Promise((resolve, reject) => {
                resolve('Done!')
            });

            let expectedResult = null;
            promise
                .then((result) => expectedResult = result)
                .finally(() => {
                    assert.equal(expectedResult, expected);
                });
            it('Result is : ' + expected, function () {
                assert.equal(expectedResult, expected);
            });
        }

        MakeTest('Done!');
    });

    describe('promissification', async function () {

            it('Hmm who will be first : ' + '-_- it`s 7!', async function () {
                async function MakeTest() {

                    return new Promise((resolve, reject) => {
                        resolve('-_- it`s 7!');
                    });
                    const ii = await promise
                        .then(result => {
                            return result;
                        })
                }

                const expected = '-_- it`s 7!';
                const answer = await MakeTest()
                assert.deepEqual(answer, expected);
            });
    });

    describe('chaining', async function () {

        async function MakeTest(expected) {
            it('Your final array is : ' + expected, async function () {
                const promise = new Promise((resolve, reject) => {
                    resolve([1, 2, 3, 4, 5, 6, 7]);
                });
                let expectedError = null;
                const map1 = await promise
                    .then(result => {
                        let aray = result;
                        return aray;
                    })
                    .then(aray => {
                        var map1 = aray.map(v => v * 2);
                        return map1;
                    })
                    .then(map1 => {
                        assert.deepEqual(map1, expected);
                        return map1;
                    })
                    .catch((error) => expectedError = error);
                assert.deepEqual(map1, expected);
            });
        }

        await MakeTest([2, 4, 6, 8, 10, 12, 14]);
    });

    // describe('promise.all', function () {
    //
    //     it('Hmm who will be first : ' + 'No, I`m first', async function () {
    //         async function MakeTest(param) {
    //
    //             return new Promise(async function(resolve, reject) {
    //                 setTimeout(() => resolve('I`m first'), 20);
    //                 setTimeout(() => resolve('No, I`m first'), 10);
    //             });
    //             const ii = await promise
    //                 .then(result => {
    //                     return result;
    //                 })
    //         }
    //         let answers = [
    //             'first',
    //             'second',
    //             'third'
    //         ]
    //         const expected = 'first, second, third';
    //
    //         const ii = await Promise.all(answers.map(await MakeTest) )
    //             .then(results => {
    //                 return results;
    //             });
    //         assert.equal(ii ,expected);
    //     });
    // });

    describe('promise.race', async function () {

        it('Hmm who will be first : ' + 'No, I`m first', async function () {
            async function MakeTest() {

                return new Promise((resolve, reject) => {
                    setTimeout(() => resolve('I`m first'), 20);
                    setTimeout(() => resolve('No, I`m first'), 10);
                });
                const ii = await promise
                    .then(result => {
                        return result;
                    })
            }

            const expected = 'No, I`m first';
            const res = await Promise.race([
                MakeTest()
            ])
                .then(result => {
                    var Firstresult = result;
                    return Firstresult;
                })
                .then(Firstresult =>{
                    return Firstresult;
                });
            assert.equal(res, expected);
        });
    });

    describe('proxy get', function () {
        let expected = 'Admin';
        it('Username is: ' + expected, function () {
            let user = {name: 'Admin'};

            user = new Proxy(user, {
                get(target, p) {
                    if (p in target) {
                        let my = target[p];
                        return my;
                    } else {
                        let error = `not exist ${p}`;
                        return error;
                    }
                }
            });

            assert.equal(user.name, expected);
        });
    });

    describe('proxy get/set', function () {
        let expected = 'Anton';
        it('User name is: ' + expected, function () {
            let user = {};

            let proxy = new Proxy(user, {
                get(target, prop) {
                    return target[prop];
                },
                set(target, prop, value) {
                    target[prop] = value;
                    return true;
                }
            });

            proxy.firstName = "Anton";
            assert.equal(proxy.firstName, expected);
        });

    });

    describe('proxy not exist', function () {
        let expected = `not exist age`;
        it('User name is: ' + expected, function () {
            let user = {
                name : 'Anton',
                surname: 'Rimin'
            };

            user = new Proxy(user, {
                get(target, p) {
                    if (p in target) {
                        let my = target[p];
                        return my;
                    } else {
                        let error = `not exist ${p}`;
                        return error;
                    }
                }
            });

            assert.equal(user['age'], expected);
        });
    });

    describe('proxy has', function () {
        let expected = true;
        it('Does user rrrds exist : ' + expected, function () {
            let user = {
                name : 'Anton',
                surname: 'Rimin'
            };

            user = new Proxy(user, {
                has(target, p) {
                    return true;
                }
            });

            assert.equal('rrrds' in user, expected);
        });

    })

    describe('proxy apply', function () {

        function MakeTest(param1, param2) {
            return param1 + param2;
        }
        MakeTest(25, 26);
        let expected = 51;
        it(`Sum of 25 and 26 is: ` + expected, function () {
            let proxy = new Proxy(MakeTest, {
                apply(target, thisArg, argArray) {
                    return target.apply(thisArg, argArray);
                }
            });
            assert.equal(proxy(26, 25), expected);
        });
    });

    describe('proxy construct', function () {
       
        function User(name, surname) {
            name = this.name;
            surname = this.surname;
        }

        let expected = 'Anton Rimin';
        it('should ' + expected, function () {
            let UserProxy = new Proxy(User, {
                construct: function(target, argArray) {
                    return new target(...argArray);
                }
            });
            let user = new UserProxy('Anton', 'Rimin');
            let answer = user.name;
            assert.equal(answer, expected);
        });
    });

    describe('proxy isExtensible', function () {
        let expected1 = true;
        let expected2 = false;
        const user = {
            canEvolve : true
        }
        const handl = {
            isExtensible(target){
                return Reflect.isExtensible(target);
            },
            preventExtensions(target){
                target.canEvolve = false;
                return Reflect.preventExtensions(target);
            }
        };

        const proxy = new Proxy(user, handl);
        it('proxy Extensible : ' + expected1 + '\n prevent Extensible: ' + expected2, function () {
            assert.equal(Object.isExtensible(proxy), expected1);
            Object.preventExtensions(proxy);
            assert.equal(Object.isExtensible(proxy), expected2);
        });

    });

    describe('generator with more then 1 yield',function () {

        it('should ', function () {
            function MakeTest() {
                function* generator(){
                    yield 1;
                    yield 2;
                    return 3;
                }

                let gener = generator();
                let ans = gener.next();
                return JSON.stringify(ans);
            }
            let expected = '{"value":1,"done":false}';
            let answer = MakeTest();
            assert.equal(answer, expected);
        });
    });

    describe('generator with 1 value',function () {

        it('should ', function () {
            function MakeTest() {
                function* generator(){
                    return  1;
                }

                let gener = generator();
                let ans = gener.next();
                return JSON.stringify(ans);
            }
            let expected = '{"value":1,"done":true}';
            let answer = MakeTest();
            assert.equal(answer, expected);
        });
    });

    describe('generator',function () {

        it('should ', function () {
            function MakeTest() {
                function* generator(){
                    yield 1;
                    yield 2;
                    return 3;
                }

                let gener = generator();
                let ans = gener.next();
                JSON.stringify(ans);
                let nas = gener.next();
                JSON.stringify(nas);
                let san = gener.next();
                return JSON.stringify(san);
            }
            let expected = '{"value":3,"done":true}';
            let answer = MakeTest();
            assert.equal(answer, expected);
        });
    });
    //iterator with return value(for of ignore return value when done: true)
    describe('gen-iterator', function () {
        let expected = '1 2 ';

        it('yield values r: ' + expected, function () {
            function MakeTest() {
                function* generator() {
                    yield 1;
                    yield 2;
                    return 3;
                }
                let gener = generator();
                let result = '';
                for(let key of gener){
                     result += key + ' ';
                }
                return result;
            }
            let result = MakeTest();
            assert.equal(result,expected);
        });
    });
    //iterator with yield instead of return value
    describe('gen-iterator', function () {
        let expected = '1 2 3 ';

        it('yield values r: ' + expected, function () {
            function MakeTest() {
                function* generator() {
                    yield 1;
                    yield 2;
                    yield 3;
                }
                let gener = generator();
                let result = '';
                for(let key of gener){
                    result += key + ' ';
                }
                return result;
            }
            let result = MakeTest();
            assert.equal(result,expected);
        });
    });
    //iterator using yield plus simple for operator
    describe('gen-iterator', function () {
        let expected = [1, 2, 3, 4, 5];

        it('should ', function () {

            function MakeTest() {

                function* generator(start, end) {
                    for(let i = start; i <= end; i++){
                        yield  i;
                    }
                }
                let ans = [...generator(1,5)];
                return ans;
            }
            result = MakeTest();
            assert.deepEqual(result, expected);
        });
    });

    describe('gen-composition', function () {
        let expected = '0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z ';

        it('should ', function () {

            function MakeTest() {

                function* generator(start, end) {
                    for(let i = start; i <= end; i++){
                        yield  i;
                    }
                }

                function* secondOne() {
                    yield* generator(48, 57);
                    yield* generator(65, 90);
                    yield* generator(97, 122);
                }
                let result = '';
                
                for (let key of secondOne() ){
                    result += String.fromCharCode(key) + ' ';
                }
                return result;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('both way yield', function () {
        let expected = '4';

        it('answer on 2+2 is: ' + expected, function () {

            function MakeTest() {
                function* generator() {
                    let resultY = yield "4";
                }
                let gen = generator();
                let question = gen.next().value;
                gen.next(4).value;
                let answer;
                for (let key of generator() ){
                    answer = key;
                }
                return answer;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });
    //throw error using yield
    describe('generator.thow', function () {
        let expected = 'Error: Too hard for me';

        it('How much is 2+2 : ' + expected, function () {

            function MakeTest() {

                function* generator() {
                    let result = yield '2 + 2 will be?'
                }
                let gen = generator();
                let question = gen.next().value;

                try {
                    gen.throw(new Error('Too hard for me'));
                }catch (e) {
                    return e;
                }
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    // describe('',async function () {
    //     let expected = '1';
    //
    //     it('should ' + expected,async function () {
    //
    //        async function MakeTest() {
    //
    //            let variable = await co(async function*(){
    //                 let result = yield new Promise(resolve => 1);
    //                 return result;
    //             })
    //                 .then(result =>{
    //                     let ans = result;
    //                     return let;
    //                 })
    //         }
    //         let final = await MakeTest();
    //        assert.equal(final, expected);
    //     });
    // })

    describe('destructuring', function () {
        let expected = 3;

        it('destruct b value: ' + expected, function () {
            
            function MakeTest() {
                let [a, , b] = [1,2,3];
                return b;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('obj_destruct', function () {
       let expected = 'a b c';

        it('obj destruct: ' + expected, function () {

            function MakeTest() {
                nan = () => {return {op: 'a',on: 'b', or: 'c'}}
                let { op: a, on: b, or: c } = nan();
                return a + ' ' + b + ' ' + c;
            }
            result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('spread in func', function () {
       let expected = 6;

        it(' ' + expected, function () {

            function MakeTest(x, y, z) {
                return x+y+z;
            }
            let result = MakeTest(...[1,2,3]);
            assert.equal(result, expected);
        });
    });

    describe('spread in func', function () {
        it('should ', function () {
            let expected = ['my', 'name', 'is', 'Anton'];
            function MakeTest() {
                let Insertarr = ['name', 'is'];
                let arr = ['my', ...Insertarr, 'Anton'];
                return arr;
            }
            let result = MakeTest();
            assert.deepEqual(result, expected);
        });
    });

    describe('spread+objliter', function () {
       let expected = {x: 1, y: 2, a: 3, b: 4};

        it('objliter r : ' + expected, function () {
            
            function MakeTest() {
                let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
                let n = {x, y, ...z};
                return n;
            }
            let result = MakeTest();
            assert.deepEqual(result, expected);
        });
    });

    describe('dynamic iterators', function () {
       let expected = '1 2 3 ';

        it('should ' + expected, function () {
            
            function MakeTest() {
                let infinite = {
                    [Symbol.iterator](){
                        let c = 0;
                        return{
                            next(){
                                c++;
                                return{ done:false, value: c}
                            }
                        }
                    }
                }
                var ans = '';
                for(let key of infinite){
                    if(key > 3) break;
                    ans += key + ' ';
                }
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('generator is more dynamic than iterators', function () {
       let expected = '1 2 3 4 ';

        it('should ' + expected, function () {
            
            function MakeTest() {
                let infinity = {
                    [Symbol.iterator]: function*() {
                        let c = 1;
                        for (;;) {
                            yield c++;
                        }
                    }
                }
                var ans = '';
                for(let key of infinity){
                    if(key > 4) break;
                    ans += key + ' ';
                }
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    describe('proxies as alter object behavior', function () {
       let expected = 'Good day';

        it('How is your day? : ' + expected, function () {

            function MakeTest() {
                let obj = function generator() {
                    return {mood: "Bad day"}
                }()

                let handler = function handl() {
                    return {
                        get: function (target, key) {
                            return target[key].replace("Bad", "Good");
                        },
                    }

                }()

                let proxy = new Proxy(obj, handler);
                let ans = proxy.mood;
                return ans;
            }
            let result = MakeTest();
            assert.equal(result, expected);
        });
    });

    
});



