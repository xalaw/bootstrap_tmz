/**
 * Created by Alvin on 1/23/15.
 */
$('div.tourtimes').hide();
$('button.tourbtn').on('click', function(event) {
    $('div.tourtimes').slideToggle();
});