const objects = [
    {
        number: 45,
    },
    {
        number: 4,
    },
    {
        number: 9,
    },
    {
        number: 16,
    },
    {
        number: 25,
    },
    {
        number: 16,
    },
    {
        number: 24,
    },
]
const newArr1 = [];
objects.forEach(function (obj) {
    newArr1.push(obj.number)
})
console.log(newArr1);
const checkArr = objects.filter(function (obj) {
    return obj.number < 20
});
console.log(checkArr);
const newArr = objects.map(function (obj) {
    return obj.number > 20
});
console.log(newArr);
const totalArr = newArr1.reduce(getSum, 0);
function getSum(total, num) {
    return total + num;
}
console.log(totalArr);