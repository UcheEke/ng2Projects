var myobj = {
    id: 2,
    name: "Uche's Interface",
    method: function () { console.log("Hello from IMyInterface!"); },
    methodWithReturnVal: function () { return 2; },
    sum: function (numbers) {
        return numbers.reduce(function (a, b) { return a + b; });
    }
};
var sum = myobj.sum([1, 2, 3, 4, 5]);
console.log(sum);
//# sourceMappingURL=main.js.map