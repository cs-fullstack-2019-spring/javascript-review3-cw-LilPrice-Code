function main() {
    //problem1();
    //problem2();
    problem3();
    //problem4();

}
main();
//Put the start of your program in a main function.
//Create a loop that takes user input and put it in an array.
//Once the user quits, print all items in the array.
//DO NOT print the array, print the items/elements in the array.
function problem1() {
    var userWords = [];
        while (true) {
            var inputs = prompt("Please enter another word. (Or 'q' to Quit)");
            if (inputs == 'q') {
                break;
            }
            userWords.push(inputs);
        }



    userWords.forEach(function (value, index, array) {
        console.log(value, index)})
}


//Put the start of your program in a main function.
//Create a function that can translate five English words into Spanish words.
//You should be able to call your function from your main function.
function problem2() {
    var wroteNumber = prompt("Enter a number between 1-5, but as a word!");
    switch (wroteNumber) {
        case "one":
            console.log("uno");
            break;
        case "two":
            console.log("duos");
            break;
        case "three":
            console.log("tres");
            break;
        case "four":
            console.log("cuatro");
            break;
        case "five":
            console.log("cinco");
            break;
    }

}



//Put the start of your program in a main function.
//Create a program that takes number inputs into an array until a quit word.
//Afterwards, display all numbers (not the array) and the sum.
function problem3() {
    var bigNums = [];
    while(true){
        var numbers = parseInt(prompt("Enter a Number."));
        if (bigNums == "q"){
            break;
        }
        bigNums.push(numbers);
    }


    bigNums.forEach(function (value, index, array) {
        console.log(numbers.value);

    })
}


//Put the start of your program in a main function.
//Create a class for Books with name, rating, genre, and author.
//Create a class method that will function that will change the rating of the book.
//Create three objects of the class Book and put them in an array.
//Lastly, use the array to display only the names of the books.
function problem4() {
class Books = (name, rating, genre, author){
    this.name = name;
    this.rating = rating;
    this.genre = genre;
    this.author = author;
    }


}
