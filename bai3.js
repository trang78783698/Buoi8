function checkBoom(num) {
    return num.toString().includes("7");
}

function sevenBoom(arr) {
    flag = false
    for (var i in arr) {
        if (checkBoom(arr[i])) { flag = true; break; }
    }
    if (flag) console.log("Boom")
    else console.log("there is no 7 in the array")
}
sevenBoom([1, 3, 5, 2, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);