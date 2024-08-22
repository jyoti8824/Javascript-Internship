// function add( a, b ) {
//     return a + b;
// }

// function subtract( a, b ) {
//     return a - b;
// }

// function multiply( a, b ) {
//     return a * b;
// }

// function divide( a, b ) {
//     return a / b;
// }

// function modulo( a, b ) {
//     return a % b;
// }


// function calculator( a, b, operator ) {
//     return operator( a, b );
// }

// console.log( "Addition:", calculator( 3, 3, add ) );
// console.log( "Subtraction:", calculator( 3, 3, subtract ) );
// console.log( "Multiplication:", calculator( 3, 3, multiply ) );
// console.log( "Division:", calculator( 3, 3, divide ) );
// console.log( "Modulus:", calculator( 3, 3, modulo ) );


// function homeKeeper( yearsOfExperience, name, cleaningSpecialty ) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningSpecialty = cleaningSpecialty;
//     this.cleaner = function () {
//         var answer = cleaningSpecialty;
//         if ( answer == "Bedroom" || answer == "bedroom" || answer == "Bathroom" || answer == "bathroom" ) {
//             cleaning();
//             cleaned();
//         } else {
//             alert( "Okay, Have a good day!" );
//         }
//     };
// }

// function cleaning() {
//     alert( "Cleaning" );
// }

// function cleaned() {
//     alert( "Cleaned" );
// }

// var homeKeeper1 = new homeKeeper( 5, "John", "Bedroom" );
// var homeKeeper2 = new homeKeeper( 3, "Jane", "Bathroom" );
// var homeKeeper3 = new homeKeeper( 2, "Jack", "Kitchen" );

// homeKeeper1.cleaner();
// homeKeeper2.cleaner();
// homeKeeper3.cleaner();