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

