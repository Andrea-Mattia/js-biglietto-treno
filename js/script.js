/**
 * GENERATING TICKET PRICE BY KM AND AGE
 */

function myFunction() {
    //GET KM DATA
    var kilo = document.getElementById('kilometers').value;
    //GET AGE DATA
    var age = document.getElementById('age').value;
    //GENERATE PRICE
    var price = kilo * 0.27;
    //INSERT PRICE IN HTML
    document.getElementById('ticket-price').innerHTML = price + '€';
}