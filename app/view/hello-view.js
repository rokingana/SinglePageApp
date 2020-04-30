/**
 * The view means presentation of the model in a particular format.
 */

function canvas(data) {
    $('#app').empty()
        .append($('<h1>').text(data));
    
}



 export { canvas };