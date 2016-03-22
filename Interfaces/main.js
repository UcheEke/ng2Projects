"use strict";
let myobj = {
    id: 2,
    name: "Uche's Interface",
    method() { console.log("Hello from IMyInterface!"); },
    methodWithReturnVal() { return 2; },
    sum(numbers) {
        return numbers.reduce((a, b) => { return a + b; });
    }
};
let sum = myobj.sum([1, 2, 3, 4, 5]);
console.log(sum);
//# sourceMappingURL=main.js.map