//var myArray = ['jenna', 'ja', 'owen', 'ryan', 'evan'];
//console.log(myArray.length);
//
//for (i = 0; i < myArray.length; i++) {
//    console.log(myArray[i] + ' length ' + myArray[i].length);
//}
//
//var copiedArray = [];
//for (i = 0; i <= 4; i++) {
//    copiedArray.push(myArray[i]);
//}
//
//var reverseArray = [];
//for (i = 0; i <= 4; i++) {
//    reverseArray.push(copiedArray.reverse()[i]);
//}
//
//var alphabeticalArray = [];
//for (i = 0; i <= 4; i++) {
//    alphabeticalArray.push(copiedArray.sort()[i]);
//}
//
//var numArray = [10, 130, 25, 200, 2];
//
//numArray.sort(
//    function (a, b) {
//        return a - b;
//    }
//);
//
//var wordArray = ["this", "is", "an", "array", "of", "words"];
//var copyWordArray = [];
//for (i = 0; i < wordArray.length; i++) {
//    copyWordArray.push(wordArray[i]);
//}
//var reverseWordArray = copyWordArray.reverse();
//
//
//var threeArray = ['one', 'two', 'three'];
//threeArray.push('four', 'five');
//var removedItem = threeArray.shift();
//var removedItem2 = threeArray.pop();

//empty array
var myArray = [];

function makeArray() {
    userInput = document.getElementById('input');
    myArray.push(userInput.value);
    console.log(myArray);
}

function listApp() {
    makeArray();
    var list = document.createElement('ul');
    var listItem = document.createElement('li');
    listItem.innerText = userInput.value;
    document.body.appendChild(list);
    list.appendChild(listItem);
}
