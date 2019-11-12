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
    if (e.target === 'selected'){
    $('#color option:lt(5)').show();
    };  
});
