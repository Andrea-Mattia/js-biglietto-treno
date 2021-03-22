/**
 * GENERATING TICKET PRICE BY KM AND AGE
 */

function myFunction() {
    //GET KM DATA
    var kilo = parseInt(document.getElementById('kilometers').value);

    //GET AGE DATA
    var age = parseInt(document.getElementById('age').value);

    //VALIDATOR
    if ( (isNaN(kilo)) || (isNaN(age))) {
        alert('Attention! Insert a number!');
        return;
    }

    //GENERATE PRICE
    //IF SECTION
    var price = kilo * 0.21;
    var discPerc;
    var discPrice;

    // Calculating discount if <18 or >=65
    if (age < 18) {
        discPerc = (price / 100) * 20;
        discPrice = price - discPerc;
        price = discPrice;
        document.getElementById('discount').innerHTML = 'You have a price reduction!';
    } else if (age >= 65) {
        discPerc = (price / 100) * 40;
        discPrice = price - discPerc;
        price = discPrice;
        document.getElementById('discount').innerHTML = 'You have a price reduction!';
    } else {
        //added to remove 'you have a price red.'
        document.getElementById('discount').innerHTML = '';
    }
    
    //INSERT PRICE IN HTML
    document.getElementById('ticket-price').innerHTML = price.toFixed(2) + '€';
}
