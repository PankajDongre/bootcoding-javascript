// 1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// let challenge = '30 Days Of JavaScript';

// 2.Print the string on the browser console using console.log().
// console.log(challenge);

// 3.Print the length of the string on the browser console using console.log().
// console.log(challenge.length);

// 4.Change all the string characters to capital letters using toUpperCase() & toLocaleLowerCase method.
// console.log(challenge.toLocaleUpperCase());
// console.log(challenge.toLocaleLowerCase());

// 5.Cut (slice) out the first word of the string using substr() or substring() method.
// console.log(challenge.substr(0,1));
// console.log(challenge.substring(0,1));
// console.log(challenge.substr(3,10)); // show start to end of length
// console.log(challenge.substring(3,10)); //show start to before end 
 

// 6.Check if the string contains a word Script using includes() method.
// console.log(challenge.includes("Script")); //serching methode (Case Sensetive)

// 7.Split the string into an array using split() method.
// console.log(challenge.split()); //convert in Array

// 8.Split the string 30 Days Of JavaScript at the space using split() method.
// console.log(challenge.split('')); //convert in Array

// 9.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// console.log(challenge.replace('JavaScript','python')); // Case Sensetive

// 10.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// console.log(challenge.charAt(15)); //search index No. in str & get alphabet


// 11.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
// console.log(challenge.charCodeAt('J')); // show uniq code of alphabet or number


// 12.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScripta
// console.log(challenge.indexOf('a')); //find starting element & get index No.

// 13.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// console.log(challenge.lastIndexOf('a')); //find starting element & get index No.

// 14.Use indexOf to find the position of the first occurrence of the word because in the following sentence:
let str = 'You cannot end a sentence with because because because is a conjunction'
// console.log(str.indexOf('because'));

// 15.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence given que :14
// console.log(str.lastIndexOf('because')) //if o/p is -1 than so method can't find str also case sensetive

// 16.Use search & match to find the position of the first occurrence of the word because in the following sentence given que :14
// console.log(str.search('because')); //as same as indexOf  method
// console.log(str.match(/because/g)) // find same word/alpha & /i-local /g-gobal


// 17.Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let str1 = '         abcd'
let str2 = 'abcd     '
let str3 = '   abcd     efgh   '

// console.log(str1.trim());
// console.log(str2.trim());
// console.log(str3.trim()); //can't trim middel white space


// 18.Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
// console.log(challenge.startsWith('30'));


// 19.Use endsWith() method with the string 30 Days Of JavaScript and make the result true.
// console.log(challenge.endsWith('Script'));


// 20.Use match() method to find all the a’s in 30 Days Of JavaScript.
// console.log(challenge.match(/a/g));


// 21.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// console.log(challenge + str1);


// 22.Use repeat() method to print 30 Days Of JavaScript 2 times
// console.log(challenge.repeat(3));



// =======level - 2========= //

// 1.Using console.log() print out the following statement:
// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");


// 2.Using console.log() print out the following quote by Mother Teresa:
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");


// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = '10';
let b = 10;
a= Number(a)
// if(a==b) [== double equal only cheack value ]
if(a === b){    // [=== tripal equal cheack value & type]
    // console.log("both are equal");
}
else{
    // console.log("both are not equal");
}


// 4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let c ='9.8'
let d = 10;

c = Math.ceil(Number (c)) //ceil is converting to No.++ in round fig
if(c===d){
    // console.log("C & D is equal");
}
else{
    // console.log("C & D is not equal");
}


// 5.Check if 'on' is found in both python and jargon
let e = 'python'

// console.log(e.match('on'));

// 6.I hope this course is not full of jargon. Check if jargon is in the sentence.

// 7.Generate a random number between 0 and 100 inclusively.
// console.log(Math.random() * 100); //given value with point

// 8.Generate a random number between 50 and 100 inclusively.
// console.log(Math.floor (Math.random() * 50) + 50); // floor is given without point value


// 9.Generate a random number between 0 and 255 inclusively.
// console.log(Math.random() * 255);

// 10.Access the 'JavaScript' string characters using a random number.
let f = 'JavaScript';
let array = f.split('')
let h = Math.floor(Math.random() * f.length)
// console.log(array[h],h);

// 11. Genrate Random Number & Alphabets
// console.log(Math.random(f).toString(26).slice(2,5));
// console.log( Math.random().toString(36).substring(2,7));


// 12.Use console.log() and escape characters to print the following pattern.
let i= `1 1 1 1 1
        2 1 2 4 8
        3 1 3 9 27
        4 1 4 16 64
        5 1 5 25 12`

// console.log('1 1 1 1 1\n2 3 4 4 6 \n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 12');

// 13.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// console.log(str.indexOf('because')); // get a 1st 'b-because' index 31
// console.log(str.lastIndexOf('because')); // get a last 'b-because' index 47
// console.log(str.substr(31,23)); //31 is index & how many char i have(23)
// console.log(str.substring(31,54));// 1st 'b-31' & last 'b-47'+6=53

