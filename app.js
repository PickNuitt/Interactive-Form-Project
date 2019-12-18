//Places focus on the "Name" input field
$('#name').focus();

// Hides the "other" job role text input until selected
$('#other-title').hide();

$('#title').on('click', function(event){
    if (event.target.value === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    };
});
// T-Shirt Global Variables
const $corn = $('#color option[value="cornflowerblue"]');
const $slate = $('#color option[value="darkslategrey"]');
const $gold = $('#color option[value="gold"]');
const $tomato = $('#color option[value="tomato"]');
const $steel = $('#color option[value="steelblue"]');
const $dim = $('#color option[value="dimgrey"]');



// Hide the “Select Theme” `option` element in the “Design” menu.
$('#design option').eq(0).hide();

// Update the “Color” field to read “Please select a T-shirt theme”.
$('#color').prepend('<option selected>Please select a T-Shirt theme</option>');
$('#color option')[0].selectedIndex = 0; 

// Hide the colors in the “Color” drop down menu
$('#color option:gt()').hide();

// when one of the two themes is selected, only the appropriate colors should show in the “Color” drop down menu
    // use a `change` event listener on the “Design” menu `select` element to listen for changes.
    // inside the event listener, you’ll use a conditional to determine what to hide, show and update.
$('#design').change(function(e) {
    if ($(e.target).val() === 'js puns') {
        $tomato.hide();
        $steel.hide();
        $dim.hide();
        $corn.show();
        $slate.show();
        $gold.show();
        
    } else if ($(e.target).val() === 'heart js') {
        $corn.hide();
        $slate.hide();
        $gold.hide();
        $tomato.show();
        $steel.show();
        $dim.show();
    };
});


//activity section

let domElm = $('<div></div>');
domElm.appendTo('.activities');

let activityCost = '0';
$('.activities').change(function(){
    let act = $('.activites:checkbox').html();
    console.log(act);
});


//payment section 
