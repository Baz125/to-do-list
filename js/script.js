function newItem() {
 let li = $('<li>');
 let inputValue = $('#input').val();
 li.append(inputValue);
 

 if (inputValue === '') {
    alert("Write something before clicking add!")
 } else {
    $('#list').append(li);
 }

$('li').on('dblclick', function(){
    li.toggleClass('strike');
} )

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('x'));
li.append(crossOutButton);


$(crossOutButton).on('click', function () {
    li.addClass('delete')
});

$('#list').sortable();
}