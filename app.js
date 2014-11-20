$(document).ready(function() {

function addListItem() { //when you add an item to the list
    
     var write = $('#newItem').val(); //get the values of form elements 
     //var list = $('#itemList'); //in #bottom - this holds the list of items entered in #newItem
     var item = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + write + '</span><button class="delete">&#x2717</button></li>'); /*dingbats - first is check; second is check*/
     //var newItem = $("#newItem");

    /* if (write.length === 0  || write.length > 33) {
        return false;
    }*/
    
    $('#itemList').append(item); //append check and X marks to #itemList
    $(newItem).val(''); //get val for input
}

function deleteItem() {

    $(this).parent().remove();
}

function highlightItem() { //item changes color after you click check mark

    $(this).parent().toggleClass('highlight');
}


    //REMOVE 30-32 no need to set var, it simplifies code a bit
    //var add = $('#addItem'); //the plus sign is #addItem
    //var newItem = $('#newItem'); //the form
    //var list = $('#itemList'); 
    
    $('#addItem').on('click', addListItem);
    $('#itemList').on('click', '.checkbox', highlightItem);
    $('#itemList').on('click', '.delete', deleteItem);
    $('#newItem').on('keypress', function (e) { //e is an arbitrary name, you can call it anything
        if (e.which == 13) {
            addListItem();
        }
    });


});

