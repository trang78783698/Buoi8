function reverseWords(content) {
    arrStr = content.split(" ")
    newString = ""
    for (let i = arrStr.length - 1; i >= 0; i--) {
        newString += arrStr[i] + " ";
    }
    return newString;
}
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("hello   world!"));
console.log(reverseWords("a good example"));