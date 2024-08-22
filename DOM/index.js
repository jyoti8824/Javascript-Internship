//Selecting HTML elements By javascript:
// 1. Single Element Selector
//inner.HTML property
document.getElementById( 'title' ).innerHTML = '<hr>DOM Manipulation<hr>';

document.getElementsByClassName( "item" )[ 1 ].innerHTML = "3rd one GitHub Link";

document.getElementsByTagName( "button" )[ 0 ].innerHTML = "I am here";

// 2. Multi Element Selector

document.querySelector( '#list li#second-item' ).style.color = 'blue';

//Manupulating and Changing Styles of HTML elements By javascript:
// 1. Changing Styles
document.getElementById( 'title' ).style.color = 'white';
document.getElementById( 'title' ).style.backgroundColor = 'black';

// 2. Adding Styles
document.getElementById( 'title' ).style.fontSize = '5rem';

// 3. Removing Styles
document.getElementById( 'title' ).style.fontSize = '';

// 4. Adding Multiple Styles
document.getElementById( 'title' ).style.cssText = 'color: white; background-color: black; font-size: 5rem; text-align: center;';

//Separation of Concern Structure/styles/behaviour Adding Classes
document.querySelector( '#title' ).classList.toggle( 'class-title' );
document.querySelector( '#title' ).classList.toggle( 'class-title' );

//Text Manupulation & Text Content property
// 1. Changing Text
document.querySelector( 'a' ).textContent = 'W3Schools';

//Changing Attributes
document.querySelector( 'a' ).setAttribute( 'href', 'https://r.search.yahoo.com/_ylt=Awr1QMlB4cZmSAQAjz67HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1725519426/RO=10/RU=https%3a%2f%2fwww.w3schools.com%2f/RK=2/RS=X6fCiigA6P6WTQDtmU1sjo22iVA-' );



