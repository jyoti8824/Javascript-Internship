function calculateLove() {
    const name1 = document.getElementById( 'name1' ).value;
    const name2 = document.getElementById( 'name2' ).value;

    if ( name1 === "" || name2 === "" ) {   //combining operator
        alert( "Please enter both names!" );
        return;
    }

    var lovePercentage = Math.random() * 100;  //Random Number generation
    lovePercentage = Math.floor( lovePercentage ) + 1;
    if ( lovePercentage >= 50 ) {           //comparators and equality operators with control statements
        document.getElementById( 'result' ).textContent = `The Utmost Loving bond between two souls is ${lovePercentage}%.`;
    } else {
        document.getElementById( 'result' ).textContent = `The love percentage between ${name1} and ${name2} is ${lovePercentage}%.`;
    }

}
